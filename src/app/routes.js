import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Menu } from 'element-react';
import Login from './login';

const Routes = () => (
    <Router>
      <div>
        <Menu theme="light" defaultActive="1" className="el-menu-demo" mode="horizontal">
            <Menu.Item index="1"><Link to="/">主页</Link></Menu.Item>
            <Menu.Item index="2"><Link to="/login">登录</Link></Menu.Item>
        </Menu>
  
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
      </div>
    </Router>
);

const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
  )

export default Routes;