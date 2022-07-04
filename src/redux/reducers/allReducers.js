import { combineReducers } from "redux";
import postsReducer from "./postsReducer";

const allReducers = () =>
  combineReducers({
    posts: postsReducer,
  });

export default allReducers;
