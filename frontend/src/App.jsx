import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./Components/Footer";
import man_banner from './Components/assets/banner_mens.png'
import kids_banner from './Components/assets/banner_kids.png'
import women_banner from './Components/assets/banner_women.png'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={man_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner}  category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        < Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;