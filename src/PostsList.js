import React, { useState } from "react";
import AddPost from "./AddPost";
import Post from "./Post";

const PostsList = ({ posts, handleAddPost, handleImage, file }) => {
  return (
    <div className="post-list">
      <AddPost
        handleAddPost={handleAddPost}
        file={file}
        handleImage={handleImage}
      />
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          text={post.text}
          date={post.date}
          image={post.image}
        />
      ))}
    </div>
  );
};

export default PostsList;
