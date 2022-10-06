import React from 'react'
import Form from './Form'
import {Link } from 'react-router-dom'

export default function footer(){

    const styles={
        height:"100px"
    }

    return (
        <div className='container-fluid footer d-flex mt-3 justify-content-around align-items-center bg-dark bottom text-white align-content-md-center' style={{height:`300px`}}>

            <div className='footer-details'>   
                <img style={styles} src="https://www.pngall.com/wp-content/uploads/1/Trekking-PNG-HD.png" alt="trekkers logo" />
                <h3>Lets explore</h3>
                <p>
                    copyright @ 
                </p>
            </div>
            <div className='foot'>  
            
                <ul className="nav flex-column">
                    <li className="nav-item">
                    
                       <Link to={"/"} > Home </Link> 
                      
                    </li>
                    <li className="nav-item">
                        
                        About
                       
                    </li>
                    <li className="nav-item">
                        
                        View Gallery
                        
                    </li>
                    <li className="nav-item">
                        
                        Contact Us

                    </li>
                </ul>
            </div>
            <div className='foot--nav'>  

            </div>
            <div className='footer--form w-25 h-auto '>  
                <Form />
             </div>
        </div>
    )
}