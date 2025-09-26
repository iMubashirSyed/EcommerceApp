import React from "react";
import data from "./assets/data";
import Item from "./Item";
const popular = () => {
  return (
    <div className="p-7 popular text-center font-semibold text-3xl">
      <h1>POPULAR IN WOMEN</h1>
      <hr className="mt-5 w-2xl  border-2 mx-auto"/>
      <div className="popular-items grid grid-cols-3 gap-5 mt-7">
        {data.map((item, idx) => {
          return <Item key={idx} item={item.name} img={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
        })}
      </div>
    </div>
  );
};

export default popular;
