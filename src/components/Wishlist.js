import React from 'react'
import {cloneDeep} from 'lodash'
import Swal from 'sweetalert2'

export default function Wishlist({wishlist,setWishlist}) {
    console.log(wishlist)

  const wlDetails= wishlist.map((wlDs)=>{
    return (
        <div className="card" style={{ width: "18rem" }} key={wlDs.id}>
            <img src={wlDs.img} className="card-img-top" 
            style={{ width: "18rem" ,height:"9.375rem"}} alt="..." />

            <div className="card-body">
                <h5 className="card-title">{wlDs.title}</h5>
                <p className="card-text">
                {wlDs.description}
                </p>
                <button className="btn btn-success" >
                    Book Now
                </button>
                
                </div>
        </div> ) 
  })

  function removeAll(wishlist){

    let temp=cloneDeep(wishlist)
    
     temp.length > 0 ?
    temp.splice(0,temp.length) : 
    
    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'No elements to remove',
    })

    setWishlist(temp);

    }
  
   
    return (
        <>
        <div className='d-flex justify-content-between bg-dark'>
            <h3 className='text text-info m-4'>Your Wishlist</h3>
             <button onClick={()=>removeAll(wishlist)}
             className='btn btn-danger btn-sm m-4'>
                Empty</button>
        </div>
        <div className='container d-flex justify-content-around m-5 flex-wrap'>
            {wlDetails}
        </div>
        </>
    )
    

    }


