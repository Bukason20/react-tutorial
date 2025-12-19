import React, { useState } from "react";

const ProductForm = () => {
  const [productName, setProductName] = useState("Maggi");
  const [productDescription, setProductDescription] = useState("");
  const [productStatus, setProductStatus] = useState();

  // const handleChange = (e) => {
  //   setProductName(e.target.value);
  //   console.log(productName);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(productName, productDescription, productStatus);
  };
  return (
    <div>
      <h1>Add a product</h1>

      <form
        style={{
          backgroundColor: "#e7e4e4ff",
          border: "1px solid blue",
          width: "40%",
          margin: "2rem auto",
          padding: "3rem 2rem",
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="" style={{ display: "block" }}>
            Product Name
          </label>
          <input
            style={{
              width: "100%",
              padding: "1rem",
              border: "none",
              outline: "none",
            }}
            type="text"
            placeholder="Put in a valid product name"
            required
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div>
          <label style={{ display: "block" }}>Product Description</label>
          <input
            style={{
              width: "100%",
              padding: "1rem",
              border: "none",
              outline: "none",
            }}
            type="text"
            placeholder="Write a description about the product"
            required
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>

        <div>
          <label style={{ display: "block" }}> Product Status</label>
          <select
            required
            style={{
              width: "100%",
              padding: "1rem",
              border: "none",
              outline: "none",
            }}
            value={productStatus}
            onChange={(e) => setProductStatus(e.target.value)}
          >
            <option value="" disabled selected>
              Put the Stock Status
            </option>
            <option value={true}>In Stock</option>
            <option value={false}>Out of Stock</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
