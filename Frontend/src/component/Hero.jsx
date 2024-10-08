import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";
import { NavLink } from 'react-router-dom';
import { BiSolidOffer } from "react-icons/bi";

const Hero = () => {
  return (
    <section  className='relative bg-hero bg-center bg-cover bg-no-repeat h-screen w-full'>
    <div className='max_padd_container relative top-32 xs:top-52'>
        <h1 className='h1 capitalize max-w-[37rem]'>Check the fit</h1>
        <p className='text-gray-50 regular-16 mt-6 max-w-[33rem]'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis sequi aliquam voluptatem,
             omnis rem, ea asperiores quasi veritatis quaerat iusto expedita laborum nihil dolorem quae, 
             dignissimos doloribus ipsa facilis voluptas.</p>
        <div className='flexStart items-center gap-x-4 my-10'>
            <div className='regular-24 flexCenter gap-x-3'>
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            </div>
            <div className='bold-16 sm:bold-20'>176k<span className='regular-16 sm:regular-20'>Excellent Review</span></div>
            <div className='max-xs1:flex-col flex gap-2'>
                <NavLink to={''} className={"btn_dark_rounded flex item-center justify-center"}>Show now</NavLink>

                <NavLink to={''} className={"btn_dark_rounded flex item-center justify-center gap-x-2"}><BiSolidOffer className='text-2xl'/>Offers</NavLink>
            </div>
        </div>
        </div> 
    </section>
  )
}
export default Hero;