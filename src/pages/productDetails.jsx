import React from "react";
import { useParams } from "react-router-dom";
import products from "../products";

function ProductDetails() {
  const { id } = useParams();
  console.log(id);

  const product = products.find((product) => product.id === Number(id));
  return (
    <div>
      <h1>Product Details</h1>
      <p>Welcome to the product details page</p>

      <h2>{product.name}</h2>
      <img src={product.img} alt="" style={{ height: "300px" }} />
    </div>
  );
}

export default ProductDetails;
