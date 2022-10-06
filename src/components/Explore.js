import React from 'react'
import {cloneDeep} from 'lodash'

export default function Explore({explore,setExplore}) {

    
    const check =explore.map((co)=>{
        return(
            <div className='border border-info d-flex justify-content-between p-3 m-1 align-content-center' key={co.id}>
                <img src={co.img} className='m-2'
                style={{ width: "15rem" ,height:"8.375rem"}} alt="" />
               <div>
                 <h5>{co.title}</h5>
                <p>{co.description}</p>
                
             
                <div className='d-flex justify-content-between p-2 '>
                    <div>
                        <button onClick={()=> subCount(co.id,co.count)} 
                        className='btn' >-</button>
                        <span className='p-2' >{co.count}</span>
                        <button onClick={()=> addCount(co.id,co.count)} 
                        className='btn' >+</button>
                        
                    </div>
                    <span className=''> ₹ {co.price*co.count}</span>
                   
                </div>

                  </div>
            </div>
        )
    })


    function addCount(id,count){

      let temp=cloneDeep(explore)
      
      if(temp.find((i)=> i.id === id)){
      let index = temp.findIndex((i)=>i.id === id)
      temp[index].count = temp[index].count+1; 

      setExplore(temp);
      }
  }
    function subCount(id,count){
      
      let temp=cloneDeep(explore)
      
      if(temp.find((i)=> i.id === id)){
      let index = temp.findIndex((i)=>i.id === id)
      temp[index].count <= 1 ? temp.splice(index,1) :
      temp[index].count = temp[index].count-1; 

      setExplore(temp);
      }
    }

    // explore.forEach(element => {
              
    //           let total
    //           let sum= element.count * element.price
    //           total+=sum
    //           return total
    //   })
    let total=0;
    for(let i =0;i<explore.length;i++){
      let sum=explore[i].count * explore[i].price
      total+=sum;
    }
   

  return (
    
    <div className='container d-flex flex-column p-2 m-3'>Explore
    <br />
        {/* {explore.length > 0 ? <div> {  check } </div>: "nothing in cart find places"  } */}
        {check}
    {
      explore.length > 0 ? 
         <div className='d-flex justify-content-between'>
            <h3>Total amount is ₹ {total} </h3>
            <button className='btn btn-success'>Buy</button> 
       </div> :
       <h3>You Have Not Booked Anything To Explore</h3>
    }
    </div>

  )
 
}

