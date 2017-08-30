import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { playerAttack, enemyAttack } from '../actions/AppAction';
import App from '../core/App';

class AppContainer extends Component {
  render() {
    // let shouldLoad = this.props.playerBoard ? true : false;
    return (
        <App
          playerAttack={this.props.playerAttack}
          enemyAttack={this.props.enemyAttack}
          playerBoard={this.props.playerBoard}
          enemyBoard={this.props.enemyBoard}/>
      );
  }
}

function mapStateToProps(store) {
  return {
    playerBoard: store.app.playerBoard,
    enemyBoard: store.app.enemyBoard,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    playerAttack: playerAttack,
    enemyAttack: enemyAttack
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(AppContainer);