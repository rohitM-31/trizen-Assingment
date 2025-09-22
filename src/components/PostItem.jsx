import React, { useState } from "react";
import { useDeletePost, useUpdatePost } from "../hooks/usePosts";

const PostItem = ({ post }) => {
  const { mutate: deletePost } = useDeletePost();
  const { mutate: updatePost } = useUpdatePost();

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(post.nam1);
  const [editHobby, setEditHobby] = useState(post.hobby);

  const handleSave = () => {
    updatePost({ id: post.id, nam1: editName, hobby: editHobby });
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isEditing ? (
        <div className="row g-2 w-100">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              value={editHobby}
              onChange={(e) => setEditHobby(e.target.value)}
            />
          </div>
          <div className="col-md-4 d-flex">
            <button className="btn btn-success me-2" onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <span>
            {post.nam1} — {post.hobby}
          </span>
          <div>
            <button
              className="btn btn-warning btn-sm me-2"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deletePost(post.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default PostItem;
