import {React,useEffect,useState} from 'react'
import api from '../api/api';
import Item2 from './item2';
function Bestsales({onAddToCart}) {
       
      const [products, setProducts] = useState([]);
      useEffect(() => {
      const fetchProducts = async () => {
        const res = await api.get("/products");
        setProducts(res.data);
      };
      fetchProducts();
    }, []);{}
  return (
       <div className='container-fluid bg-info bg-opacity-10 py-3'>
         <h2 className='text-center py-2 pt-4 fs-1'><b>Best Sales</b></h2>
         <div className='container mx-auto w-75'>
            <div className='row my-5'>
               {products.slice(0, 6).map((item, index) => (
             <Item2 key={item._id} _id={item._id} Discount={item.Discount} img={item.img} header={item.header} cost={item.cost} onAddToCart={onAddToCart} />
        ))}
                
       </div>
         </div>
       </div>
  )
}

export default Bestsales