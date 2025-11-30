import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const[method,setMethod]=useState('cod');
  const{navigate}=useContext(ShopContext)
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-zinc-800 px-4'>
      
      {/* left side*/}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'Delivery'} text2={'Information'}/>
        </div>
        <div className='flex gap-3'>
         <input className='border border-zinc-700 bg-zinc-900 rounded-lg py-2.5 px-4 w-full text-white placeholder-gray-500 focus:border-emerald-400 outline-none transition-colors' placeholder='First Name' type="text" required />
         <input className='border border-zinc-700 bg-zinc-900 rounded-lg py-2.5 px-4 w-full text-white placeholder-gray-500 focus:border-emerald-400 outline-none transition-colors' placeholder='Last Name' type="text" required />
        </div>
        <input className='border border-zinc-700 bg-zinc-900 rounded-lg py-2.5 px-4 w-full text-white placeholder-gray-500 focus:border-emerald-400 outline-none transition-colors' placeholder='Email' type="email" required />
        <input className='border border-zinc-700 bg-zinc-900 rounded-lg py-2.5 px-4 w-full text-white placeholder-gray-500 focus:border-emerald-400 outline-none transition-colors' placeholder='Street' type="text" required />
        <div className='flex gap-3'>
         <input className='border border-zinc-700 bg-zinc-900 rounded-lg py-2.5 px-4 w-full text-white placeholder-gray-500 focus:border-emerald-400 outline-none transition-colors' placeholder='City' type="text" required/>
         <input className='border border-zinc-700 bg-zinc-900 rounded-lg py-2.5 px-4 w-full text-white placeholder-gray-500 focus:border-emerald-400 outline-none transition-colors' placeholder='State' type="text" required />
        </div>
        <div className='flex gap-3'>
         <input className='border border-zinc-700 bg-zinc-900 rounded-lg py-2.5 px-4 w-full text-white placeholder-gray-500 focus:border-emerald-400 outline-none transition-colors' placeholder='Zip Code' type="number" required />
         <input className='border border-zinc-700 bg-zinc-900 rounded-lg py-2.5 px-4 w-full text-white placeholder-gray-500 focus:border-emerald-400 outline-none transition-colors' placeholder='Country' type="text" required />
        </div>
        <input className='border border-zinc-700 bg-zinc-900 rounded-lg py-2.5 px-4 w-full text-white placeholder-gray-500 focus:border-emerald-400 outline-none transition-colors' placeholder='Phone' type="number" required/>
      </div>

      {/* Right side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>

        <div className='mt-12'>
          <Title text1={'Payment'} text2={'Method'}/>
          <div className='flex gap-3 flex-col lg:flex-row'>
            
            {/* Stripe */}
            <div onClick={()=>setMethod('stripe')} className={`flex items-center gap-3 border-2 ${method==='stripe'? 'border-emerald-400 bg-emerald-950' : 'border-zinc-800 bg-zinc-900'} rounded-xl p-4 px-5 cursor-pointer transition-all hover:border-emerald-400`}>
              <p className={`min-w-3.5 h-3.5 border-2 rounded-full ${method==='stripe'? 'bg-emerald-400 border-emerald-400' :'border-zinc-600'}`}></p>
              <img className='h-5 mx-4 brightness-500 invert' src={assets.stripe_logo} alt="" />
            </div>

            {/* Razorpay */}
            <div onClick={()=>setMethod('pay')} className={`flex items-center gap-3 border-2 ${method==='pay'? 'border-emerald-400 bg-emerald-950' : 'border-zinc-800 bg-zinc-900'} rounded-xl p-4 px-5 cursor-pointer transition-all hover:border-emerald-400`}>
              <p className={`min-w-3.5 h-3.5 border-2 rounded-full ${method==='pay'? 'bg-emerald-400 border-emerald-400' :'border-zinc-600'}`}></p>
              <img className='h-5 mx-4 brightness-500 invert' src={assets.razorpay_logo} alt="" />
            </div>

            {/* COD */}
            <div onClick={()=>setMethod('cod')} className={`flex items-center gap-3 border-2 ${method==='cod'? 'border-emerald-400 bg-emerald-950' : 'border-zinc-800 bg-zinc-900'} rounded-xl p-4 px-5 cursor-pointer transition-all hover:border-emerald-400`}>
              <p className={`min-w-3.5 h-3.5 border-2 rounded-full ${method==='cod'? 'bg-emerald-400 border-emerald-400' :'border-zinc-600'}`}></p>
              <p className='text-gray-300 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/orders')} className='bg-emerald-500 hover:bg-emerald-600 text-black font-medium px-16 py-3 text-sm rounded-lg transition-colors cursor-pointer border bg-emerald-400 border-emerald-400'>PLACE ORDER</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PlaceOrder
