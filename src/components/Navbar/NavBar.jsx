import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import ShoppingCart from '.././ShoppinCart/ShoppinCart'

import { UserContext } from '../../context/userContext';
import { accountInfo } from '../../services/user.service';
const NavBar = () => {

 const [userLogin,setUserLogin] = useState(true);


  //? obj with path links and list name
   let Links = [
    {name:"HOME",link:"/"},
    { name: "PRODUCTS", link: "/productslist", },
    // { name: "REGISTER", link: "/UserRegister" },
    
    

  ]        
  const { token, deleteSession } = useContext(UserContext)

  
  const [nombre, setNombre] = useState("..")

  const loadAccountInfo = async (token) => {
     
    const user = await accountInfo(token);
    console.log("user", user)
    if (user.status === 200) {
      
      setNombre(user.data.name);
      
      
    }
  }
  

  useEffect(() => {
    console.log("token nav bar ",token)
    if (token != null)
      loadAccountInfo(token)
  }, [token])

  let [open,setOpen] = useState(false);
   
  return (
 
   
    <div className='  w-full z-40'> 
      <nav className='md:flex bg-blue-700  py-6 items-center justify-around p-5 flex-wrap'>
        <div  className='logo-container font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-white gap-2 ml-0.5 text-2xl md:items-center m-2  flex-1'>
          <Link  as={Link} to={'/'} alt='logo'>
            <span className='text-3x1 text-[#FFE000]'><ion-icon name="pricetags-outline"></ion-icon> </span>
            <h1 className='flex flex-col  text-2xl'>Best Deals <hr /> <span className='text-sm text-[#FFE000]'>Electronics</span></h1>
          </Link>
          <br/>
         
        </div>
        <div onClick={() => setOpen(!open)} className=' text-white  cursor-pointer  items-center flex  pl-5 flex-1 w-full'>
          <ion-icon className='w-28' name={open ? 'close' : 'menu'}></ion-icon><span className='items-center'>Menu</span>
        </div>
        
        <div onChange={() => setUserLogin(false)} className='search-container items-center flex align-middle drop-shadow-md  m-2  justify-center flex-1'>
          <input className='w-80 h-11 rounded-l-lg p-4 text-xl flex-1' type="search" name='searchbtn' placeholder={`Hi, ${nombre} how can we help? `} ></input>
          <button ><span id="searchIcon" className='text-2xl  py-2 bg-white  rounded-r-lg '><ion-icon name="search-outline"></ion-icon></span></button>
        </div>

        <div className={` rounded-lg md:flex  text-center align-middle w-12  m-2 cursor-pointer flex-1`} >
         <Link as={Link} to="/cart">
            <ShoppingCart ></ShoppingCart>
            <span className='m-2 text-white underline hover:underline-offset-4  text-2xl'>Cart</span>
         </Link>
        </div> 
        <div className='menu-container md:flex  items-center ml-5 g'>
          <ul onClick={() => setOpen(!open)} className='menu-ul  md:flex-row  md:flex text-xl  z-40 absolute md:static bg-blue-700 md:pb-0 pb-12 md:z-auto  left-0 w-full md:pl0- pl-9  duration-500 ease-in'>
            {
              Links && Links.map(link => (
                <li key={link.name} className={`md:ml-8 text-teal-50 md:my-0 my-7 ${open ? 'show' : 'hidden'} `}>
                  <Link className='hover:text-[#FFE000] transiton ease-in duration-300 ' as={Link} to={link.link}> {link.name}</Link>
                </li>
              ))
            
            }
            <li className={`md:ml-8 text-teal-50 md:my-0 my-7 ${open ? 'show' : 'hidden'}`} onClick={() => deleteSession()} ><Link className='hover:text-[#FFE000] transiton ease-in duration-300'><ion-icon name="log-out-outline"></ion-icon>LOG OUT</Link></li>
          </ul>
        </div>
         
          
       </nav>
    </div>
  


  )
}

export default NavBar