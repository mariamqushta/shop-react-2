
import '../App.css';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function Carousel() {
  return(
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner carousel">
    <div class="carousel-item active">
      <div class="container h-100">
  <div class="row h-100">
    <div class="col-md-6">
    <div className='container w-75 pt-5'>
      <h1 className='pt-5 mt-5 p-1'><b>75% off for your first shopping</b></h1>
      <p className='p-1'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis."</p>
      <button className='mt-5 rounded-pill p-3 fs-5 carourselbutton text-light'>Visit our Collections</button>
      </div>
    </div>
    <div class="col-md-6">
    <div className='container pt-5'>
      <img src='erasebg-transformed.png'  rel='img' className='pt-4'/>
      </div>
    </div>
  </div></div>
    </div>
    <div class="carousel-item">
      
      <div class="container h-100">
  <div class="row h-100">
    <div class="col-md-6">
    <div className='container w-75 pt-5'>
      <h1 className='pt-5 mt-5 p-1'><b>30% Off For Your First Shopping For Mobile Section</b></h1>
      <p className='p-1'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis."</p>
      <button className='mt-5 rounded-pill p-3 fs-5 carourselbutton text-light'>Visit our Collections</button>
      </div>
    </div>
    <div class="col-md-6">
    <div className='container pt-5'>
      <img src='erasebg-transformed (1).png'  rel='img' className='pt-4 h-75'/>
      </div>
    </div>
  </div></div>

    </div>
    <div class="carousel-item">
     
      <div class="container h-100">
  <div class="row h-100">
    <div class="col-md-6">
    <div className='container w-75 pt-5'>
      <h1 className='pt-5 mt-5 p-1'><b>50% Off For Your First Shopping For Headphone Section</b></h1>
      <p className='p-1'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis."</p>
      <button className='mt-5 rounded-pill p-3 fs-5 carourselbutton text-light'>Visit our Collections</button>
      </div>
    </div>
    <div class="col-md-6">
    <div className='container pt-5'>
      <img src='erasebg-transformed (2).png'  rel='img' className=' h-75'/>
      </div>
    </div>
  </div></div>

    </div>
    <div class="carousel-item">
     
      <div class="container h-100">
  <div class="row h-100">
    <div class="col-md-6">
    <div className='container w-75 pt-5'>
      <h1 className='pt-5 mt-5 p-1'><b>50% Off For Your First Shopping </b></h1>
      <p className='p-1'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis."</p>
      <button className='mt-5 rounded-pill p-3 fs-5 carourselbutton text-light'>Visit our Collections</button>
      </div>
    </div>
    <div class="col-md-6">
    <div className='container pt-5'>
      <img src='erasebg-transformed (3).png'  rel='img' className='p-4 ms-md-5  h-75'/>
      </div>
    </div>
  </div></div>

    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="fs-4" aria-hidden="true"> <IoIosArrowDropleftCircle /></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="fs-4" aria-hidden="true"><IoIosArrowDroprightCircle /></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  );
}

export default Carousel;