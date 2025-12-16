import React from "react";
import "./index.css";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/productDetails";
import Home from "./pages/home";
import ProductForm from "./pages/productForm";

const App = () => {
  const name = "Ebuka";

  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/product-form" element={<ProductForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
