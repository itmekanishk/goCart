import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import { Trash2 } from 'lucide-react';
import CartTotal from '../components/CartTotal'

const Cart = () => {
  const {products,currency,cartItems,updateQuantity,navigate}=useContext(ShopContext);

  const[cartData,setCartData]=useState([]);
  useEffect(()=>{

    if(products.length>0){
      const tempData=[];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item]>0){
          tempData.push({
            _id:items,
            size:item,
            quantity:cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData);
    }
  },[cartItems,products])
  return (
    <div className='border-t border-zinc-800 p-4 sm:p-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'Your'} text2={'Cart'}/>
      </div>
      <div>
        {
          cartData.map((item,index)=>{
            const productData=products.find((product)=>product._id===item._id);
            if (!productData) return null;
            return (
              <div key={index} className='py-6 border-t border-b border-zinc-800 text-gray-300 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 bg-zinc-900 rounded-xl px-4 sm:px-6 my-3 hover:border-emerald-400 transition-colors'>
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20 rounded-lg border border-zinc-700' src={productData.image[0]} alt="" />
                  <div>
                    <p className='text-xs sm:text-lg font-medium text-white'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p className='text-emerald-400 font-medium'>{currency}{productData.price}</p>
                      <p className='px-3 py-1 border border-zinc-700 bg-zinc-800 rounded-md text-sm'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e)=> e.target.value==='' || e.target.value ==='0' ? null :updateQuantity(item._id,item.size,Number(e.target.value))} className='border border-zinc-700 bg-zinc-800 rounded-lg max-w-10 sm:max-w-20 px-2 sm:px-3 py-2 text-white text-center focus:border-emerald-400 outline-none transition-colors' type="number" min={1} defaultValue={item.quantity} />
                <Trash2 onClick={()=>updateQuantity(item._id,item.size,0)} className='w-5 mr-4 sm:w-5 cursor-pointer text-red-400 hover:text-red-500 transition-colors' />
              </div>
            )
          })
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/place-order')} className='bg-emerald-500 hover:bg-emerald-600 border border-emerald-400 text-black text-sm font-medium my-8 px-10 py-3 rounded-lg transition-colors cursor-pointer'>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
