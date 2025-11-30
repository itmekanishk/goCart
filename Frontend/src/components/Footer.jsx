import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-black border-t border-zinc-800'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm px-4'>
        <div>
            <img src={assets.logo} className='mb-5 w-32 brightness-400 invert' alt="" />
            <p className='w-full md:w-2/3 text-gray-400 leading-relaxed'>Experience premium quality and exceptional service with our curated collection. We're committed to bringing you the finest products and an unmatched shopping experience.</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5 text-white'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-400'>
                <Link to='/' className='hover:text-emerald-400 cursor-pointer transition-colors'>Home</Link>
                <Link to='/about' className='hover:text-emerald-400 cursor-pointer transition-colors'>About Us</Link>
                <Link to='/collection' className='hover:text-emerald-400 cursor-pointer transition-colors'>Delivery</Link>
                <li className='hover:text-emerald-400 cursor-pointer transition-colors'>Privacy & Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5 text-white'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-400'>
                <a href='tel:+91999999999' className='hover:text-emerald-400 cursor-pointer transition-colors'>+91 999-999-999</a>
                <a href='mailto:goCart@gmail.com' className='hover:text-emerald-400 cursor-pointer transition-colors'>goCart@gmail.com</a>
            </ul>
        </div>
      </div>

      <div className='border-t border-zinc-800'>
        <p className='py-5 text-sm text-center text-gray-500'>Copyright 2025 © goCart.com - All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
