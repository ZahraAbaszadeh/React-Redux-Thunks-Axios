import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPostsAsync } from "../redux/thunks/postsThunks";

import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";

const AllPosts = () => {
  const dispatch = useDispatch();
  const { isLoading, posts, errorMessage } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(loadPostsAsync());
  }, []);
  return (
    <Grid
      container
      sx={{
        my: 5,
        display: "flex",
        justifyContent: "space-around",
        maxWidth: "100vw",
      }}
    >
      {isLoading && <Typography variant="h4">Loading...</Typography>}
      {errorMessage && <Typography>{errorMessage}</Typography>}

      <>
        {posts &&
          posts.map((post) => (
            <Card
              sx={{
                maxWidth: "20vw",
                my: 3,
                p: 2,
                backgroundColor: "transparent",
                boxShadow: "rgba(0, 0, 0, 0.85) 0px 3px 8px",
              }}
            >
              <CardActionArea>
                <CardContent sx={{ color: "", p: 0 }}>
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
                      fontSize: "16px",
                      p: 1,
                      lineHeight: "1.2",
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography variant="p">{post.body}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
      </>
    </Grid>
  );
};

export default AllPosts;
