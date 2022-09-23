// import {} from ""
import { GiMountainClimbing } from 'react-icons/gi';

export default function navbar(){
    return (
        <div className="navbar text-white">
            <nav className="navbar navbar-dark  ">
    <div className="container-fluid fixed-top p-4 bg-dark">
        <GiMountainClimbing  />
      <a className="navbar-brand  text-white ">Let's Explore</a>
      <form className="d-flex">
        <button className="btn btn-outline-warning" type="submit">
          Explore
        </button>
      </form>
    </div>
  </nav>  
        </div>
    )
}