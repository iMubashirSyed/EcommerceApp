import React from "react";
import star_icon from "./assets/star_icon.png";
import dull_star from './assets/star_dull_icon.png'
const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="ProductDisplay">
      <div className="ProductDisplay-left">
        <div className="ProductDisplay-imgList">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="ProductDisplay-mainImg">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="ProductDisplay-right">
        <h1>{product.name}</h1>
        <div className="ProductDisplay-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={dull_star} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
