import React,{useState,useEffect} from 'react'
import '/Users/carloscordova/Desktop/best-electronics-app/src/components/Products/Product.css'
import Product from './Product/Product';
import { getsliderslist } from '../../services/slider.service';

const Products = () => {

  const [productData, setProductData] = useState([]);

  const showSlider = async () => {
    const response = await getsliderslist();
    if (response.status === 200)
      setProductData(response.data.result);
  };

  useEffect(() => {
    showSlider();
  }, []);
  return (
    <div  className='Products-container'>
      {productData && productData.map(item =>(
        
       
        <Product key={item.id} src={item.src} alt={item.category} href={item.href} description={item.title}  price={item.price}  regprice={item.regprice}></Product> 
      
       
        
      ))}
    </div>
  )
}

export default Products
