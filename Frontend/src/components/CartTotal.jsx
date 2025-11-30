import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
    const {currency,delivery_fee,getCartAmount}=useContext(ShopContext);
  return (
    <div className='w-full bg-zinc-900 rounded-xl p-6 border border-zinc-800'>
        <div className='text-2xl mb-6'>
          <Title text1={'CART'} text2={'TOTALS'}/>
        </div>
        <div className='flex flex-col gap-4 text-sm'>
          <div className='flex justify-between py-2 text-gray-300'>
            <p>Subtotal</p>
            <p className='font-medium text-white'>{currency} {getCartAmount()}.00</p>
          </div>
          <hr className='border-zinc-700' />
          <div className='flex justify-between py-2 text-gray-300'>
            <p>Shipping Fee</p>
            <p className='font-medium text-white'>{currency}{delivery_fee}.00</p>
          </div>
          <hr className='border-zinc-700' />
          <div className='flex justify-between py-3 text-lg'>
            <b className='text-white'>Total</b>
            <b className='text-emerald-400'>{currency}{getCartAmount()===0? 0:getCartAmount()+delivery_fee}.00</b>
          </div>
        </div>
    </div>
  )
}

export default CartTotal
