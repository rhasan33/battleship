import React, { Component } from 'react';
import '../styles/Square.css';

class Square extends Component {
  render() {
    return (
      <div className="square" onClick={this.props.onClick}>
        {this.props.value}
      </div>
    );
  }
}

export default Square;