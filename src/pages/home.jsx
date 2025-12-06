import React from "react";
import ProductList from "../components/productList";

function Home() {
  return (
    <div>
      <h1>Hello User, Welcome to the home page</h1>
      <div>
        <ProductList />
      </div>
    </div>
  );
}

export default Home;
