import React from "react";
import { FiShare } from "react-icons/fi";

import { FcLike } from "react-icons/fc";

const Note = ({ text, date, image }) => {
  return (
    <div className="post">
      <div className="user-info">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
          alt="dp"
        />
        <h4>James Franco</h4>
      </div>
      <span>{text}</span>
      <div className="img-container">
        {image && <img src={image} alt="image" width="600" height="600" />}
      </div>
      <div className="post-footer">
        <small>posted a while ago...</small>
        <div className="interaction">
          <FcLike /> {"  "} <FiShare />
        </div>
      </div>
    </div>
  );
};

export default Note;
