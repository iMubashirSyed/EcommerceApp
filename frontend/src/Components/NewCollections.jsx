import React, { useEffect, useState } from 'react'
import Item from './Item'
const NewCollections = () => {

  const [data, setdata] = useState([])

  useEffect(() => {
   fetch("http://localhost:4000/newcollection").then((res)=>res.json().then((data)=>setdata(data)))
  }, [])
  

  return (
    <div className="new-collection p-7 text-center font-semibold text-3xl">
      <h1>NEW COLLECTION</h1>
      <hr className="mt-5 w-2xl  border-2 mx-auto"/>
      <div className="newCollection-items grid grid-cols-3 gap-5 mt-7">
        {data.map((item, idx) => {
          return <Item key={idx} id={item.id}  img={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
        })}
      </div>
    </div>
  )
}

export default NewCollections