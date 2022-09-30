
import { GiMountainClimbing } from "react-icons/gi";

export default function navbar(props) {



  return (
      <nav className="navbar navbar-dark  sticky-top p-0">
        <div className="container-fluid  p-3 bg-dark">
          <GiMountainClimbing></GiMountainClimbing>
          <a className="navbar-brand  text-white ">Let's Explore</a>

         <div>
           <button className="btn btn-outline-warning m-1" type="submit">
            Explore<span className="badge text-success">{props.explore.length}</span>
          </button>
          <button className="btn bg-primary text-white m-1">  
            Wishlist<span className="badge text-warning">{props.wishlist.length}</span>
          </button>
         </div>
        </div>
      </nav>
  );
}
