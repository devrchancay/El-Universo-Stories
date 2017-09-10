import { createStore, compose } from 'redux';
import rootReducers from './reducers/index';
import stories from './data/stories';

const defaultState = {
  stories,
};

const enhacers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const store = createStore(rootReducers, defaultState, enhacers);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
