import React from 'react'
import styled from "styled-components";
import { useState } from 'react';

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
      className='w-screen h-screen  flex  justify-center items-center bg-gradient-to-tr from-green-300 to-blue-600'
    >
      <div
        className='flex flex-col  w-2/4 h-4/4 justify-center items-center border-2 gap-2 rounded-xl border-yellow-400'
      >
        <h1 className='text-3xl text-extrabold text-blue-600 '>User Login</h1>
        <form className='form flex flex-col gap-2 w-2/4'>
         
         
          <input
            className='border-2'
            placeholder="username" />
          
          <input
            className='border-2'
            placeholder="password" />
         
          
          <button className='bg-yellow-400 mb-2 text-blue-700 text-extrabold'>Login</button>
        </form>
      </div>
    </div>
  );


}

export default Login
