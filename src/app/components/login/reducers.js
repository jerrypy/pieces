import { LOGIN_STARTED, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

// store中isLoggedIn<Boolean>代表登录状态
const loginReducer = (state = false, action) => {
  switch (action.type) {
    case LOGIN_STARTED: {
      return state;
    }
    case LOGIN_SUCCESS: {
      return true;
    }
    case LOGIN_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
