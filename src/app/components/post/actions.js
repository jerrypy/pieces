import { FETCH_ALL_POSTS_STARTED, FETCH_ALL_POSTS_SUCCESS, FETCH_ALL_POSTS_FAILURE, FETCH_POST_STARTED, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from './actionTypes';

// TODO: 同类型的action可以放在一个action creator函数里，简化代码
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

export const fetchPostStarted = () => ({
  type: FETCH_POST_STARTED,
});

export const fetchPostSuccess = result => ({
  type: FETCH_POST_SUCCESS,
  result,
});

export const fetchPostFailure = error => ({
  type: FETCH_POST_FAILURE,
  error,
});

export const fetchPost = customLink => (dispatch) => {
  const getPostApi = `http://localhost:3000/post/${customLink}`;

  dispatch(fetchPostStarted());

  return fetch(getPostApi).then((response) => {
    if (response.status !== 200) {
      throw new Error(`Fail to get response with status ${response.status}`);
    }

    response.json().then((responseJson) => {
      dispatch(fetchPostSuccess(responseJson));
    }).catch((error) => {
      dispatch(fetchPostFailure(error));
    });
  }).catch((error) => {
    dispatch(fetchPostFailure(error));
  });
};
