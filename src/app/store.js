import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import thunkMiddleware from 'redux-thunk';

import { allPostsReducer } from './components/post';

const reducer = combineReducers({
  posts: allPostsReducer,
});

const middlewares = [thunkMiddleware];

const storeEnhancers = compose(applyMiddleware(...middlewares),);

export default createStore(reducer, {}, storeEnhancers);
