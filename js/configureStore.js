import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers'
import DevTools from './containers/dev-tools';

const enhancer = compose(
  applyMiddleware(reduxThunk),
  DevTools.instrument()
);

export default () => createStore(reducers, enhancer);
