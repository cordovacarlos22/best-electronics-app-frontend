import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
// import { useState } from 'react'
import ShoppingCart from '.././ShoppinCart/ShoppinCart'

const NavBar = () => {

//  const [userLogin,setUserLogin] = useState(true);

//  if (placeholder == ''){
//    setPlaceHolder('Hi, What can we help you find? ') 
//  }
//  else {
//    setPlaceHolder(`Hi, (user.name) What can we help you find?`)

//  }

// const users = [
//   {name:"carlos"}
// ]

  //? obj with path links and list name
  let Links = [
    {name:"HOME",link:"/"},
    { name: "DEALS", link: "/deals" },
    { name: "PRODUCTS", link: "/PRODUCTS" },
    { name: "REGISTER", link: "/UserRegister" },
    { name: "LOGIN", link: "/UserLogin" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT",link: "/contact" }

  ]

  let [open,setOpen] = useState(false);

  return (
 
   
    <div className='  w-full '> 
      <nav className='md:flex bg-blue-700  py-6 items-center justify-around p-5 '>
        <div  className='logo-container font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-white gap-2 ml-0.5 text-2xl md:items-center m-2'>
          <span className='text-3x1 text-[#FFE000]'><ion-icon name="pricetags-outline"></ion-icon> </span>
          <h1 className='flex flex-col  text-2xl'>Best Deals <hr /> <span className='text-sm text-[#FFE000]'>Electronics</span></h1>
          <br/>
          <div onClick={() => setOpen(!open)} className=' text-white  cursor-pointer  '>
            <ion-icon className='w-28' name={open ? 'close' : 'menu'}></ion-icon>
          </div>
        </div>
        
        
        <div className='search-container items-center flex align-middle drop-shadow-md  m-2'>
          <input className='w-80 h-10 rounded-l-lg p-1' type="search" name='searchbtn' placeholder='Hi,What can we help you find?' ></input>
          <button ><span id="searchIcon" className='text-xl py-2  bg-white h-10 rounded-r-lg'><ion-icon name="search-outline"></ion-icon></span></button>
        </div>

        <div className={` rounded-lg md:flex  text-center align-middle w-12  m-2 cursor-pointer`} >
          <ShoppingCart ></ShoppingCart>
          <span className='m-2 text-white underline hover:underline-offset-4  text-2xl'>Cart</span>
        </div> 
        <div className='menu-container md:flex  items-center ml-5 g'>
          <ul className='menu-ul  md:flex-row  md:flex text-xl  absolute md:static bg-blue-700 md:pb-0 pb-12 md:z-auto z[1] left-0 w-full md:pl0- pl-9  duration-500 ease-in'>
            {
              Links && Links.map(link => (
                <li key={link.name} className={`md:ml-8 text-teal-50 md:my-0 my-7 ${open ? 'show' : 'hidden'} `}>
                  <Link className='hover:text-[#FFE000] transiton ease-in duration-300 ' as={Link} to={link.link}>{link.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
         
          
       </nav>
    </div>
  


  )
}

export default NavBar