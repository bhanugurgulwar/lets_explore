import React from "react";
import "./Cards.css"
import {cloneDeep} from 'lodash'



export default function cards(props) {
 
    
  function book(props){
    
    let temp=cloneDeep(props.explore)
    if(temp.find((i)=> i.id === props.id)){
      let index = temp.findIndex((i)=>i.id === props.id)
      temp[index].count = temp[index].count+1; 
      props.setExplore(temp);
    }else{
      const {id,title, img, price,count,description} =props
      temp.push({id,title,img,price,count,description})
      props.setExplore(temp)
    }
  }
  
  function addToWishlist(props){
   
      let tempWishlist=cloneDeep(props.wishlist)
      if(tempWishlist.find((i) => i.id===props.id )){
         let index = tempWishlist.findIndex((i) => i.id === props.id)
         tempWishlist[index].isWishlist = !tempWishlist[index].isWishlist
          
          props.setWishlist(tempWishlist);
        
     
      }
      else{
        const{id,title ,img,price,isWishlist,isAdded,description}=props
        tempWishlist.push({id,title ,img,price,isWishlist,isAdded,description})
          let index = tempWishlist.findIndex((i) => i.id === props.id)
         tempWishlist[index].isWishlist = !tempWishlist[index].isWishlist

        props.setWishlist(tempWishlist)
        
      }
       
  }

  let index=props.wishlist.findIndex(i=>i.id===props.id)
  
  function removeWishlist(props){

    let tempp = cloneDeep(props.wishlist)
    tempp = tempp.filter((i)=> i.id !== props.id)
    props.setWishlist(tempp)

    
  }
  
  
  
  const styles={
    height:"9.375rem"
  }

  return (
    <div className="card m-3 pop-out" style={{ width: "18rem" }}>
      <img src={props.img} style={styles}
       className="card-img-top" alt="..." />
      <div className="card-body border-0">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
        {props.description}
        </p>
      </div>
      <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{props.list1}</li>
            <li className="list-group-item"> ₹ {props.price}</li>
          </ul>
      </div>
     
      <div className="card-body d-flex justify-content-between border-0">
       <button className="btn bg-success m-lg-2 text-white" onClick={()=>book(props)} > 
          Book Seat
        </button>
        <img className="wishlist-icon" 
        src={index < 0 ? "wishlist-empty.png" : props.wishlist[index].isWishlist?
        "wishlist-filled.png":"wishlist-empty.png"}
          
          onClick={()=>{index < 0 ? addToWishlist(props) : props.wishlist[index].isWishlist? 
          removeWishlist(props): addToWishlist(props)}} alt="wishlist" />
        
      </div>
    </div>

  );
}


//  