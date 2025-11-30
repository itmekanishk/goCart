import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetter from '../components/NewsLetter'

const Contact = () => {
  return (
    <div className='px-4'>
      <div className='text-center text-2xl pt-10 border-t border-zinc-800'>
        <Title text1={'Contact'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px] rounded-2xl border border-zinc-800' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-white'>Our Store</p>
          <p className='text-gray-400 leading-relaxed'>7777 William Street<br />New Delhi, India</p>
          <p className='text-gray-400'>Tel: (+91) 999-999-9999<br />Email: admin@gocart.com</p>
          <p className='font-semibold text-xl text-white mt-6'>Careers at goCart</p>
          <p className='text-gray-400 leading-relaxed'>Join our dynamic team and help shape the future of e-commerce</p>
          <p className='text-gray-400'>Learn more about our team and open positions</p>
          <button className='border-2 border-emerald-500 px-8 py-4 text-sm text-emerald-400 hover:bg-emerald-500 hover:text-black font-medium rounded-lg transition-all duration-300'>
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default Contact
