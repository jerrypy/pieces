import { FETCH_ALL_POSTS_STARTED, FETCH_ALL_POSTS_SUCCESS, FETCH_ALL_POSTS_FAILURE } from './actionTypes';

export const fetchAllPostsStarted = () => ({
  type: FETCH_ALL_POSTS_STARTED,
});

export const fetchAllPostsSuccess = result => ({
  type: FETCH_ALL_POSTS_SUCCESS,
  result,
});

export const fetchAllPostsFailure = error => ({
  type: FETCH_ALL_POSTS_FAILURE,
  error,
});

export const fetchAllPosts = postType => (dispatch) => {
  const getAllPostsApi = `http://localhost:3000/post?type=${postType}`;

  dispatch(fetchAllPostsStarted());

  return fetch(getAllPostsApi).then((response) => {
    if (response.status !== 200) {
      throw new Error(`Fail to get response with status ${response.status}`);
    }

    response.json().then((responseJson) => {
      dispatch(fetchAllPostsSuccess(responseJson));
    }).catch((error) => {
      dispatch(fetchAllPostsFailure(error));
    });
  }).catch((error) => {
    dispatch(fetchAllPostsFailure(error));
  });
};
