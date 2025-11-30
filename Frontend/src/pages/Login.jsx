import React, { useState } from 'react'

const Login = () => {
  const[currentState,setCurrentState]=useState('Sign Up');
  const onSubmitHandler = async(event)=>{
    event.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-300'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='playfair-display text-3xl text-white'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gradient-to-r from-emerald-400 to-transparent' />
      </div>
      {currentState ==='Login' ? '': <input placeholder='Name' className='w-full px-4 py-3 border border-zinc-700 bg-zinc-900 rounded-lg text-white placeholder-gray-500 focus:border-emerald-400 outline-none transition-colors' type="text"  required/> }
      <input placeholder='Email' className='w-full px-4 py-3 border border-zinc-700 bg-zinc-900 rounded-lg text-white placeholder-gray-500 focus:border-emerald-400 outline-none transition-colors' type="email" required />
      <input placeholder='Password' className='w-full px-4 py-3 border border-zinc-700 bg-zinc-900 rounded-lg text-white placeholder-gray-500 focus:border-emerald-400 outline-none transition-colors' type="password" required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer text-gray-400 hover:text-emerald-400 transition-colors'>Forgot your password?</p>
        {
          currentState==='Login'
          ? <p onClick={()=> setCurrentState('Sign Up')} className='cursor-pointer text-emerald-400 hover:text-emerald-300 transition-colors'>Create Account</p>
          : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer text-emerald-400 hover:text-emerald-300 transition-colors'>Login Here</p>
        }
      </div>
      <button className='bg-emerald-500 hover:bg-emerald-600 text-black border border-emerald-400 font-medium px-10 py-3 mt-4 rounded-lg transition-colors w-full'>{currentState==='Login'? 'Sign In': 'Sign Up'}</button>
    </form>
  )
}

export default Login
