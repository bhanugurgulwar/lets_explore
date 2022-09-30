import React from 'react'
import Form from './Form'

export default function footer(){

    const styles={
        height:"100px"
    }

    return (
        <div className='container-fluid footer d-flex justify-content-around bg-dark bottom text-white '>

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
                        <a className="nav-link active" aria-current="page" href="#">
                        Active
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        Link
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        Link
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
            </div>
            <div className='foot--nav'>  

            </div>
            <div className='footer--form w-25 h-100 '>  
                <Form />
             </div>
        </div>
    )
}