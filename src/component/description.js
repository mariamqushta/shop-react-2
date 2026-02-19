import React, { useState } from 'react'
import { FaCar } from "react-icons/fa";
import { IoCard } from "react-icons/io5";
import { FaShieldHalved } from "react-icons/fa6";
import { BsHeadphones } from "react-icons/bs";

function Description() {
    
 const element1=[
    {icon:<FaCar />,header:"Free Shipping", style:"first"},
    { icon:<IoCard />,header:"Safe Payment", style:"secound"},
    {icon:<FaShieldHalved />,header:"Secure Payment", style:"third"},
    {icon:<BsHeadphones />,header:"Back Guarantee", style:"fourth"}
]
  return (
    <div className='container'>
    <div className='row my-5'>
           {element1.map((item, index) => (
       <div className='col'>
         <div className={`text-center p-4 rounded-5 ${item.style}`}>
           <div className='mx-auto bg-light rounded-circle w-25 h-25 p-1 fs-3'>{item.icon}</div>
           <h3 className="my-3">{item.header}</h3>
           <p>Lorem ipsum dolor sit amet.</p>
         </div>
       </div>  ))}
             
    </div>
    </div>
  )
}

export default Description;
