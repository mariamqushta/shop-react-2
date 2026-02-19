import logo from './logo.svg';
import Home from './pages/home';
import Navbar from './component/navbar';
import Footer from './component/footer';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './pages/shop';
import Choosenproduct from './pages/Choosenproduct';
import Cart from './pages/cart';
import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState(() => {
  const saved = localStorage.getItem("cart");
  try {
    const parsed = JSON.parse(saved);  
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
});
const handleAddToCart = (product) => {
  setCart((prevCart) => {
    const existing = prevCart.find((item) => item.id === product.id);

    if (existing) {
      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...prevCart, { ...product, quantity: 1 }];
    }
  });

  alert(`${product.header} added to cart!`);
};
// const handleAddToCart = (item) => {
//   const existingItem = cart.find(cartItem => cartItem._id === (item._id || item.id));

//   let newCart;
//   if (existingItem) {
//     newCart = cart.map((cartItem) =>
//       cartItem._id === (item._id || item.id)
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   } else {
//     newCart = [
//       ...cart,
//       { ...item, quantity: 1, cost: Number(item.cost), _id: item._id || item.id }
//     ];
//   }

//   setCart(newCart);
//   localStorage.setItem("cart", JSON.stringify(newCart));
//   alert(`${product.header}to cart!`);
// };
  return(
    <BrowserRouter>
      {/* Page wrapper flex column */}
      <div className="app-container">
        <Navbar cartCount={cart.length || 0} />

        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
            <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
            <Route path="/choosenproduct/:id" element={<Choosenproduct onAddToCart={handleAddToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
