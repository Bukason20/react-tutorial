import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({ img, name, desc, id, stock }) {
  const [likes, setLikes] = useState(10);
  return (
    <div style={{ backgroundColor: "lightblue", margin: "5rem 0" }}>
      <img
        src={img}
        alt=""
        style={{ height: "400px", width: "100%", objectFit: "cover" }}
      />
      <h1>{name}</h1>
      <p>{desc}</p>
      <p style={{ background: stock ? "green" : "red", width: "fit-content" }}>
        {stock ? "In stock" : "Out of Stock"}
      </p>
      <Link to={`/product-details/${id}`}>See More</Link>
      <div>
        <button onClick={() => setLikes(likes + 1)}>Likes {likes}</button>
      </div>

      <div>
        <button
          disabled={!stock}
          style={{
            backgroundColor: stock ? "blue" : "gray",
            border: "1px solid #ccc",
            width: "fit-content",
            margin: "1rem auto",
            padding: "1rem 2rem",
            display: "block",
            cursor: "pointer",
            color: "white",
          }}
        >
          Order now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
