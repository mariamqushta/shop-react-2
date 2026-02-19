
import '../App.css';
import Carousel from '../component/carousel';
import Description from '../component/description';
import Discount from '../component/discount';
import Arrivals from '../component/Arrivals';
import Bestsales from '../component/Bestsales';


function Home({onAddToCart}) {
  return(
    <div>
      
        <Carousel/>
        <Description />
        <Discount onAddToCart={onAddToCart} />
        <Arrivals onAddToCart={onAddToCart} />
        <Bestsales onAddToCart={onAddToCart} />
        
    </div>
  );
}

export default Home;