import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import AppContainer from './container/AppContainer';

import { Provider } from 'react-redux';
import store from './store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
