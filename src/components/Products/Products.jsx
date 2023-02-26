import React, { useEffect, useState, useContext } from 'react'
import Product from './Product/Product';
import {getProductList} from '../../services/products.service'
import { CartContext } from '../../context/cartContext';
const Products = () => {

  const { addItem } = useContext(CartContext)
  const [productData, setProductData] = useState([]);

  const showProducts = async () => {
    const response = await getProductList();
    if (response.status === 200)
      setProductData(response.data);

  };

  useEffect(() => {
    showProducts();
    console.log(showProducts())
  }, []);

  const onProductAdded = (product) => {
    console.log("clicked", product);
    addItem(product)
  }

  // const productData =
  //   [
  //     {
  //       id: 1,
  //       src: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455191_sd.jpg;maxHeight=400;maxWidth=600",
  //       title: "Microsoft - Surface Laptop 4 - 15” Touch-Screen – AMD Ryzen 7 Surface Edition – 8GB Memory - 512GB Solid State Drive - Matte Black",
  //       price: "Price: $" + 400,
  //       regprice: "$" + 599.99,
  //       category: "laptops",
  //       href: "www.google.com"
  //     },
  //     {
  //       id: 2,
  //       src: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455191_sd.jpg;maxHeight=400;maxWidth=600",
  //       title: "Microsoft - Surface Laptop 4 - 15” Touch-Screen – AMD Ryzen 7 Surface Edition – 8GB Memory - 512GB Solid State Drive - Matte Black",
  //       price: "Price: $" + 400,
  //       regprice: "$" + 599.99,
  //       category: "laptops",
  //       href: "www.google.com"
  //     }

  //   ]
  return (
    <div  className='Products-container'>
      {productData && productData.map(item =>(
        
       
        <Product key={item.id} sku={item.sku} src={item.src} alt={item.category} href={item.href} description={item.title} price={`$ ${item.price}`} regprice={` $ ${item.regprice}`} onClic={onProductAdded}></Product> 
      
       
        
      ))}
    </div>
  )
}

export default Products
