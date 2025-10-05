import React, { useState, useEffect } from "react";
import remove_icon from "../assets/cross_icon.png";

const ListProduct = () => {
  const [ProductDetails, setProductDetails] = useState([]);

  // Fetch product information
  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="listproduct bg-gray-100 min-h-screen p-10">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">All Products</h1>

        {/* Table Header */}
        <div className="listproduct-format-main grid grid-cols-5 gap-4 bg-gray-200 p-4 rounded-t-lg text-gray-700 font-semibold">
          <h1>Product</h1>
          <h1>Title</h1>
          <h1>Category</h1>
          <h1>Price</h1>
          <h1>Remove</h1>
        </div>

        {/* Product List */}
        <div className="listproduct-allList overflow-y-auto max-h-[500px]">
          {ProductDetails.map((product) => (
            <div
              key={product.id}
              className="listproduct-format-main grid grid-cols-5 gap-4 items-center bg-white p-4 border-b border-gray-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-16 w-16 object-cover rounded-md"
              />
              <p className="text-gray-700">{product.name}</p>
              <p className="text-gray-700">{product.category}</p>
              <p className="text-gray-700">${product.new_price}</p>
              <button className="">
                <img src={remove_icon} alt="Remove" className=" h-6 w-auto cursor-pointer" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;