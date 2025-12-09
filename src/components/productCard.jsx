import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ img, name, desc, id }) {
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <img
        src={img}
        alt=""
        style={{ height: "400px", width: "100%", objectFit: "cover" }}
      />
      <h1>{name}</h1>
      <p>{desc}</p>
      <Link to={`/product-details/${id}`}>See More</Link>
    </div>
  );
}

export default ProductCard;
