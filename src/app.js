import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Router } from 'react-router-dom';

import './theme/index.scss';

import { Routes } from './navigation/index';

import { history } from './navigation/history';
import store from './init/store';

export const App = () => {
  return (
    <Provider store={store()}>
      <ConnectedRouter history={history}>
        <Router history={history}>
          <Routes />
        </Router>
      </ConnectedRouter>
    </Provider>
  )
};
