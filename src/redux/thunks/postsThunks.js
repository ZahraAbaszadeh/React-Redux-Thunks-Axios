import PostService from "../../services/postService";
import actions from "../actions/postsActions";

export const loadPostsAsync = () => (dispatch) => {
  dispatch(actions.postsLoadStart());

  PostService.getAllPosts()
    .then((response) => dispatch(actions.postsLoadSuccess(response.data)))
    .catch((error) => dispatch(actions.postsLoadError(error.message)));
};

