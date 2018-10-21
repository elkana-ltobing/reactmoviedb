import React, { Component } from 'react';
import axios from 'axios';

import HeroImage from './HeroImage'
import SearchBar from './SearchBar'
import FourColGrid from './FourColGrid'
import MovieThumb from './MovieThumb'
import Spinner from './Spinner'
import LoadMoreBtn from './LoadMoreBtn'

import {
    API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE
} from '../config';

import './Home.css'

class Home extends Component {

    state = {
        movies: [],
        loading: false,
        heroImage: null,
        searchTerm: ""
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        let endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=id-ID&page=1`
        this.fetchItems(endpoint)
    }

    fetchItems(endpoint) {
        axios.get(endpoint)
            .then(response => this.setState({
                movies: [...this.state.movies, ...response.data.results],
                heroImage: this.heroImage || response.data.results[0],
                loading: false
            }))
    }

    render() {
        // console.log(this.state.movies)
        return (
            <div className="rmdb-home">
                {this.state.heroImage ?
                    <div>
                        <HeroImage
                            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.heroImage.backdrop_path}`}
                            title={this.state.heroImage.original_title}
                            text={this.state.heroImage.overview}
                        />
                    </div>
                    :
                    null
                }
                <SearchBar />
                <FourColGrid
                    header={this.state.searchTerm ? "Hasil Pencarian" : "Film Populer"}
                >
                    {
                        this.state.movies.map((element, i) => {
                            return <MovieThumb
                                key={i}
                                clickable={true}
                                image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : '../images/no_image.jpg'}
                                movieId={element.id}
                                movieName={element.original_title}
                            />
                        })
                    }
                </FourColGrid>
                {
                    this.state.loading ? <Spinner /> : null
                }
                <LoadMoreBtn />
            </div>
        );
    }
}

export default Home;