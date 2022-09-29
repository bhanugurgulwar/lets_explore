
import { GiMountainClimbing } from "react-icons/gi";

export default function navbar({explore}) {



  return (
      <nav className="navbar navbar-dark  sticky-top p-0">
        <div className="container-fluid  p-4 bg-dark">
          <GiMountainClimbing></GiMountainClimbing>
          <a className="navbar-brand  text-white ">Let's Explore</a>

         <div>
           <button className="btn btn-outline-warning m-1" type="submit">
            Explore<span className="badge text-success">{explore.length}</span>
          </button>
          <button className="btn bg-primary text-white m-1">  
            Wishlist
          </button>
         </div>
        </div>
      </nav>
  );
}
