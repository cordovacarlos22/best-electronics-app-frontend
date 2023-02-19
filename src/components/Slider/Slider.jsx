
import React from 'react'
import { useState, useEffect } from 'react'
import { getsliderslist } from "../../services/slider.service";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
const Slider = () => {

  const [slides, setSlides] = useState([]);

  const showSlides = async () => {
    const response = await getsliderslist();
    if (response.status === 200)
      setSlides(response.data.result);

  };

  useEffect(() => {
    showSlides();
    console.log(showSlides())
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isSecondSlide = currentIndex === slides.length - 1;
    const newSecondIndex = isSecondSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newSecondIndex);
  };




  return (
    <div className='slider-container  h-screen w-screen m-auto py-16 px-4 relative   bg-cover duration-500  flex  bg-blue-600  justify-items-center items-center  flex-wrap  '>


      <div
        className=' w-3/4 h-3/4 justify-center items-center flex gap-11 bg-white rounded-2xl  group flex-col absolute right-[10%]  p-4 m-4'>
        <h1 className=' bg-blue-700 rounded-xl font-extrabold text-5xl text-yellow-400 p-1 mt-1'>Deal Mode Activated</h1>
           
         <img className='w-2/4 h-w-1/4 rounded-lg' src={slides[currentIndex].url} alt={slides[currentIndex].alt}></img>
        <div className='flex flex-col  text-center'>
          <h1 className='font-extrabold  text-2xl '>{slides[currentIndex].title}</h1>
          <button className='bg-yellow-400 text-blue-600 rounded-md   hover:text-white w-35 p-1'><Link href='www.google.com'><ShoppingCartIcon /> Shop Now</Link></button>
          {/* <p className='font-light text-[] '>{slides[currentIndex].desc}</p></div> */}
        </div>   
        {/* left arrow */}
        <div onClick={prevSlide} className='hidden group-hover:block absolute top-[50%] -trasnlate-x-0 trnaslate-y-[-50%] left-5 text-2x1 rounded-full p-2 m-4 bg-black/20 text-white cursor-pointerhiden '>
          <BsChevronCompactLeft size={30} />
        </div>
        {/* right arrow */}
        <div onClick={nextSlide} className='hidden group-hover:block absolute top-[50%] -trasnlate-x-0 trnaslate-y-[-50%] right-5 text-2x1 rounded-full p-2 m-4 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight size={30} />
        </div>

      </div>
    </div>
  )
}

export default Slider