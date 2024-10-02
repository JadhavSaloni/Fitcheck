import React from "react"
import { NavLink } from "react-router-dom"
import { MdHomeFilled,} from "react-icons/md";
import { GiDress } from "react-icons/gi";
import { FaTshirt,FaBaby } from "react-icons/fa";

const Navbar= ({containerStyles}) =>{
    return (
       <nav className={` flex flex-row gap-x-5 ${containerStyles}`}>
        <NavLink to={'/'} className={({isActive}) => isActive ? "active_link": ""}><div className="flex items-center justify-center gap-x-1"><MdHomeFilled />Home</div></NavLink>
        <NavLink to={'/Mens'} className={({isActive}) => isActive ? "active_link": ""}><div className="flex items-center justify-center gap-x-1"><FaTshirt />Men's</div></NavLink>
        <NavLink to={'/Womens'} className={({isActive}) => isActive ? "active_link": ""}><div className="flex items-center justify-center gap-x-1"><GiDress />Women's</div></NavLink>
        <NavLink to={'/Kids'} className={({isActive}) => isActive ? "active_link": ""}><div className="flex items-center justify-center gap-x-1"><FaBaby />Kids</div></NavLink>
        
       </nav>
    )
}
export default Navbar