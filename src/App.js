
import './App.css';
import Navbar from './components/nav';
import Main from './components/Main';
import Footer from './components/Footer';
// import  Wishlist  from './components/Wishlist';
import Explore from './components/Explore';
import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wishlist from './components/Wishlist';

function App() {
  const [explore,setExplore] = useState([]);
  const [wishlist,setWishlist] = useState([]);

    console.log(wishlist)

  return (
    <Router>
      <div className="App">
        <Navbar explore={explore} wishlist={wishlist} />
        <div> 
          <Routes>
            <Route exact path='/' element={<> <Main explore={explore}
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
