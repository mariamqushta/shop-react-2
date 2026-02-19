import '../App.css';
import { Link  } from 'react-router-dom';
import { FaBagShopping } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

function Navbar({ cartCount }) {
  return(
<nav class=" header navbar navbar-expand-lg   ">
  <div class="container-fluid  px-3">
    <Link class="navbar-brand fs-3 ms-5 ps-5" to="#"><b> <FaBagShopping className="text-primary"/>SHOPE</b></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ms-auto me-3 fs-3">
        <li class="nav-item mx-3">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item mx-3">
          <Link class="nav-link " to="/shop">shop</Link>
        </li>
        <li class="nav-item mx-3">
          <Link class="nav-link" to="/cart">cart</Link>
        </li>
        <li class="nav-item mx-3">
         <Link className="nav-link link" to="/cart"> <FaCartShopping /> <span className='cartspan fs-6 bg-primary text-light p-1' id="card">{cartCount}</span></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;