const defaultState = {
  playerBoard : Array(100).fill(null),
  enemyBoard : Array(100).fill(null)
}
const AppReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'HIT_A_PLAYER_BOX':
      return Object.assign({}, state, {
        playerBoard: action.payload
      });
    
    case 'HIT_A_ENEMY_BOX':
      return Object.assign({}, state, {
        playerBoard: action.payload
      });

    default:
      return state
  }
}

export default AppReducer