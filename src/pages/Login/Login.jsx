import React from 'react'
import { Link } from 'react-router-dom';
import FooterCompo from '../../components/FooterCompo/FooterCompo';
// import styled from "styled-components";
// import { useState } from 'react';

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.5),
//       rgba(255, 255, 255, 0.5)
//     ),
//     url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
//       center;
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   width: 40%;
//   padding: 20px;
//   background-color: white;

// `;

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 300;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 20px 10px 0px 0px;
//   padding: 10px;
// `;

// const Agreement = styled.span`
//   font-size: 12px;
//   margin: 20px 0px;
// `;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
// `;
const Login = () => {

 
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
     <div className='flex justify-center h-full w-full'>
       
        
        <div
          className='flex flex-col  w-[400px] h-[650px] justify-center items-center border-2 gap-2 rounded-xl border-blue-400 bg-white m-5 align-middle'
        >
         
          <h1 className='text-3xl text-extrabold text-blue-600 '> Dest Deals Electronic Sign In</h1>
          <form className='form flex flex-col gap-2 w-3/4 h-2/4 justify-center'>


            <input
              className='border-2'
              placeholder="username" />

            <input
              className='border-2'
              placeholder="password" />


            <button className='bg-blue-600 mb-2 text-white text-xl text-extrabold'>Sign In</button>
          </form>
          <Link><p className='text-blue-800 hover:underline'>Forgot your password?</p></Link>
          <p className='p-2  flex items-center justify-center w-full'>By continuing you agree to our Terms and Conditions, our Privacy Policy, and the Best Deals  </p>
          <Link as={Link} to="/terms"><span className='text-blue-600 hover:underline'>Terms.</span></Link>
          <hr className='w-full'></hr>
          <h2 className='p-2'>Don't have an account? <Link as={Link} to="/UserRegister"><span className='text-blue-600 hover:underline'>Create an account</span></Link></h2>
        </div>
        
     </div>
      <div className='w-screen h-[200px] bg-white justify-center items-center flex p-2'>
        <p >
          Prices and offers are subject to change. © 2023 Best Deals. All rights reserved. Best Deals, the Best Deals logo, the Tag Design  are trademarks of Best Deals.
        </p>
      </div>
    </div>
  );


}

export default Login
