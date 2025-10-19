import React, { useEffect, useState } from "react";
import data from "./assets/data";
import Item from "./Item";
const popular = () => {

  const [data, setdata] = useState([])

  useEffect(() => {
  fetch("http://localhost:4000/popularinwomen").then((res)=>res.json()).then((data)=>setdata(data))
  }, [])
  

  return (
    <div className="p-7 popular text-center font-semibold text-3xl">
      <h1>POPULAR IN WOMEN</h1>
      <hr className="mt-5 w-2xl  border-2 mx-auto"/>
      <div className="popular-items grid grid-cols-3 gap-5 mt-10">
        {data.map((item, idx) => {
          return <Item key={idx} id={item.id} name={item.name} img={item.image} new_price={item.new_price} />
        })}
      </div>
    </div>
  );
};

export default popular;
