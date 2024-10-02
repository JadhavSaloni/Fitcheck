import React from 'react'
import Sidebar from '../component/Sidebar';
import { Routes, Route } from 'react-router-dom';
import AddProduct from '../component/AddProduct';
import ListProduct from '../component/listProduct';


function Admin() {
  return (
    <div className='lg:flex '>
        <Sidebar />
        <Routes>
            <Route path='/addproduct' element={<AddProduct />}/>
           <Route path='/listproduct' element={<ListProduct />}/>
        </Routes>
    </div>
  )
}

export default Admin;