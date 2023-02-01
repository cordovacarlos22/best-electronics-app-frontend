import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import { Link } from 'react-router-dom';
const FooterCompo = () => {
  return (
    <div className='footer-top-container bg-blue-600 flex  items-center justify-around  text-gray-200 pb-2 flex-wrap text-bold  p-2'>
      <div className='local-color flex  flex-col items-center  justify-center group'>
        <Link className='flex flex-col items-center ' href='w' alt="$">
          < LocalShippingIcon />
          <h3 className='text-bold group-hover:text-yellow-400  '>Shipping,Delivery & Store Pickup</h3>
        </Link>
      </div>
      <div className='local-color flex  flex-col items-center justify-center group'>
        <Link className='flex flex-col items-center' href='w' alt="$">
          <CurrencyExchangeIcon />
          <h3 className='text-bold group-hover:text-yellow-400'>Returns and Exchanges</h3>
        </Link>
      </div>
      <div className='local-color flex  flex-col items-center justify-center group'>
        <Link className='flex flex-col items-center' href='w' alt="$">
          <PriceCheckIcon />
          <h3 className='text-bold group-hover:text-yellow-400 '>Price Match Guarantee</h3>
          
        </Link>
        
      </div>
      <hr className='w-full' />
      </div>
  )
}

export default FooterCompo
