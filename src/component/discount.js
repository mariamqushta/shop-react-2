import {React,useEffect,useState} from 'react'
import { discountele } from '../models/discountele';
import Item from './item';
import api from "../api/api";

function Discount({onAddToCart}) {
   
  const [products, setProducts] = useState([]);
  useEffect(() => {
  const fetchProducts = async () => {
    const res = await api.get("/products");
    setProducts(res.data);
  };
  fetchProducts();
}, []);
  return (
    <div className='container-fluid bg-primary bg-opacity-10 py-3'>
      <h2 className='text-center py-2 pt-4 fs-1'><b>Big Discount</b></h2>
      <div className='container mx-auto w-75'>
         <div className='row my-5'>
           {products.slice(0, 6).map((item, index) => (
             <Item key={item._id} _id={item._id} Discount={item.Discount} img={item.img} header={item.header} cost={item.cost} onAddToCart={onAddToCart} />
        ))}
             
    </div>
      </div>
    </div>
  )
}

export default Discount;