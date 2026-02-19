import React from 'react'
import { FaBagShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3 py-5">
    <div className='container-fluid'>
     <div className='row'>
        <div className='col-3'>
        <div className='p-3'>
            <h2 className='text-light my-3'> <FaBagShopping />Store</h2>
            <p className='text-secondary my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
        </div></div>
        <div className='col-3'>
        <div>
             <h2 className='text-light my-3'>About Us</h2>
             <ul>
                <li><Link className='text-secondary text-decoration-none my-3'>Careers</Link></li>
                <li><Link className='text-secondary text-decoration-none my-3'>Our Stores</Link></li>
                <li><Link className='text-secondary text-decoration-none my-3'>Our Cares</Link></li>
                <li><Link className='text-secondary text-decoration-none my-3'>Terms & Conditions</Link></li>
                <li><Link className='text-secondary text-decoration-none my-3'>Privacy Policy</Link></li>
             </ul></div>
        </div>
        <div className='col-3'>
            <h2 className='text-light my-3'>Customer Care</h2>
             <ul>
                <li><Link className='text-secondary text-decoration-none my-3'>Help Center</Link></li>
                <li><Link className='text-secondary text-decoration-none my-3'>How to Buy</Link></li>
                <li><Link className='text-secondary text-decoration-none my-3'>Track Your Order</Link></li>
                <li><Link className='text-secondary text-decoration-none my-3'>Corporate & Bulk Purchasing</Link></li>
                <li><Link className='text-secondary text-decoration-none my-3'>Returns & Refunds</Link></li>
             </ul>
        </div>
        <div className='col-3'>
             <h2 className='text-light my-3'>Contact Us</h2>
             <ul>
                <li><Link className='text-secondary text-decoration-none my-3'>70 Washington Square South, New York, NY 10012, United States</Link></li>
                <li><Link className='text-secondary text-decoration-none my-3'>Email: uilib.help@gmail.com</Link></li>
                <li><Link className='text-secondary text-decoration-none my-3' >Phone: +1 1123 456 780</Link></li>
             </ul>
        </div>
     </div>
    </div></nav>
  )
}

export default Footer;