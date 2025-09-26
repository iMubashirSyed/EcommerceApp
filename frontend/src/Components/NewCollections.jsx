import React from 'react'
import Item from './Item'
import data from './assets/new_collections'
const NewCollections = () => {
  return (
    <div className="new-collection p-7 text-center font-semibold text-3xl">
      <h1>NEW COLLECTION</h1>
      <hr className="mt-5 w-2xl  border-2 mx-auto"/>
      <div className="newCollection-items grid grid-cols-3 gap-5 mt-7">
        {data.map((item, idx) => {
          return <Item key={idx} item={item.name} img={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
        })}
      </div>
    </div>
  )
}

export default NewCollections