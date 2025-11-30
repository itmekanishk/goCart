import React from 'react'

const Model = () => {
  // Note: Replace 'YOUR_HERO_IMAGE_URL' with your actual hero image URL
  const heroImageUrl = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80';
  
  return (
    <div className='flex flex-col sm:flex-row border border-zinc-800 rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-black'>
      {/*model left*/}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-0 px-8'>
          <div className='text-gray-300'>
            <div className='flex items-center gap-2 mb-4'>
              <p className='w-12 md:w-16 h-[2px] bg-gradient-to-r from-emerald-400 to-transparent'></p>
              <p className='font-medium text-sm md:text-base text-emerald-400 tracking-wider'>BEST SELLER</p>
            </div>
            <h1 className='playfair-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-white mb-6'>
              Latest Arrival
            </h1>
            <div className='flex items-center gap-3 group cursor-pointer'>
              <p className='font-semibold text-base md:text-lg text-white group-hover:text-emerald-400 transition-colors'>Shop Now</p>
              <p className='w-12 md:w-16 h-[2px] bg-white group-hover:bg-emerald-400 transition-all group-hover:w-20'></p>
            </div>
          </div>
      </div>

      {/*model right*/}
      <div className='w-full sm:w-1/2 bg-zinc-800'>
        <img className='w-full h-full object-cover' src={heroImageUrl} alt="Hero" />
      </div>
    </div>
  )
}

export default Model


