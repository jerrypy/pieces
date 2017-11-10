import { FETCH_ALL_POSTS_STARTED, FETCH_ALL_POSTS_SUCCESS, FETCH_ALL_POSTS_FAILURE } from './actionTypes';

const allPostsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS_STARTED: {
      return state;
    }
    case FETCH_ALL_POSTS_SUCCESS: {
      return [...action.result];
    }
    case FETCH_ALL_POSTS_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export { allPostsReducer };
