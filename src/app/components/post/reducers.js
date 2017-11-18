import { FETCH_ALL_POSTS_STARTED, FETCH_ALL_POSTS_SUCCESS, FETCH_ALL_POSTS_FAILURE, FETCH_POST_STARTED, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from './actionTypes';

const allPostsReducer = (state = { entities: {}, result: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS_STARTED: {
      return state;
    }
    case FETCH_ALL_POSTS_SUCCESS: {
      return { ...action.result };
    }
    case FETCH_ALL_POSTS_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
};

const singlePostReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POST_STARTED: {
      return state;
    }
    case FETCH_POST_SUCCESS: {
      return { ...action.result };
    }
    case FETCH_POST_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export { allPostsReducer, singlePostReducer };
