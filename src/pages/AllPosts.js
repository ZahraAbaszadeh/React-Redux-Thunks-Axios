import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPostsAsync } from "../redux/thunks/postsThunks";

const AllPosts = () => {
  const dispatch = useDispatch();
  const { isLoading, posts, errorMessage } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(loadPostsAsync());
  }, []);
  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {errorMessage && <h3>{errorMessage}</h3>}
      {posts &&
        posts.map((post) => {
          <h5 key={post.id}>
            <h2>id : {post.id}</h2>
            <h3>userId : {post.userId}</h3>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </h5>;
        })}
    </div>
  );
};

export default AllPosts;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// const AllPosts = () => {
//   const [postList, setPostList] = useState([]);
//   useEffect(() => {
//     axios({
//       url: "https://jsonplaceholder.typicode.com/posts",
//     })
//       .then((response) => {
//         setPostList(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [setPostList]);

//   return (
//     <div className="all">
//       {postList.map((item) => (
//         <div key={item.id} className="postList">
//           <h2>id : {item.id}</h2>
//           <h3>userId : {item.userId}</h3>
//           <h4>{item.title}</h4>
//           <p>{item.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllPosts;
