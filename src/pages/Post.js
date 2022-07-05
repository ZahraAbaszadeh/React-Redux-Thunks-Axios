import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Grid, Card, CardContent, Typography } from "@mui/material";
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
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: "40vw",
          my: 5,
          p: 2,
          backgroundColor: "transparent",
          boxShadow: "rgba(0, 0, 0, 0.9) 0px 3px 10px",
        }}
      >
        <CardContent>
          <Typography
            variant="span"
            color="#33691e"
            sx={{
              border: "3px solid #558b2f",
              fontSize: "18px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              display: "inline-block",
              fontWeight: "bold",
              p: 1,
            }}
          >
            {post.id}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: "18px",
              p: 1,
            }}
          >
            Title : {post.title}
          </Typography>
          <Typography variant="p">{post.body}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Post;
