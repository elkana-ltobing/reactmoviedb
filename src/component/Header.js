import React from 'react';

import './Header.css'

const Header = () => {
    return (
        <div className="rmdb-header">
            <div className="rmdb-header-content">
                <img className="rmdb-logo" src={require("../images/reactMovie_logo.png")} alt="rmdb-logo" />
                <img className="rmdb-tmdb-logo" src={require("../images/tmdb_logo.png")} alt="tmdb-logo" />
            </div>
        </div>
    )
}

export default Header 