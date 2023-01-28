import React from 'react'
import { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
const Slider = () => {

  const slides = [
    {
      url:'https://images.unsplash.com/photo-1674577201145-da3fc3041698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112134-fbce0fdf3d99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1674788052100-77e2aa1f0e82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1674807309279-6b54689e90d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
    }, {
      url: 'https://images.unsplash.com/photo-1674769021687-63263e148cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
    },
  ]

  const [currentIndex,setCurrentIndex] = useState(0);
  
  return (
    <div className='slider-container  h-[850px] w-screen m-auto py-16 px-4 relative bg-blue-600 z--0 '>
      <div style={{ backgroundImage: `url(${slides[0].url})` }} className='w-full h-full rounded-2xl  bg-center bg-cover duration-500 group'>
      {/* left arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -trasnlate-x-0 trnaslate-y-[-50%] left-5 text-2x1 rounded-full p-2 m-4 bg-black/20 text-white cursor-pointerhiden '>
          <BsChevronCompactLeft size={30} />
      </div>
      {/* right arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -trasnlate-x-0 trnaslate-y-[-50%] right-5 text-2x1 rounded-full p-2 m-4 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight  size={30}/>
        </div>
     </div>
    </div>
  )
}

export default Slider
