import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import dropdown from '../Components/assets/dropdown_icon.png';
import Item from '../Components/Item';

const ShopCategory = (props) => {
  const { all_data } = useContext(ShopContext);

  return (
    <div className="ShopCategory w-[90%] mx-auto mt-10">
      {/* Banner */}
      <div className="shopCategory-banner mb-10">
        <img
          src={props.banner}
          alt="Category Banner"
        />
      </div>

      {/* Index and Sort Section */}
      <div className="shopCategory-indexSort flex justify-between items-center mb-5">
        <p className="text-gray-700">
          <span className="font-semibold text-md">Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort flex items-center gap-2">
          <button className='border rounded-2xl p-1'>
          <span className="text-gray-600 text-sm">Sort By</span>
          <img src={dropdown} alt="Dropdown Icon" className="inline ml-2 cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="shopCategory-Products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {all_data.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                img={item.image}
                name={item.name}
                new_price={item.new_price}
              />
            );
          }
        })}
      </div>
      <div className="shopCategory-loadmore flex justify-center ">
        <button className='bg-gray-500 text-white  px-7 w-56 py-3 rounded-2xl mt-10 hover:bg-gray-700 cursor-pointer'>Load More</button>
      </div>
    </div>
  );
};

export default ShopCategory;