import React from "react";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center p-7 bg-white shadow-md">
      {/* Logo Section */}
      <div className="navLogo flex items-center gap-3">
        <img src={logo} alt="ShopEase Logo" className="h-10 w-10 object-contain" />
        <h1 className="text-xl font-bold text-gray-800">ShopEase</h1>
      </div>

      {/* Navigation Items */}
      <div className="navItems">
        <ul className="flex gap-8 text-gray-600 font-medium">
          <li className="hover:text-gray-800 cursor-pointer"><Link to="/">Shop</Link></li>
          <li className="hover:text-gray-800 cursor-pointer"><Link to="/mens">Men</Link></li>
          <li className="hover:text-gray-800 cursor-pointer"><Link to="/womens">Women</Link></li>
          <li className="hover:text-gray-800 cursor-pointer"><Link to="/kids">Kids</Link></li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="navActions flex items-center gap-7">
        <Link to="/login">
          <button className="p-2  rounded-lg w-24 cursor-pointer bg-gray-100 hover:bg-gray-200">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <button className="p-2 flex items-center gap-3 cursor-pointer ">
            <img src={cart_icon} alt="Cart Icon" className="h-7 w-7" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;