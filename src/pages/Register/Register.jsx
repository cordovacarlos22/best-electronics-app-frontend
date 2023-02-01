import React from 'react'

const Register = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='border-2 w-90  flex flex-col bg-blue-700'>
        <h1 className='text-2xl'>CREATE AN ACCOUNT</h1>
        <form className='flex flex-col'>
          
          <label><input placeholder="name"></input></label>
          <input  placeholder="last name" />
          <input  placeholder="username" />
          <input  placeholder="email" />
          <input   placeholder="password" />
          <input   placeholder="confirm password" />
          <p>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </p>
          <button>CREATE</button>
        </form>
      </div>
    </div>
  )
}

export default Register
