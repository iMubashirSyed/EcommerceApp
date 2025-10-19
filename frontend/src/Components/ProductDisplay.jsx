import React from "react";
import star_icon from "./assets/star_icon.png";
import dull_star from "./assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;

  return (
    <div className="ProductDisplay flex flex-col lg:flex-row gap-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Left Section */}
      <div className="ProductDisplay-left flex flex-col gap-4">
        {/* Thumbnail Images */}
        <div className="ProductDisplay-imgList flex gap-2">
          <img
            src={product.image}
            alt="Thumbnail 1"
            className="h-16 w-16 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-blue-500"
          />
          <img
            src={product.image}
            alt="Thumbnail 2"
            className="h-16 w-16 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-blue-500"
          />
          <img
            src={product.image}
            alt="Thumbnail 3"
            className="h-16 w-16 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-blue-500"
          />
          <img
            src={product.image}
            alt="Thumbnail 4"
            className="h-16 w-16 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-blue-500"
          />
        </div>

        {/* Main Image */}
        <div className="ProductDisplay-mainImg">
          <img
            src={product.image}
            alt="Main Product"
            className="h-64 w-64 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="ProductDisplay-right flex flex-col gap-4">
        {/* Product Name */}
        <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>

        {/* Star Ratings */}
        <div className="ProductDisplay-stars flex gap-1">
          <img src={star_icon} alt="Star 1" className="h-6 w-6" />
          <img src={star_icon} alt="Star 2" className="h-6 w-6" />
          <img src={star_icon} alt="Star 3" className="h-6 w-6" />
          <img src={star_icon} alt="Star 4" className="h-6 w-6" />
          <img src={dull_star} alt="Star 5" className="h-6 w-6" />
        </div>

      <button className="cursor-pointer bg-emerald-500">Add to Cart</button>

      </div>
    </div>
  );
};

export default ProductDisplay;