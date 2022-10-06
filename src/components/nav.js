
import { GiMountainClimbing } from "react-icons/gi";
import { Link } from 'react-router-dom';

export default function navbar(props) {



  return (
      <nav className="navbar navbar-success  sticky-top p-0">
        <div className="container-fluid d-flex justify-content-between p-3  bg-success">
          <div>
          <GiMountainClimbing></GiMountainClimbing>
          </div>

          <div>
          <Link  className="text-decoration-none" to={"/home"}>
            <p className="navbar-brand  text-white  ">Let's Explore</p>
          </Link>
          </div>
            

         <div>
          <Link to={"/explore"} >

             <button type="button" className="btn btn-warning position-relative m-2">
                Explore
               {props.explore.length > 0 ?
               <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {props.explore.length}
                </span> :
               <span className="visually-hidden">unread messages</span>
               } 
              </button>

          </Link>

          <Link  to={"/wishlist"} > 

          <button type="button" className="btn btn-primary position-relative m-2">
            Wishlist
              {props.wishlist.length > 0 ?
               <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {props.wishlist.length}
                </span> :
               <span className="visually-hidden">unread messages</span>
               } 
          </button>

          </Link> 

         </div>
        </div>
      </nav>
  );
}
