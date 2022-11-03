import React, { useState } from "react";
import PostsList from "./PostsList";
import { GrClose } from "react-icons/gr";
import { ImImages } from "react-icons/im";
import { MdEmojiEmotions } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";

const AddPost = ({ handleAddPost, file, handleImage }) => {
  const [postText, setPostText] = useState("");

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setPostText(event.target.value);
    }
  };
  const handleSendPost = () => {
    if (postText.trim().length > 0 || file) {
      handleAddPost(postText);
    }
  };
  const characterLimit = 250;

  return (
    <div className="post new">
      <div className="post-header">
        <h3>Create a new post</h3>
        <p>
          <GrClose />
        </p>
      </div>
      <div>
        <hr></hr>
      </div>
      <div className="user-info">
        <div className="info">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
            alt="dp"
          />
          <h4>James Franco</h4>
        </div>

        <div className="dropdown">
          <select name="privacy" id="privacy">
            <option value="private">Private</option>
            <option value="saab">Public</option>
          </select>
        </div>
      </div>

      <textarea
        rows="8"
        cols="10"
        placeholder="What's Happening?"
        value={postText}
        onChange={handleChange}
      ></textarea>
      <div className="img-container">
        {file && <img src={file} alt="image" width="600" height="600" />}
      </div>

      <div>
        <small>{characterLimit - postText.length}/250</small>
        <hr></hr>
      </div>

      <div className="post-footer">
        <div className="pickers">
          <input
            className="custom-file-input"
            type="file"
            name="img"
            accept="image/*"
            onChange={handleImage}
            id="actual-btn"
            hidden
          ></input>
          <label htmlFor="actual-btn">
            <ImImages />{" "}
          </label>

          <MdEmojiEmotions />
        </div>
        <button className="save" onClick={handleSendPost}>
          Send Post {"  "}
          <IoSendSharp />
        </button>
      </div>
    </div>
  );
};

export default AddPost;
