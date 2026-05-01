import { House } from "lucide-react";
import React, { useEffect, useState } from "react";
import { LuNotebookText } from "react-icons/lu";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import "../styles/forms.css";

const Forms = () => {
  const [name, setName] = useState("");
  const [desc, setDescription] = useState("");
  const [posts, setPosts] = useState([]);
  const [file, setFile] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          desc: desc,
        }),
      });

      const data = await res.json();

      setPosts([...posts, data]);
    } catch (err) {}
  };

  const fetchPosts = async () => {
    const res = await fetch("http://localhost:5000/posts");
    const data = await res.json();

    console.log(data);
    setPosts(data);
  };

  const handleFile = (file) => {
    // setFile(file);
    console.log(file);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Form in React</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            placeholder="Enter your description"
            value={desc}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* <div className="bg-red-700 lg:bg-green-500">
          <label htmlFor="desc">File</label>
          <input
            type="file"
            placeholder="Enter your description"
            value={desc}
            onChange={(e) => handleFile(e.target)}
          />
        </div> */}

        <button type="submit" className="font-blue-100">
          Submit post
        </button>
      </form>

      <section>
        <h1>My Posts</h1>
        <div className="posts">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <p>{post.desc}</p>
              <p>Written by: {post.name}</p>
              <LuNotebookText className="text-red-800 text-5xl" />
              <House />

              <Link to={`/post-details/${post.id}`}>See Post detai ls</Link>
            </div>
          ))}
        </div>
      </section>

      <div className="card"></div>
    </div>
  );
};

export default Forms;
