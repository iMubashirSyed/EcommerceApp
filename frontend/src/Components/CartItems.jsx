import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import remove_icon from "../Components/assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_data, CartItems, removeFromCart } = useContext(ShopContext);

  // Calculate Subtotal
  const subtotal = all_data.reduce((acc, item) => {
    if (CartItems[item.id]) {
      return acc + item.new_price * CartItems[item.id];
    }
    return acc;
  }, 0);

  return (
    <div className="cart-items w-[90%] mx-auto mt-10">
      {/* Table Header */}
      <div className="cart-items-format-main grid grid-cols-6 gap-4 bg-gray-100 p-4 rounded-t-lg text-gray-700 font-semibold">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {/* Cart Items */}
      {all_data.map((item) => {
        if (CartItems[item.id] !== 0) {
          return (
            <div
              key={item.id}
              className="cart-items-format grid grid-cols-6 gap-4 items-center bg-white p-4 border-b border-gray-200"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 object-cover rounded-md"
              />
              <p className="text-gray-700">{item.name}</p>
              <p className="text-gray-700">${item.new_price.toFixed(2)}</p>
              <p className="text-gray-700">{String(CartItems[item.id])}</p>
              <p className="text-gray-700">
                ${(item.new_price * CartItems[item.id]).toFixed(2)}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="cursor-pointer"
              >
                <img src={remove_icon} alt="Remove" className="h-6 w-6" />
              </button>
            </div>
          );
        }
        return null; // Explicit return when quantity is 0
      })}

      {/* Subtotal Section */}
      <div className="subtotal flex justify-end items-center bg-gray-100 p-4 rounded-b-lg mt-4">
        <h1 className="text-xl font-bold text-gray-800 mr-4">Subtotal:</h1>
        <p className="text-xl font-semibold text-pink-600">${subtotal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItems;