import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';

import * as reducers from './reducers'
import DevTools from './containers/dev-tools';

const enhancer = compose(
  applyMiddleware(reduxThunk),
  DevTools.instrument()
);

export default () => createStore(combineReducers(reducers), enhancer);
