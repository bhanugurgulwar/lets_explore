import Cards from "./Cards";
import Banner from "./Banner";
import Treks from "../data";
import React from "react";

export default function main(props){
  

    const card=Treks.map((i,id)=>{return (
        <Cards key={id} {...i} explore={props.explore} setExplore={props.setExplore} wishlist={props.wishlist} setWishlist={props.setWishlist}/> 
    )}
        
       

    )
    return(
        <div className="main ">
            <Banner/>
            <section className="d-flex justify-content-center mt-5 flex-wrap ">
                {card}
            </section> 
        </div>
    )
}