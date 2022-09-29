import React from "react";
import "./Cards.css"
import {cloneDeep} from 'lodash'
import Treks from "../data";


export default function cards(props) {
 
  function add(props){
    
    let temp=cloneDeep(props.explore)
    if(temp.find((i)=> i.id === props.id)){
      let index = temp.findIndex((i)=>i.id === props.id)
      temp[index].count = temp[index].count+1; 
      props.setExplore(temp);
    }else{
      const {id,title, img, price,count} =props
      temp.push({id,title,img,price,count})
      props.setExplore(temp)
    }
  }
  

  
 
  
  const styles={
    height:"9.375rem"
  }

  return (
    <div className="card m-2 pop-out" style={{ width: "18rem" }}>
      <img src={props.img} style={styles}
       className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
        {props.description}
        </p>
      </div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.list1}</li>
        <li className="list-group-item">{props.list2}</li>
      </ul>
      <div className="card-body d-flex justify-content-between ">
       <button className="btn bg-success m-lg-2 text-white" onClick={()=>add(props)} > 
          Book Seat
        </button>
        <img className="wishlist-icon" src={props.isWishlist?"wishlist-filled.png":"wishlist-empty.png"}
           alt="wishlist" />
        
      </div>
    </div>

  );
}
