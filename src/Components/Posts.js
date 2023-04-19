import React from "react";

import Post from "./Post";

function Posts() {
  return (
    <div className="posts">
      <h4>
        <strong>Posts</strong>
      </h4>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
