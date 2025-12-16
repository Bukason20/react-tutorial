import React from "react";

const ProductForm = () => {
  return (
    <div>
      <h1>Add a product</h1>

      <form action="">
        <div>
          <label htmlFor="">Product Name</label>
          <input type="text" placeholder="Put in a valid product name" />
        </div>

        <div>
          <label htmlFor="">Product Description</label>
          <input
            type="text"
            placeholder="Write a description about the product"
          />
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
