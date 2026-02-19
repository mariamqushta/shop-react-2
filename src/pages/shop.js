
import React, { useState,useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { discountele } from '../models/discountele';
import Item2 from "../component/item2";
import api from "../api/api";

function Shop({ onAddToCart ,props}) {
const [type, setType] = useState("All");
const [searchTerm, setSearchTerm] = useState("");

  const [products, setProducts] = useState([]);
  useEffect(() => {
  const fetchProducts = async () => {
    const res = await api.get("/products");
    setProducts(res.data);
  };
  fetchProducts();
}, []);
const filteredElements = products
  .filter((item) =>
    type === "All" ? true : item.type === type
  )
  .filter((item) =>
    item.header.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
    <div className="bg-dark p-5">
       <h1 className="Header text-center p-5"> product </h1>
    </div>

    <div className='category container d-flex justify-content-evenly  my-5'> 
            <div class="dropdown ms-5">
            <button class="btn btn-info text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
               <span onClick={() => setType("All")}> search by category {" "} | {" "} <IoIosArrowDown  className='dropdown-toggle'/></span>
            </button>
            <ul class="dropdown-menu text-info" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item text-info" href="#" onClick={() => setType("sofa")}>sofa</a></li>
                <li><a class="dropdown-item text-info" href="#" onClick={() => setType("chair")}>chair</a></li>
                <li><a class="dropdown-item text-info" href="#" onClick={() => setType("phone")}>phone</a></li>
            </ul>
            </div>

           <div class="input-group w-50 rounded-pill ms-5   mb-3">
            <input type="text" class="form-control ms-5 p-2 px-3 rounded-start-5  w-50 bg-body-secondary  border border-0" placeholder="  search.."   value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
            <span class="input-group-text rounded-end-5  p-2 px-3 bg-body-secondary border border-0" id="inputGroup-sizing-sm"><CiSearch /></span>
            </div>

    </div>



        <div className='container-fluid  py-3'>
    
      <div className='container-fluid mx-auto w-75'>
         <div className='row my-5'>
           {filteredElements.map((item, index) => (
             <Item2 _id={item._id} Discount={item.Discount} img={item.img} header={item.header} cost={item.cost} onAddToCart={onAddToCart} />
        ))}
             
    </div>
      </div>
    </div>

    </div>
  )
}



export default Shop
