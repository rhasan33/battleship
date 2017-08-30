import { createStore, applyMiddleware , compose } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';

import reducers from './reducers.js';

const enhancer = compose(
  applyMiddleware(thunk, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(reducers, enhancer);

export default store;
