import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  const fetchPost = async () => {
    const res = await fetch("http://localhost:5000/posts");

    const data = await res.json();
    const selectedPost = data.find((post) => {
      return post.id == id;
    });

    setPost(selectedPost);
  };

  useEffect(() => {
    fetchPost();
    console.log(id);
  }, []);
  return (
    <div>
      <h1>Post Details</h1>
      <h1>name: {post.name}</h1>
      <p>description: {post.desc} </p>
    </div>
  );
};

export default PostDetails;
