import React from "react";
import Forms from "./pages/Forms";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Nav";
import Error from "./pages/Error";
import PostDetails from "./pages/PostDetails";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Forms />} />
        <Route path="/post-details/:id" element={<PostDetails />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
