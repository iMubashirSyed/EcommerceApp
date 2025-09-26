import React from "react";
import { Link } from "react-router-dom";
const Item = (props) => {
  console.log("props.id:", props.id);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
      {" "}
      {/* Product Image */}
      <Link to={`/product/${props.id}`}>
        <img src={props.img} alt="Product" />
      </Link>
      {/* Product Details */}
      <div className="p-4">
        <h5 className="text-lg font-bold text-gray-800">{props.name}</h5>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-semibold text-gray-800">
            ${props.new_price}
          </span>
          <button className="px-4 py-2 bg-pink-600 text-white text-sm font-medium rounded-lg hover:bg-pink-700 cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
