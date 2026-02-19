import {React}from "react";
import "../App.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

function Cartproduct({ cart, setCart }) {



const handleIncrease = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDecrease = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0); 

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

    const close = (id) => {
            const updatedCart = cart.filter((item) => item.id !== id);

            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
  };


  return (
    <div >
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cart.map((item, index) => (
            <div className="cartproduct container border border-1 my-2 rounded-4 p-0">
          <div key={item.id || index} className="d-flex row p-2">
            <img src={item.img} className="col-3" style={{height:"170px"}} alt={item.name}/>
            <div className="mt-5 col-6">
            <h3 className="mb-4" >{item.header}</h3>
            <span className="mt-5 w-75 me-5 fs-6 text-secondary">${item.cost} * {item.quantity} </span>
            <span>${item.cost}</span>
            </div>
            <div className=" col-3 ">
            <div className=" d-flex justify-content-end">
             <button type="button" class="btn-close"  style={{pointer:"carousel"}} onClick={()=> close(item.id)}></button>
             </div>
            <div className=" mt-5 ms-5">
             <button className="mt-5 border border-1 bg-light  rounded-1 px-3 py-1 m-1" style={{pointer:"carousel"}} onClick={()=> handleIncrease(item.id)}> <FaPlus /> </button>
             <button className=" mt-5 border border-1 bg-light bg-opacity-25 rounded-1 px-3 py-1 m-1" style={{pointer:"carousel"}} onClick={()=> handleDecrease(item.id)}> <FaMinus /> </button>
            </div></div>
          </div></div>
         
        ))
            
      )}
    </div>
  );
}

export default Cartproduct;