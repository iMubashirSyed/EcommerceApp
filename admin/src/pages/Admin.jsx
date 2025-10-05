import React from 'react'
import Sidebar from '../components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../components/AddProduct'
import ListProduct from '../components/ListProduct'
const Admin = () => {
  return (
    <div className="flex ">
    {/* Sidebar */}
    <Sidebar />
  
    {/* Content area */}
    <div className="flex-1 ">
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  </div>
  
  )
}

export default Admin