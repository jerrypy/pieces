import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { Menu, Icon } from 'antd';
import Login from './login';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'home',
    };
  }


  handleClick(e) {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick.bind(this)}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Link to="/">主页</Link>
        </Menu.Item>
        <Menu.Item key="login">
          <Link to="/login">登录</Link>
        </Menu.Item>
      </Menu>


    );
  }
}

const Routes = () => (
  <Router>
    <div>
      <Nav />

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home Page</h2>
  </div>
);

export default Routes;
