import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/about">关于</Link></li>
          <li><Link to="/login">登录</Link></li>
        </ul>

      </nav>
    );
  }
}

export default Nav;
