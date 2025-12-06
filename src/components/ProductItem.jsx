import React from "react";

const ProductItem = ({ id, img, name, desc }) => {
  return (
    <div
      key={id}
      style={{
        backgroundColor: "white",
        height: "400px",
        width: "500px",
        border: "1px solid #ccc",
      }}
    >
      <img src={img} alt="" style={{ width: "100%", height: "300px" }} />
      <h3>{name}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default ProductItem;
