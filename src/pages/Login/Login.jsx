import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { login } from '../../services/auth.service';
import { UserContext } from '../../context/userContext';

const Login = () => {

  const { token, setupSession } = useContext(UserContext)

  let [username, setUsernarme] = useState("")
  let [password, setPassword] = useState("")


  useEffect(() => {
    console.log("token", token);
  }, [token]);

  //!! handles login form 
  const onSubmitLogin = async (event) => {
    event.preventDefault();
    console.log(username, password);
    const response = await login(username, password);
    console.log("service responsed", response);
    if (response.status == 200) {
      setupSession(response.data.result)
      console.log("TOKEN", token)
      //setToken(response.result);
      //redirect("home/")
    }
    //token -> null
  }
  useEffect(() => {
    console.log("token", token);
  }, [token])

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
          <form onSubmit={onSubmitLogin} className='form flex flex-col gap-2 w-3/4 h-2/4 justify-center p-2'>


            <input
              value={username}
              id="username"
              name="username"
              type="text"
              className='border-2'
              placeholder="username"
              onChange={({ target }) => setUsernarme(target.value)}
            />


            <input
              value={password}
              id="password"
              name='password'
              type='password'
              className='border-2'
              placeholder="password"
              onChange={({ target }) => setPassword(target.value)}
            />


            <button className='bg-blue-600 mb-2 text-white text-xl text-extrabold'>Sign In</button>
          </form>
          <Link><p className='text-blue-800 hover:underline'>Forgot your password?</p></Link>
          <p className='p-2  flex items-center justify-center w-full'>By continuing you agree to our Terms and Conditions, our Privacy Policy, and the Best Deals  </p>
          <Link as={Link} to="/terms"><span className='text-blue-600 hover:underline'>Terms.</span></Link>
          <hr className='w-full'></hr>
          <h2 className='p-2'>Don't have an account? <Link as={Link} to="/UserRegister"><span className='text-blue-600 hover:underline'>Create an account</span></Link></h2>
        </div>

      </div>
      <div className='w-screen h-[100px] bg-white justify-center items-center flex p-2'>
        <p >
          Prices and offers are subject to change. © 2023 Best Deals. All rights reserved. Best Deals, the Best Deals logo, the Tag Design  are trademarks of Best Deals.
        </p>
      </div>
    </div>
  );


}

export default Login