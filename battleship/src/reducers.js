import { combineReducers } from 'redux';

import AppReducer from './reducer/AppReducer';

const reducers = combineReducers({
  app: AppReducer
});

export default reducers;