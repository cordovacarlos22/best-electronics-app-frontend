import SendIcon from '@mui/icons-material/Send';
import React from 'react'
import './Newsletter.css';
const Newsletter = () => {
  return (
    <div className='w-screen h-full justify-center   bg-[#EFF2F4] flex  flex-col  p-2 '>
     <h1 className='text-[90px] justify-center flex  text-blue-600 text-extrabold'>Newsletter</h1>
     <p className='flex justify-center text-  text-xl m-2 text-bold'>Get timely Updates from your favorite Products</p>
      <div className='flex justify-center mb-2'>
        <input className='w-2/4 rounded-l-sm p-1  text-blue-700  text-extrabold text-xl' placeholder='Your Email here:' type="email" ></input>
        <div className=' bg-blue-700 cursor-pointer rounded-r-sm p-1 text-white'>
          <button><SendIcon></SendIcon></button>
        </div>
       
      </div>
    </div>
  )
}

export default Newsletter
