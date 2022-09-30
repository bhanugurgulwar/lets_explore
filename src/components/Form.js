
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
                name:value
              }
        } )
    }


    const handleSubmit =() =>{
        

    }

  return (
    <div>
        <form className='flex-cloumn' onSubmit={handleSubmit}>

            <input type="text" 
                placeholder='Name'
                value={formData.name} 
                onChange={handleChange}
            />

            <input type="email" 
                name="email"
                id="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
            />

            <textarea name="" id="" cols="30" rows="5"
                placeholder='Comments ...' 
                value={formData.comments}
                onChange={handleChange}
            />

            <button>Post !</button>

         </form>
    </div>
  )
}
