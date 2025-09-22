import React from "react";
import { usePosts } from "../hooks/usePosts";
import PostItem from "./PostItem";

const PostList = () => {
  const { data, isLoading, isError, error, refetch } = usePosts();

  if (isLoading) return <div className="alert alert-info">Loading posts...</div>;
  if (isError) return <div className="alert alert-danger">{error.message}</div>;

  return (
    <>
      <ul className="list-group mb-3">
        {data?.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
      <div className="text-center">
        <button className="btn btn-outline-primary" onClick={() => refetch()}>
          Fetch
        </button>
      </div>
    </>
  );
};

export default PostList;
