export function playerAttack(square) {
  return function (dispatch) {
    dispatch({ type: 'HIT_A_PLAYER_BOX' , payload: square});
  }
}

export function enemyAttack(square) {
  return function (dispatch) {
    dispatch({ type: 'HIT_A_ENEMY_BOX' , payload: square});
  }
}