import React from 'react'
import FITCHECK from "../assets/FITCHECK.svg";
import profileImg from "../assets/profile.jpeg";

const Navbar = () => {
  return (
    <nav className='max_padd_container flexBetween bg-white ring-1 ring-slate-900/5 relative'>
        <div ><img src={FITCHECK} alt="FITCHECK_logo" height={66} width={88}/></div>
        <div className='uppercase bold-22 text-white bg-secondary px-3 rounded-md tracking-widest line-clamp-3 max-xs:bold-18 max-xs:py max-xs:py-1'>Admin Panel</div>
        <div><img src={profileImg} alt='profile picture' className='h-12 w-12 rounded-full'/></div>
    </nav>
    
  )
}

export default Navbar;