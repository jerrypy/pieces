import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router-dom';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';

import { Nav } from './components/header';
import Home from './pages/home';
import Login from './pages/login';
import PostContent from './pages/post';

const history = createHistory();

const middleware = routerMiddleware(history);

const Routes = () => (
  <ConnectedRouter history={history}>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/:customLink" component={PostContent} />
      </Switch>
    </div>
  </ConnectedRouter>
);

export { middleware, Routes };
