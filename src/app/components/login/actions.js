import { LOGIN_STARTED, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

export const loginStarted = () => ({
  type: LOGIN_STARTED,
});

export const loginSuccess = result => ({
  type: LOGIN_SUCCESS,
  result,
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error,
});

/**
 * login action to submit the form
 * @param {object} formData - submit form data
 * TODO: 在这里要处理服务器返回的各种情况
 */
export const loginAction = formData => (dispatch) => {
  const loginApi = 'http://localhost:3000/admin/login';

  dispatch(loginStarted());

  return fetch(loginApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  }).then((response) => {
    if (response.status !== 200) {
      throw new Error(`Login Failed ${response.status}`);
    }

    response.json().then((resJson) => {
      dispatch(loginSuccess(resJson));
    }).catch((error) => {
      dispatch(loginFailure(error));
    });
  }).catch((error) => {
    dispatch(loginFailure(error));
  });
};
