import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { history } from '../navigation/history';
import { rootReducer } from './rootReducer';
import {
    middleware,
    composeEnhancers,
} from './middleware';

export default function configureStore() {

  const localStorageMiddleware = ({getState}) => {

    return (next) => (action) => {
      const result = next(action);
      localStorage.setItem('applicationState', JSON.stringify(getState()));

      return result;
    };
  };

  const reHydrateStore = () => {
    if (localStorage.getItem('applicationState') !== null) {

      return JSON.parse(localStorage.getItem('applicationState'));
    };
  };

  const store = createStore(
    rootReducer(history),
    reHydrateStore(),
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        localStorageMiddleware,
        ...middleware
      )
    )
  );

  return store;
}