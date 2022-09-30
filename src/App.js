
import './App.css';
import Navbar from './components/nav';
import Main from './components/Main';
import Footer from './components/Footer';
import {useState} from 'react'

function App() {
  const [explore,setExplore] = useState([]);
  const [wishlist,setWishlist] = useState([]);

    console.log(wishlist)

  return (
    <div className="App">
      <Navbar explore={explore} wishlist={wishlist} />
      <Main explore={explore} setExplore={setExplore} wishlist={wishlist} setWishlist={setWishlist}/>
      <Footer />
    </div>
  );
}

export default App;
