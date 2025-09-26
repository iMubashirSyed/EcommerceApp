import React from "react";
import hand_icon from "./assets/hand_icon.png";
import arrow_icon from "./assets/arrow.png";
import hero_image from "./assets/hero_image.png";

const Hero = () => {
  return (
    <div
      className="hero flex justify-between items-center p-10"
      style={{
        background: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)",
      }}
    >
      {" "}
      {/* Left Section */}
      <div className="hero-left flex flex-col gap-4 p-5">
        <p className="text-5xl font-medium text-gray-600">NEW ARRIVALS ONLY</p>
        <h1 className="text-7xl font-bold text-gray-800">
          new <img src={hand_icon} alt="Hand Icon" className="inline h-16" />{" "}
          <br /> collections <br /> for everyone
        </h1>
        <button className="flex items-center justify-center mt-3 gap-2 px-4 py-2 text-white rounded-lg text-center bg-pink-700">
          Latest Collection{" "}
          <img src={arrow_icon} alt="Arrow Icon" className="w-7 h-3" />
        </button>
      </div>
      {/* Right Section */}
      <div className="hero-right">
        <img src={hero_image} alt="Hero" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Hero;
