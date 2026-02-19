import React from 'react'
import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Item({  _id, img, Discount, header, cost, onAddToCart }) {
    const item = { id: _id, img, Discount, header, cost };
  return (
       
          <div className='col-4 '>
             <div className=" bg-light p-3  mx-4 rounded-5 my-3 discountcard">
             <div className='d-flex justify-content-between'> 
                <div className='rounded-5 bg-info  px-1'> {Discount} % off</div>
                <CiHeart className='fs-3 opacity-0 CiHeart1' />
             </div>
             <Link to={`/choosenproduct/${_id}`}><img src={img} className='imgdiscound mx-auto w-100' rel="img"  /></Link>
             <div className='d-flex justify-content-between'>
             <div>
             <h3>{header}</h3>
             <FaStar className='FaStar'/> <FaStar className='FaStar'/> <FaStar className='FaStar'/> <FaStar className='FaStar'/> <FaStar className='FaStar'/>
             <h2>${cost}</h2></div>
             <button className='ms-auto bg-light me-1 rounded-circle  p-1 fs-3 mt-5 border border-0 ' onClick={() => onAddToCart(item)}>+</button>
             </div>
             </div>
           </div> 
           
  )
}



export default Item;
