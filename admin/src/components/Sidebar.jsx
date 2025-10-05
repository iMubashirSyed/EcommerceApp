import React from 'react';
import { Link } from 'react-router-dom';
import add_product from '../assets/Product_Cart.svg';
import product_list from '../assets/Product_list_icon.svg';

const Sidebar = () => {
  return (
    <div className="sidebar bg-gray-800 text-white h-screen w-64 p-5 shadow-lg">
      {/* Add Product */}
      <Link to="/addproduct">
        <div className="sidebar-item flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700 transition">
          <img src={add_product} alt="Add Product" className="h-8 w-8" />
          <p className="text-lg font-medium">Add Product</p>
        </div>
      </Link>

      {/* Product List */}
      <Link to="/listproduct">
        <div className="sidebar-item flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700 transition mt-4">
          <img src={product_list} alt="Product List" className="h-8 w-8" />
          <p className="text-lg font-medium">Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;