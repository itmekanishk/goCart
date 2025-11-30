import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { products } from '../assets/frontend_assets/assets'

const Orders = () => {
  const {currency,product}=useContext(ShopContext)
  return (
    <div className='border-t border-zinc-800 pt-16 px-4'>
      <div className='text-2xl mb-8'>
        <Title text1={'MY'} text2={'ORDERS'}/>
      </div>
      <div>
        {
          products.slice(1,4).map((item,index)=>(
            <div className='py-6 border border-zinc-800 bg-zinc-900 rounded-xl text-gray-300 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4 hover:border-emerald-400 transition-colors' key={index}>
              <div className='flex items-start gap-6 text-sm px-4 sm:px-6'>
                <img className='w-16 sm:w-20 rounded-lg border border-zinc-700' src={item.image[0]} alt="" />
                <div>
                  <p className='sm:text-base font-medium text-white'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-3 text-base text-gray-400'>
                    <p className='text-lg text-emerald-400 font-medium'>{currency}{item.price}</p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p className='mt-3'>Date: <span className='text-gray-500'>25 Dec, 2025</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between px-4 sm:px-6 items-center'>
                  <div className='flex items-center gap-2'>
                     <p className='min-w-2 h-2 rounded-full bg-emerald-500'></p>
                     <p className='text-sm md:text-base text-gray-300'>Ready to ship</p>
                  </div>
                  <button className='border border-zinc-700 bg-zinc-800 hover:bg-emerald-500 hover:border-emerald-500 hover:text-black px-6 py-2 text-sm font-medium rounded-lg transition-all'>Track Order</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
