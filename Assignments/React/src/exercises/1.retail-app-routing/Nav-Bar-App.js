import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// components
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import Products from "./components/Products";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/Register";

function RetailShopApp() {
  return ( 
    <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/contact-us" element={<Contact />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
        </Routes>
    </Router>
  );
}

export default RetailShopApp;

