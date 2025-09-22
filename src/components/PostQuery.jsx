import React from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";

const PostQuery = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Trizen Ventures</h2>
      <PostForm />
      <PostList />
    </div>
  );
};

export default PostQuery;
