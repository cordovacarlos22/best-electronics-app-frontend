import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {


  return (
    <div
      className='w-screen  flex flex-col  justify-center items-center bg-[#EFF2F4] '
    >
      <nav className='bg-blue-700 w-screen   flex justify-between items-center p-2'>
        <div className='logo-container font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-white gap-1  text-2xl md:items-center '>
          <Link className='logo-container font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-white gap-2  text-2xl md:items-center' as={Link} to='/' alt='logo'>
            <span className='text-2x1 text-[#FFE000]'><ion-icon name="pricetags-outline"></ion-icon> </span>
            <h1 className='flex flex-col  text-2xl'>Best Deals <hr /> <span className='text-sm text-[#FFE000]'>Electronics</span></h1>
          </Link>
          <br />
        </div>
        <div className='  flex items-end'>
          <Link as={Link} to='/'><h2 className=' text-white '>Return to previous page</h2></Link>
        </div>
      </nav>
      <div className='flex justify-center  w-full'>


        <div
          className='flex flex-col  w-[400px] h-[750px] justify-center items-center border-2 gap-2 rounded-xl border-blue-400 bg-white m-5 align-middle'
        >

          <h1 className='text-2xl text-extrabold text-blue-600   items-center p-2'> Dest Deals Electronic Register</h1>
          <form className='form flex flex-col gap-2 w-3/4 h-2/4 justify-center'>

            <label for >Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className='border-2'
              placeholder="name"

            />
            <label for="lastname"></label>
            <input
              id="lastname"
              name="lastname"
              type="text"
              className='border-2'
              placeholder="last name" />
              <label for="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              className='border-2'
              placeholder="username" />
             <label for="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className='border-2'
              placeholder="email" />
              <label for="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className='border-2'
              placeholder="password" />

            <p>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b className='text-red-600'>PRIVACY POLICY</b>
            </p>
            <button className='bg-yellow-400 mb-2 text-blue-700 text-extrabold'>CREATE</button>
          </form>
          <Link><p className='text-blue-800 hover:underline'>Forgot your password?</p></Link>
          <p className='p-2  flex items-center justify-center w-full'>By continuing you agree to our Terms and Conditions, our Privacy Policy, and the Best Deals  </p>
          <Link as={Link} to="/terms"><span className='text-blue-600 hover:underline'>Terms.</span></Link>
          <hr className='w-full'></hr>
          <h2 className='p-2'>Don't have an account? <Link as={Link} to="/UserRegister"><span className='text-blue-600 hover:underline'>Create an account</span></Link></h2>
        </div>

      </div>
      <div className='w-screen  bg-white justify-center items-center flex p-2'>
        <p >
          Prices and offers are subject to change. © 2023 Best Deals. All rights reserved. Best Deals, the Best Deals logo, the Tag Design  are trademarks of Best Deals.
        </p>
      </div>
    </div>
  );


}

export default Register