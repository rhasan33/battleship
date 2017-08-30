import React, { Component } from 'react';
import '../styles/App.css';

import Navigation from './Navbar';
import Game from './Game';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="App">
          <Game {...this.props}/>
        </div>
      </div>
    );
  }
}

export default App;
