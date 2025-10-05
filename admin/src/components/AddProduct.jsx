import React, { useState } from "react";
import upload from "../assets/upload_cloud_icon.svg";

const AddProduct = () => {
  const [image, setimage] = useState(null);
  const [ProductDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
  });

  const image_handler = (e) => {
    setimage(e.target.files[0]);
  };

  const input_handler = (e) => {
    setProductDetails({ ...ProductDetails, [e.target.name]: e.target.value });
  }

  const Add_Product = async () => {
    let responseData;
    let product = ProductDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          data.success
            ? alert("Product Added Successfully")
            : alert("Failed to add product");
        });
    }
  };

  return (
    <div className="addproduct bg-gray-100 min-h-screen p-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Product Title */}
        <div className="addproduct-itemfield mb-6">
          <p className="text-gray-700 font-medium mb-2">Product Title</p>
          <input
            type="text"
            name="name"
            onChange={input_handler}
            value={ProductDetails.name}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Price */}
        <div className="addproduct-price mb-6">
          <p className="text-gray-700 font-medium mb-2">Price</p>
          <input
            type="text"
            name="new_price"
            onChange={input_handler}
            value={ProductDetails.new_price}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Offer Price */}
        <div className="addproduct-itemfield mb-6">
          <p className="text-gray-700 font-medium mb-2">Offer Price</p>
          <input
            type="text"
            name=""
            id=""
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Product Category */}
        <div className="addproduct-selector mb-6">
          <p className="text-gray-700 font-medium mb-2">Product Category</p>
          <select
            name="category"
            onChange={input_handler}
            value={ProductDetails.category}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kids">Kids</option>
          </select>
        </div>

        {/* Upload Section */}
        <div className="addproduct-upload mb-6">
          <label
            htmlFor="file-input"
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src={image ? URL.createObjectURL(image) : upload}
              alt="Upload Icon"
              className="h-10 w-10"
            />
            <span className="text-gray-700 font-medium">
              Upload Product Image
            </span>
          </label>
          <input
            onChange={image_handler}
            type="file"
            name="product"
            id="file-input"
            className="hidden"
          />
        </div>

        {/* Add Product Button */}
        <button
          onClick={Add_Product}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
