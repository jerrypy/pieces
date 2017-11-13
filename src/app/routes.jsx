import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route } from 'react-router-dom';
import { routerMiddleware } from 'react-router-redux';

import { Nav } from './components/header';
import Home from './pages/home';
import About from './pages/about';

const history = createHistory();

const middleware = routerMiddleware(history);

const Routes = () => (
  <Router history={history}>
    <div>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export { middleware, Routes };
