import postTypes from "../types/postsType";

const postsLoadStart = () => ({
  type: postTypes.POSTS_LOAD_START,
});

const postsLoadSuccess = (posts) => ({
  type: postTypes.POSTS_LOAD_SUCCESS,
  payload: posts,
});

const postsLoadError = (errorMessage) => ({
  type: postTypes.POSTS_LOAD_ERROR,
  payload: errorMessage,
});

export default {
  postsLoadStart,
  postsLoadSuccess,
  postsLoadError,
};
