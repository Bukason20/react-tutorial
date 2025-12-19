import React, { useEffect } from "react";
import products from "../products";
import ProductCard from "./productCard";

function ProductList() {
  const getProducts = async () => {
    const response = await fetch("http://localhost:5000/products");
    const data = await response.json();

    console.log(response, data);
  };

  useEffect(function () {
    getProducts();
  }, []);
  return (
    <div>
      <div className="product-list">
        {products.map((product, id) => (
          <ProductCard
            img={product.img}
            name={product.name}
            desc={product.description}
            id={product.id}
            stock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
