import React, { Component } from 'react';

import Square from './Square';
  
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: this.props.playerBoard,
      isHit: true
    };
  }

  handleClick(i) {
    const squares = this.state.squares;
    squares[i] = this.state.isHit ? 'X' : '.';
    this.props.playerAttack(squares);
    this.setState({
      squares: squares,
      isHit: !this.state.isHit
    });
  }

  renderRow(n) {
    let row = [];
    for(let i = n; i < n + 10; i++) {
      row.push(<Square key={i} value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>);
    }
    return row;
  }

  renderBoard() {
    let column = [];
    for(let i = 0; i < 100; i = i + 10) {
      column.push(
        <div key={i} className="board-row">{this.renderRow(i)}</div>
      );
    }
    return column;
  } 

  render() {
    let status;

    return (
      <div>
        <div className="status">{status}</div>
        {this.renderBoard()}
      </div>
    );
  }
}

export default Board;