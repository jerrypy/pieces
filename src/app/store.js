import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import thunkMiddleware from 'redux-thunk';

// import { middleware as routerMiddleware } from './routes';
import { routerReducer } from 'react-router-redux';

import { loginReducer } from './components/login';
import { allPostsReducer, singlePostReducer } from './components/post';

const reducer = combineReducers({
  posts: allPostsReducer,
  postContent: singlePostReducer,
  isLoggedIn: loginReducer,
  router: routerReducer,
});

const middlewares = [thunkMiddleware];

const win = window;

const storeEnhancers = compose(applyMiddleware(...middlewares), win.devToolsExtension());

export default createStore(reducer, {}, storeEnhancers);
