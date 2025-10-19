import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductDisplay from '../Components/ProductDisplay';


const Product = () => {
  const {all_data} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_data.find((item) => item._id === (productId));
  console.log("Params:", productId);
  console.log("Product: ", product);
  console.log("Data IDs:", all_data.map(p => p._id));
  
  if (!product) {
    return <div>Loading product...</div>; // or a 404 message
  }

  return (
    <div>
      < ProductDisplay product={product} />
    </div>
  )
}

export default Product