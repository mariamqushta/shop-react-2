import React from "react";
import Cartproduct from "../component/cartproducts";
import { Link  } from 'react-router-dom';

function Cart({ cart, setCart }) {
    const totalPrice = cart.reduce((acc, item) => {
    const itemTotal = Number(item.price || item.cost) * (item.quantity || 1);
    return acc + itemTotal;
  }, 0);
   const Product=cart.reduce((acc, item)=>{
     const product = Number(item.quantity || 1);
    return acc + product;
   }, 0)

   const finalprice=totalPrice
  return (
   <div className="cart container pt-5 mt-5">

   <div className="d-flex row">
     <div className="col-9">
     
       <Cartproduct cart={cart} setCart={setCart}/>
    </div>

    <div className="col-3">
        <div className="cartproduct container border border-1 rounded-4 p-3">
         <h3> Cart Summary</h3>
         <hr></hr>

      <div className=" p-2">
        <div>Total amount:</div>
        <div><b>${finalprice.toFixed(0)}</b></div>
      </div>
      </div>
    </div>

   </div>
   </div>
  );
}

export default Cart;