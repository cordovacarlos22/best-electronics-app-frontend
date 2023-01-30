import SendIcon from '@mui/icons-material/Send';
import React from 'react'
import './Newsletter.css';
const Newsletter = () => {
  return (
    <div className='w-screen h-80 justify-center   bg-blue-600 flex  flex-col  p-2'>
     <h1 className='text-[90px] justify-center flex  text-yellow-400 text-extrabold'>Newsletter</h1>
     <p className='flex justify-center text-white m-2'>Get timely Updates from your favorite Products</p>
      <div className='flex justify-center '>
        <input className='w-2/4' placeholder='Your Email here:' type="email" ></input>
        <div className=' bg-yellow-400 cursor-pointer'>
          <button><SendIcon></SendIcon></button>
        </div>
       
      </div>
    </div>
  )
}

export default Newsletter
