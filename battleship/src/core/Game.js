import React, { Component } from 'react';
import '../styles/Game.css';

import Board from './Board';

class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board {...this.props}/>
        </div>
      </div>
    );
  }
}

export default Game;