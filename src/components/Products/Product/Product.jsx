import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
const Product = (item) => {
  return (
    <div className='product-container border-2 border-gray   h-full items-center  m-1 p-1 rounded-lg flex  justify-center'>
     <div className='  flex-1 m-1'>
        <img className='w-[70%]' src={item.src} alt={item.alt}></img>
     </div>
      <div className='flex-1'>
        <h4 className='hover:text-blue-600'> <a className='cursor-pointer ' href={item.href} >{item.description}</a> </h4>
      </div>
      <div className='flex-1 justify-center items-center flex  flex-col'>
        <p className='text-red-600  font-bold text-2xl m-2'>{item.price}</p>
        <p className='pb-2'>Clearance </p>
        <span className='text-white bg-red-600 m-2 text-sm p-2'>reg price: {item.regprice}</span>
        <button onClick={() => item.onClic(item)} className='bg-yellow-400 rounded-sm items-center place-items-center justify-center  flex m-5 p-2 w-40 hover:text-blue-600'><Link><ShoppingCartIcon />add to cart</Link></button>
      </div>
    </div>
  )
}

export default Product