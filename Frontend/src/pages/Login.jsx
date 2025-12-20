import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const[currentState,setCurrentState]=useState('Sign Up');
  const {token,setToken,navigate,backEndUrl}=useContext(ShopContext);
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('')
  const onSubmitHandler = async(event)=>{
    event.preventDefault();
    try{
      if(currentState==='Sign Up'){
        const response = await axios.post(`${backEndUrl}/api/user/register`,{name,email,password})
        //console.log(response.data)
        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token',response.data.token)
          toast.success("Account created Created")
        }else{
          toast.error(response.data.message)
        }

      }else{
        const response=await axios.post(`${backEndUrl}/api/user/login`,{email,password})
        //console.log(response.data)
        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token',response.data.token)
          toast.success("User Logged In")

        }else{
          toast.error(response.data.message)
        }
      }

    }catch(error){
      console.log(error);
      toast.error(error.message)

    }
  }

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  })


  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-300'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='playfair-display text-3xl text-white'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gradient-to-r from-emerald-400 to-transparent' />
      </div>
      {currentState ==='Login' ? '': <input onChange={(e)=>setName(e.target.value)} value={name} placeholder='Name' className='w-full px-4 py-3 border border-zinc-700 bg-zinc-900 rounded-lg text-white placeholder-gray-500 focus:border-emerald-400 outline-none transition-colors' type="text"  required/> }
      <input onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Email' className='w-full px-4 py-3 border border-zinc-700 bg-zinc-900 rounded-lg text-white placeholder-gray-500 focus:border-emerald-400 outline-none transition-colors' type="email" required />
      <input onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Password' className='w-full px-4 py-3 border border-zinc-700 bg-zinc-900 rounded-lg text-white placeholder-gray-500 focus:border-emerald-400 outline-none transition-colors' type="password" required />
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
