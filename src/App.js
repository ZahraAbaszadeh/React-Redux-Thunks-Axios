import React from "react";
import { Routes, Route } from "react-router-dom";
import AllPosts from "./pages/AllPosts";
import Post from "./pages/Post";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/posts">
          <Route path=":id" element={<Post />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
