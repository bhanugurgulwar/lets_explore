
import './App.css';
import Navbar from './components/nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Explore from './components/Explore';
import Login from './components/Login';
import Wishlist from './components/Wishlist';
import {useState,useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [explore,setExplore] = useState(JSON.parse(localStorage.getItem('explore'))||[]);
  const [wishlist,setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist'))||[]);

  useEffect(()=>{
    localStorage.setItem('explore',JSON.stringify(explore))
  },[explore])

    useEffect(()=>{
    localStorage.setItem('wishlist',JSON.stringify(wishlist))
  },[wishlist])
 

  return (
    <Router>
      
      <div className="App">
        <Navbar explore={explore} wishlist={wishlist} />
        <div> 
            <Routes>

            <Route exact path='/' element={ <> 
               <Login />
            </> } /> 
            

            <Route exact path='/home' element={<> <Main explore={explore}
             setExplore={setExplore} wishlist={wishlist} 
              setWishlist={setWishlist}/> </>}/>
               
            
            <Route exact path='/explore' element={  <Explore explore={explore} 
              setExplore={setExplore} /> } />
            
            <Route exact path='/wishlist' element={  <Wishlist wishlist={wishlist}
              setWishlist={setWishlist} /> } />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
