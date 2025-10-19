import React, { createContext, useEffect, useState } from "react";
// import all_data from '../Components/assets/all_product'

// ✅ Create context
export const ShopContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < 300 + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [CartItems, setCartItems] = useState(getDefaultCart());
  const [all_data, setAllData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => setAllData(data));

    if (localStorage.getItem("authToken")) {
      fetch("http://localhost:4000/getcartdata", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authToken: `${localStorage.getItem("authToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setCartItems(data);
        });
    }
  }, []);

  const addToCart = (itemId) => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      console.log("User not authenticated. Cannot add to cart.");
      return;
    }

    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    fetch("http://localhost:4000/addtocart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authToken: `${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify({ id: itemId }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const removeFromCart = (itemId) => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      console.log("User not authenticated. Cannot remove from cart.");
      return;
    }

    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    fetch("http://localhost:4000/removecart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authToken: `${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify({ id: itemId }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const contextValue = { all_data, CartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
