import { useState } from "react";

import Post from "./Post";
import PostForm from "./PostForm";

import { posts as mockPosts } from "../mock_data";

import "./Feed.css";


function Feed() {

  const [posts, setPosts] = useState(mockPosts);

  return (
    <div className="cfeed">
      <div className="container-feed">
      <PostForm></PostForm>
      { posts.map((post) => <Post key={post.id} post={post}></Post>) }
      </div>
    </div>
  );
}

export default Feed;
