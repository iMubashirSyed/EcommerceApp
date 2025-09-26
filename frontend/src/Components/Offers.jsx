import React from 'react';
import exclusive_image from './assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className="offers w-[65%] mt-4 mx-auto flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-pink-100 to-purple-100 p-10  shadow-lg">
      {/* Left Section */}
      <div className="offers-left flex flex-col items-start gap-4">
        <h1 className="text-4xl font-bold text-gray-800">Exclusive</h1>
        <h1 className="text-5xl font-bold text-gray-800">Offers for you</h1>
        <p className="text-lg text-gray-600">Only on best seller products</p>
        <button className='bg-red-500 p-3 w-48 rounded-3xl text-white font-semibold cursor-pointer hover:bg-red-600'>Check now</button>
      </div>

      {/* Right Section */}
      <div className="offers-right mt-5 md:mt-0">
        <img
          src={exclusive_image}
          alt="Exclusive Offers"
          className="w-full max-w-sm object-contain"
        />
      </div>
    </div>
  );
};

export default Offers;