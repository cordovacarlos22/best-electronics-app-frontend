import React from 'react'
import { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import {RxDotFilled} from "react-icons/rx";
const Slider = (props) => {

  const slides = [
    {
      title:"Laptops and computers",
      desc:"lorem ",
      url:'https://images.unsplash.com/photo-1674577201145-da3fc3041698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80'
    },
    {
      title: "Tvs",
      desc: "lorem ",
      url: 'https://images.unsplash.com/photo-1661961112134-fbce0fdf3d99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80'
    },
    {
      title: "Apple",
      desc: "lorem ",
      url: 'https://images.unsplash.com/photo-1674788052100-77e2aa1f0e82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
    },
    {
      title: "Videos Games",
      desc: "lorem ",
      url: 'https://images.unsplash.com/photo-1674807309279-6b54689e90d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
    }, {
      title: "Major Appliances",
      desc: "lorem ",
      url: 'https://images.unsplash.com/photo-1674769021687-63263e148cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
    },
  ]

  const [currentIndex,setCurrentIndex] = useState(0);

  const prevSlide = () =>{
    const isFirstSlide = currentIndex === 0;
    const newIndex  = isFirstSlide? slides.length -1 : currentIndex -1  ;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isSecondSlide = currentIndex === slides.length -1 ;
    const newSecondIndex = isSecondSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newSecondIndex);
  };
  
  // style = {{ backgroundImage: `url(${slides[currentIndex].url})` }}

  return (
    <div className='slider-container  h-[850px] w-screen m-auto py-16 px-4 relative   bg-cover duration-500  flex  bg-blue-600  justify-items-center items-center  flex-wrap  '>
     

      <div 
        className=' w-full h-full justify-center items-center flex gap-11 bg-white rounded-2xl  group flex-col'>
        <h1 className='font-extrabold text-[50px] '>Deal Mode Activated</h1>
        
        <img className='w-[90px] h-[90px]' src={slides[currentIndex].url} alt='#'></img>

        <div className='flex flex-col '>
          <h1 className='font-extrabold font-xl text-2xl'>{slides[currentIndex].title}</h1>

          <p className='font-light text-[] '>{slides[currentIndex].desc}</p></div>

        {/* left arrow */}
        <div onClick={prevSlide} className='hidden group-hover:block absolute top-[50%] -trasnlate-x-0 trnaslate-y-[-50%] left-5 text-2x1 rounded-full p-2 m-4 bg-black/20 text-white cursor-pointerhiden '>
          <BsChevronCompactLeft size={30} />
        </div>
        {/* right arrow */}
        <div onClick={nextSlide} className='hidden group-hover:block absolute top-[50%] -trasnlate-x-0 trnaslate-y-[-50%] right-5 text-2x1 rounded-full p-2 m-4 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight size={30} />
        </div>
        <div className=''>
          dots
        </div>

      </div>
          
      
    </div>
  )
}

export default Slider
