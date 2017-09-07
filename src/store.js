import { createStore } from 'redux';
import rootReducers from './reducers/index';

const defaultState = {};

const store = createStore(rootReducers, defaultState);

export default store;
