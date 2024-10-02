import React from "react"
import Hero from "../component/Hero";
import Popular from "../component/Popular";
import Offer from "../component/Offer";
import NewCollection from "../component/NewCollection";
import NewsLetter from "../component/NewsLetter";

const Home= () =>{
    return (
       <>
       <Hero />
       <Popular />
       <Offer />
       <NewCollection />
       <NewsLetter />

       </>
       
    )
}
export default Home;