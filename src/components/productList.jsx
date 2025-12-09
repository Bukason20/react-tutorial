import React from "react";
import products from "../products";
import ProductCard from "./productCard";

function ProductList() {
  return (
    <div>
      <div className="product-list">
        {products.map((product, id) => (
          <ProductCard
            img={product.img}
            name={product.name}
            desc={product.description}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
