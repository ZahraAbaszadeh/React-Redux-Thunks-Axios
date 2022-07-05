import PostService from "../../services/postService";
import postActions from "../actions/postsActions";

export const loadPostsAsync = () => (dispatch) => {
  dispatch(postActions.postsLoadStart());

  PostService.getAllPosts()
    .then((response) => dispatch(postActions.postsLoadSuccess(response.data)))
    .catch((error) => dispatch(postActions.postsLoadError(error.message)));
};
