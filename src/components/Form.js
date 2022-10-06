
import React,{useState} from 'react'

export default function Form() {

    const inaitailValues ={
        name:"",
        email:"",
        comments:""
    }

    const [formData,setFormData]=useState(inaitailValues)

    const handleChange = (event) => {
        // console.log(event.target)
        const{name,value}=event.target;
        
        setFormData((prevFormData)=>{
         return{
             ...prevFormData,
                [name]:value
              }
        } )
    }


    const handleSubmit =() =>{
        

    }

  return (
    <div>
        <form className='flex-cloumn' onSubmit={handleSubmit}>

            <input type="text"  className='input-group m-1'
                placeholder='Name'
                value={formData.name} 
                onChange={handleChange}
            />

            <input type="email" className='input-group m-1'
                name="email"
                id="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
            />

            <textarea className='input-group m-1' 
                name="" id="" cols="30" rows="5"
                placeholder='Comments ...' 
                value={formData.comments}
                onChange={handleChange}
            />

            <button className='btn btn-primary m-1' >Post !</button>

         </form>
    </div>
  )
}
