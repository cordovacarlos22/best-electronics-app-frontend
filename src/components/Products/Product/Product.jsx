import React from 'react'
import './Product.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Product = (item) => {
  return (
    <div className='product-container border-2 border-gray  w-full h-full items-center  m-2 p-2 rounded-lg flex  justify-center'>
     <div className='flex-1 m-3'>
        <img className='' src={item.src} alt={item.alt}></img>
     </div>
      <div className='flex-1'>
        <h4 className='hover:text-blue-600'> <a className='cursor-pointer ' href={item.href} >{item.description}</a> </h4>
      </div>
      <div className='flex-1 justify-center items-center flex  flex-col'>
        <p className='text-red-600  font-bold text-2xl m-2'>{item.price}</p>
        <p className='m-2'>Clearance </p>
        <span className='text-white bg-red-600 m-2 text-lx p-2'>reg price: {item.regprice}</span>
        <button className='bg-yellow-400 rounded-sm items-center place-items-center justify-center  flex m-5 p-2 w-40'><ShoppingCartIcon /> Shop now</button>
      </div>
    </div>
  )
}

export default Product