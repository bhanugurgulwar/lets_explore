import React from 'react'

export default function footer(){

    const styles={
        height:"100px"
    }

    return (
        <div className='container-fluid footer d-flex bg-dark bottom text-white '>

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
            <div className='footer--form '>  
                <form className='flex-cloumn' action="">
                    <input type="text" 
                        placeholder='Name' />
                    <input type="email" 
                        name="email"
                        id="email"
                        placeholder='Email' />
                    <textarea name="" id="" cols="30" rows="5"
                        placeholder='Comments ...' />
                    <button>Post !</button>
                </form>
             </div>
        </div>
    )
}