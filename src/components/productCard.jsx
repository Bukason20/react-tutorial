import React from "react";

function ProductCard({ img, name, desc }) {
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <img
        src={img}
        alt=""
        style={{ height: "400px", width: "100%", objectFit: "cover" }}
      />
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  );
}

export default ProductCard;
