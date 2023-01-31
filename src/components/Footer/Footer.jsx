import React from 'react'
import './Footer.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
const Footer = () => {
  return (
    
      
     <div className='main-container w-screen h-80 bg-blue-600  flex p-5 flex-col  flex-wrap'>
      
      <div className='footer-top-container  flex  items-center justify-around  text-gray-200 pb-2'>
        <div className='local-color flex  flex-col items-center  justify-center '>
          <a className='flex flex-col items-center' href='w' alt="$">
          < LocalShippingIcon/>
            <h3 className='text-bold hover:text-yellow-400  text-sm'>Shipping,Delivery & Store Pickup</h3>
          </a>
        </div>
        <div className='local-color flex  flex-col items-center justify-center'>
          <a className='flex flex-col items-center' href='w' alt="$">
            <CurrencyExchangeIcon />
            <h3 className='text-bold hover:text-yellow-400'>Returns and Exchanges</h3>
          </a>
        </div>
        <div className='local-color flex  flex-col items-center justify-center'>
          <a className='flex flex-col items-center' href='w' alt="$">
            <PriceCheckIcon />
            <h3 className='text-bold hover:text-yellow-400'>Price Match Guarantee</h3>
          </a>
        </div>
      </div>
      <hr/>
      <div className='left-container'>
        <div className='logo-container font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-white gap-2  text-2xl md:items-center '>
          <span className='text-3x1 text-[#FFE000]'><ion-icon name="pricetags-outline"></ion-icon> </span>
          <h1 className='flex flex-col  text-2xl'>Best Deals <hr /> <span className='text-sm text-[#FFE000]'>Electronics</span></h1>
          <br />
          
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Footer
