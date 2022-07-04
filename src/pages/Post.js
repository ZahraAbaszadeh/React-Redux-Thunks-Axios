import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios({
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    })
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h2>id : {post.id}</h2>
      <h3>userId : {post.userId}</h3>
      <h2>title : {post.title}</h2>
      <p>body : {post.body}</p>
    </>
  );
};

export default Post;
