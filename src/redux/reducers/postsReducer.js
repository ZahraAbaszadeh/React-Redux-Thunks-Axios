import postTypes from "../types/postsType";
import initialState from "../actions/postsInitialState";

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case postTypes.POSTS_LOAD_START:
      return {
        ...state,
        isLoading: true,
        posts: null,
        errorMessage: null,
      };
    case postTypes.POSTS_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: payload,
      };
    case postTypes.POSTS_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
