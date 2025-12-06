import React from "react";
import products from "../products";

function ProductList2() {
  return (
    <div>
      <div className="product-list">
        {products.map((product, id) => (
          <div style={{ backgroundColor: "lightblue" }} key={id}>
            <img
              src={product.img}
              alt=""
              style={{ height: "400px", width: "100%", objectFit: "cover" }}
            />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList2;
