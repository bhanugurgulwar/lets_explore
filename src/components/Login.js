import React,{useState} from 'react'
import pass from '../pass'
import { useNavigate } from 'react-router-dom'


export default function Login() {
    let logged = useNavigate();
    const [validate,setValidate]=useState([])
    
    console.log(pass)

    const handleChange=(event)=>{
    const {name,value} = event.target;
    setValidate((prev) => {
      return{
        ...prev,
        [name] :value
      }
     
    })
  }
   console.log(validate)


   
   const handleSubmit= (event) =>{
       
       event.preventDefault();
       
       let index = pass.findIndex(i=> i.userid === validate.userid)
        if(pass.find((i)=> i.userid=== validate.userid)){
        if(validate.password === pass[index].password ) {
            console.log("logged in")
            logged('/home')

        }else
        console.log("invalid password")
    }
    else
        console.log("invalid user id")
    
  }
  
    return (


         <div className="container w-75 d-flex flex-column justify-content-around">
             <form onSubmit={handleSubmit}>   
            <div className="col"> 
            <input
                type="text"
                className="form-control m-3"
                placeholder="User Id"
                name='userid'
                value={validate.userid}
                onChange={handleChange}
            />
            </div>
            <div className="col">
            <input
                type="password"
                className="form-control m-3"
                placeholder="Password"
                name='password'
                value={validate.password}
                onChange={handleChange}
            />
             <input 
                type="submit"
                className="form-control m-3 btn btn-dark"
                onSubmit={handleSubmit}
            />

            </div>
            </form> 
        </div>
   
  )
}
