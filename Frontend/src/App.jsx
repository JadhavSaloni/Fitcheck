import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Header from "./component/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Footer from "./component/Footer";
import bannermens from "./assets/bannermens.png";
import bannerwomens from "./assets/bannerwomens.png";
import bannerkids from "./assets/bannerkids.png";

export default function App() {
  return (
    <main className="bg-primary text-tertiary ">
      <BrowserRouter>
       <Header />
       <Routes>
         <Route path="/" element ={<Home />}/>
         <Route path="/Mens" element ={<Category category="men" banner={bannermens}/>} />
         <Route path="/Womens" element ={<Category  category="women" banner={bannerwomens}/>}/>
         <Route path="/Kids" element ={<Category category="kid" banner={bannerkids} />}/> 
         <Route path="/Product" element ={<Product/>}/>
           <Route path="/Product/:productId" element={<Product />}>
           </Route>
         <Route path="/Cart" element ={<Cart />}/>
         <Route path="/Login" element ={<Login />}/>
         

      </Routes>
      <Footer />
    </BrowserRouter>
    </main>
  );
}