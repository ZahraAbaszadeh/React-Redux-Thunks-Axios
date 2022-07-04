import getPosts from "../api/getPosts"

class PostService {
	getAllPosts = () => getPosts().get("posts");
}

export default new PostService();






