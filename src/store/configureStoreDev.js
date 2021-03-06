// http://rackt.github.io/redux/docs/basics/Store.html
// https://github.com/rackt/redux/blob/master/examples/todomvc/store/configureStore.js

import { createStore, applyMiddleware, compose } from 'redux';

import DevTools from 'containers/DevTools';

import logger from 'middleware/logger';
import rootReducer from 'reducers';

let finalCreateStore;

if (__DEBUG__) {
  finalCreateStore = compose(
    // applyMiddleware(...middlewares): http://rackt.github.io/redux/docs/api/applyMiddleware.html
    // createStore(reducer, [initialState]): http://rackt.github.io/redux/docs/api/createStore.html
    applyMiddleware(logger),
    // Provides support for DevTools:
    DevTools.instrument()
  )(createStore);
} else {
  finalCreateStore = compose(
    // applyMiddleware(...middlewares): http://rackt.github.io/redux/docs/api/applyMiddleware.html
    // createStore(reducer, [initialState]): http://rackt.github.io/redux/docs/api/createStore.html
    applyMiddleware(logger)
  )(createStore);
}

const configureStoreDev = (initialState) => {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
      const nextReducer = require('reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default configureStoreDev;
