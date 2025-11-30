import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Undo2,Phone } from 'lucide-react';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-6 text-center py-20 text-xs sm:text-sm md:text-base px-4'>
        <div className='group hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <div className='bg-zinc-900 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-5 border border-zinc-800 group-hover:border-emerald-400 transition-colors'>
              <Undo2 className='w-10 brightness-100 bg-black invert' />
            </div>
            <p className='font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
        <div className='group hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <div className='bg-zinc-900 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-5 border border-zinc-800 group-hover:border-emerald-400 transition-colors'>
              <img src={assets.quality_icon} className='w-10 brightness-100 invert' alt="" />
            </div>
            <p className='font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors'>7 Days Return Policy</p>
            <p className='text-gray-400'>We provide 7 days free return policy</p>
        </div>
        <div className='group hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <div className='bg-zinc-900 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-5 border border-zinc-800 group-hover:border-emerald-400 transition-colors'>
              <Phone className='w-10 brightness-200 invert' alt="" />
            </div>
            <p className='font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors'>Best Customer Support</p>
            <p className='text-gray-400'>We provide 24/7 customer support</p>
        </div>
    </div>
  )
}

export default OurPolicy
