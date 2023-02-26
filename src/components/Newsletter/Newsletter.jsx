import SendIcon from '@mui/icons-material/Send';
import React, { useState, useEffect } from 'react'
import {susbscribe} from '../../services/newsletter.service'
const Newsletter = () => {

  let [email, setEmail] = useState("")

  const onNewSubs = async (event) => {
    event.preventDefault();
    const response = await susbscribe(email);
    console.log("service responsed", response);
    email = ' '
  }
  return (
    <div className='w-screen h-full justify-center   bg-[#EFF2F4] flex  flex-col  p-2 '>
      <h1 className='text-6xl justify-center flex  text-blue-600 text-extrabold'>Newsletter</h1>
      <p className='flex justify-center text-  text-xl m-2 text-bold'>Get timely Updates from your favorite Products</p>
      <div className='flex justify-center mb-2'>
        
          <input
            className='w-full rounded-l-sm p-1  text-blue-700  text-extrabold '
            placeholder='Your Email here:'
            type="email"
            value={email}
            id="email"
            name="email"
            onChange={({ target }) => setEmail(target.value)}
          >

          </input>
        
        <div className=' bg-blue-700 cursor-pointer rounded-r-sm p-1 text-white'>
          <button onClick={onNewSubs} type="submit" ><SendIcon></SendIcon></button>
        </div>

      </div>
    </div>
  )
}

export default Newsletter
