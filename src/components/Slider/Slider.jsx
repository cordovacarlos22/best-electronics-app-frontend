
import React from 'react'
import { useState, useEffect } from 'react'
import { getsliderslist } from "../../services/slider.service";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useLocation } from 'react-router-dom';
const Slider = () => {

  const [slides, setSlides] = useState(null);

  const showSlides = async () => {
    const response = await getsliderslist();
    if (response.status === 200)
      setSlides(response.data.slider);

  };

  useEffect(() => {
    showSlides();
    console.log(showSlides())
  }, []);


  // const slides = [
  //   {
  //     title: "Laptops and computers",
  //     alt: "Laptops and computers ",
  //     url: 'https://media.wired.com/photos/5faed077f9e76246dde3355d/master/pass/Gear-Surface-Laptop-Go-SOURCE-Microsoft.jpg',
  //     category:"laptops"
  //   },
  //   {
  //     title: "Tvs",
  //     alt: "Tvs ",
  //     url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-tvs-good-housekeeping-1657720829.jpg',
  //     category: "tvs"
  //   },
  //   {
  //     title: "Apple",
  //     alt: "Apple Products ",
  //     url: 'https://images.macrumors.com/t/xrfe0ee20CA_Ce6IyM9VEdjc_6I=/1600x0/article-new/2022/09/apple-beta-lineup-2022.jpg',
  //     category: "apple"
  //   },
  //   {
  //     title: "Videos Games",
  //     alt: "Video games ",
  //     url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-index-gamingconsoles-052-print-preview-1659705142.jpg?crop=1.00xw:0.753xh;0,0.0831xh&resize=1200:*',
  //     category: "games"
  //   }, {
  //     title: "Major Appliances",
  //     alt: "major Appliances ",
  //     url: 'https://pisces.bbystatic.com/image2/BestBuy_US/dam/pm-sm-MMT-644589_DER-535b48fa-dd2f-451a-9b58-3d3dff5806be.jpg;maxHeight=350;maxWidth=1000',
  //     category: "appliances"
  //   },
  // ]  



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


  const location = useLocation();
  console.log(location);



  return (
    <>
      {slides &&

        (
          <div className='slider-container  h-screen w-screen m-auto py-16 px-4 relative   bg-cover duration-500  flex  bg-blue-600  justify-items-center items-center  flex-wrap  '>


            <div
              className=' w-3/4 h-3/4 justify-center items-center align-center flex gap-5 bg-white rounded-2xl  group flex-col absolute right-[10%]  p-1 m-1'>
              <h1 className=' bg-blue-700 rounded-xl font-extrabold text-5xl text-yellow-400 p-1 mt-1'>Deal Mode Activated</h1>

              <img className='w-2/4 h-w-1/4 rounded-lg' src={slides[currentIndex].url} alt={slides[currentIndex].alt}></img>
              <div className='flex flex-col  text-center'>
                <h1 className='font-extrabold  text-2xl '>{slides[currentIndex].title}</h1>
                <button className='bg-yellow-400 text-blue-600 rounded-md   hover:text-white w-35 p-1'><Link as={Link} to="/productslist" ><ShoppingCartIcon /> Shop Now</Link></button>
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



    </>
  )
}

export default Slider