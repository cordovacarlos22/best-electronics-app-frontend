
import React from 'react'
import { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';


const Slider = (props) => {

  const slides = [
    {
      title: "Laptops and computers",
      desc: "lorem ",
      url: 'https://media.wired.com/photos/5faed077f9e76246dde3355d/master/pass/Gear-Surface-Laptop-Go-SOURCE-Microsoft.jpg'
    },
    {
      title: "Tvs",
      desc: "lorem ",
      url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-tvs-good-housekeeping-1657720829.jpg'
    },
    {
      title: "Apple",
      desc: "lorem ",
      url: 'https://images.macrumors.com/t/xrfe0ee20CA_Ce6IyM9VEdjc_6I=/1600x0/article-new/2022/09/apple-beta-lineup-2022.jpg'
    },
    {
      title: "Videos Games",
      desc: "lorem ",
      url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-index-gamingconsoles-052-print-preview-1659705142.jpg?crop=1.00xw:0.753xh;0,0.0831xh&resize=1200:*'
    }, {
      title: "Major Appliances",
      desc: "lorem ",
      url: 'https://pisces.bbystatic.com/image2/BestBuy_US/dam/pm-sm-MMT-644589_DER-535b48fa-dd2f-451a-9b58-3d3dff5806be.jpg;maxHeight=350;maxWidth=1000'
    },
  ]

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
        <h1 className=' bg-blue-700 rounded-xl font-extrabold text-[50px] text-yellow-400 p-2'>Deal Mode Activated</h1>

        <img className='w-2/4 h-w-2/4 rounded-lg' src={slides[currentIndex].url} alt='#'></img>

        <div className='flex flex-col  text-center'>
          <h1 className='font-extrabold font-xl text-2xl '>{slides[currentIndex].title}</h1>
          <button className='bg-yellow-400 text-blue-600 rounded-md   '>Shop Now</button>
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
