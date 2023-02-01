import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css'
import { Instagram, Twitter } from '@mui/icons-material';
import PinDropIcon from '@mui/icons-material/PinDrop';
import CallIcon from '@mui/icons-material/Call';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
const Footer = () => {

  const usefulLinks = [
    {
      url: "/",
      title: "Home",
      alt: "home"
    },

    {
      url: "www.google.com",
      title: "Check order Status",
      alt: "Check order Status"
    },
    {
      url: "www.google.com",
      title: "Shipping,Delivery & Pickup",
      alt: "Shipping,del,p/u"
    },
    {
      url: "www.google.com",
      title: "Price Match",
      alt: "Price Match"
    },
    {
      url: "www.google.com",
      title: "Register",
      alt: "Register"
    },
    {
      url: "www.google.com",
      title: "My Account",
      alt: "My Account"
    },

    {
      url: "www.google.com",
      title: "Wishlist",
      alt: "Wishlist"
    },
    {
      url: "www.google.com",
      title: "Terms",
      alt: "Terms"
    },
  ]
  return (


    <div className='main-container w-screen h-80 bg-blue-600  flex p-5 flex-col  flex-wrap  justify-center'>

      <div className='flex flex-wrap w-full h-full justify-center items-center text-white '>
        <div className='left-container flex-1'>
          <div className='logo-container font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-white gap-2  text-2xl md:items-center '>
            <a className='logo-container font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-white gap-2  text-2xl md:items-center' href='/' alt='logo'>
              <span className='text-3x1 text-[#FFE000]'><ion-icon name="pricetags-outline"></ion-icon> </span>
              <h1 className='flex flex-col  text-2xl'>Best Deals <hr /> <span className='text-sm text-[#FFE000]'>Electronics</span></h1>
            </a>
            <br />
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ex facilis nihil fuga non sit harum odio optio consequatur facere.</p>
          <div key="social-media-logos" className='social-container flex flex-wrap text-white gap-5 text-5xl cursor-pointer  p-4  '>
            < FacebookIcon />
            <Instagram />
            <Twitter />
          </div>

        </div>
        <div className='center-container  flex-1 justify-center'>
          <h1 className='text-4xl decoration-1'>Useful Links</h1>
          <ul className='p-2 flex flex-col justify-evenly'>
            {usefulLinks && usefulLinks.map(links => (
              <a href={links.url}><li>{links.title}</li></a>
            ))}
          </ul>
        </div>
        <div className='right-container  flex-1 flex flex-col gap-3 p-2'>
          <h1 className='text-4xl'>Contact</h1>
          <p><PinDropIcon />0001 Resource , Rialto CA 00001</p>
          <p><CallIcon/> +1 0003 0001</p>
          <p><AttachEmailIcon/>contact@bestdeals@dev.com</p>
        </div>




      </div>
    </div>


  )
}

export default Footer
