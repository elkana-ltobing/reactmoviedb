import React, { Component } from 'react';

import Home from './component/Home'
import Header from './component/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;