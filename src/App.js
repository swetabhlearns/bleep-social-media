import { useState } from "react";
import { nanoid } from "nanoid";
import PostsList from "./PostsList";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [file, setFile] = useState();
  const handleImage = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const addPost = (text) => {
    const date = new Date();
    const newPost = {
      text: text,
      date: date.toLocaleDateString(),
      id: nanoid(),
      image: file,
    };
    const newPosts = [...posts, newPost];
    setPosts(newPosts);
    setFile(null);
  };

  return (
    <div className="container">
      <PostsList
        posts={posts}
        handleAddPost={addPost}
        handleImage={handleImage}
        file={file}
      />
    </div>
  );
}

export default App;
