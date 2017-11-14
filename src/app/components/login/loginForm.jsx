import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction } from './actions';

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    
    this.props.onHandleSubmit(values);
  }

  render() {
    // 如果state中表示已登录，则访问该页面直接跳转到首页
    // TODO: 加入cookie后，如果有cookie，也要是已登录
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      // TODO: form需要加上csrf_token
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button>登录</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  onHandleSubmit: formData => {
    dispatch(loginAction(formData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
