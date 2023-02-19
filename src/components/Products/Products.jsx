import React from 'react'
import '/Users/carloscordova/Desktop/best-electronics-app/src/components/Products/Product.css'
import Product from './Product/Product';


const Products = () => {

  const productData =
    [
      {
        id: 1,
        src: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455191_sd.jpg;maxHeight=400;maxWidth=600",
        title: "Microsoft - Surface Laptop 4 - 15” Touch-Screen – AMD Ryzen 7 Surface Edition – 8GB Memory - 512GB Solid State Drive - Matte Black",
        price: "Price: $" + 400,
        regprice: "$" + 599.99,
        category: "laptops",
        href: "www.google.com"
      },
      {
        id: 2,
        src: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455191_sd.jpg;maxHeight=400;maxWidth=600",
        title: "Microsoft - Surface Laptop 4 - 15” Touch-Screen – AMD Ryzen 7 Surface Edition – 8GB Memory - 512GB Solid State Drive - Matte Black",
        price: "Price: $" + 400,
        regprice: "$" + 599.99,
        category: "laptops",
        href: "www.google.com"
      }

    ]
  return (
    <div  className='Products-container'>
      {productData && productData.map(item =>(
        
       
        <Product key={item.id} src={item.src} alt={item.category} href={item.href} description={item.title}  price={item.price}  regprice={item.regprice}></Product> 
      
       
        
      ))}
    </div>
  )
}

export default Products
