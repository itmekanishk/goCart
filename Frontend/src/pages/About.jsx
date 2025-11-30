import React from 'react'
import Title from '../components/Title'
import NewsLetter from '../components/NewsLetter'
import { assets } from '../assets/frontend_assets/assets'
const About = () => {
  return (
    <div className='px-4'>
      <div className='text-2xl text-center pt-8 border-t border-zinc-800'>
        <Title text1={'About'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] rounded-2xl border border-zinc-800' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-400'>
          <p className='leading-relaxed'>We are passionate about delivering excellence in every product we offer. Our journey began with a simple mission: to provide customers with quality products that enhance their lifestyle while ensuring an exceptional shopping experience.</p>
          <p className='leading-relaxed'>With years of industry expertise and a commitment to innovation, we've built a reputation for reliability, quality, and customer satisfaction. Every item in our collection is carefully curated to meet the highest standards.</p>
          <b className='text-white text-xl'>Our Mission</b>
          <p className='leading-relaxed'>To revolutionize online shopping by combining cutting-edge technology with personalized service, making quality products accessible to everyone while maintaining sustainable and ethical business practices.</p>
        </div>
      </div>
      <div className='text-2xl py-4'>
        <Title text1={'Why'} text2={'Choose Us'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 gap-4'>
        <div className='border border-zinc-800 bg-zinc-900 rounded-xl px-10 md:px-16 py-12 flex flex-col gap-5 hover:border-emerald-400 transition-all duration-300'>
          <b className='text-white text-lg'>Quality Assurance</b>
          <p className='text-gray-400 leading-relaxed'>Every product undergoes rigorous quality checks to ensure you receive only the best. We partner with trusted manufacturers and conduct thorough inspections to guarantee authenticity and durability.</p>
        </div>
        <div className='border border-zinc-800 bg-zinc-900 rounded-xl px-10 md:px-16 py-12 flex flex-col gap-5 hover:border-emerald-400 transition-all duration-300'>
          <b className='text-white text-lg'>Convenience</b>
          <p className='text-gray-400 leading-relaxed'>Shop anytime, anywhere with our user-friendly platform. Enjoy seamless browsing, secure payments, and fast delivery right to your doorstep. We make online shopping effortless and enjoyable.</p>
        </div>
        <div className='border border-zinc-800 bg-zinc-900 rounded-xl px-10 md:px-16 py-12 flex flex-col gap-5 hover:border-emerald-400 transition-all duration-300'>
          <b className='text-white text-lg'>Exceptional Customer Service</b>
          <p className='text-gray-400 leading-relaxed'>Our dedicated support team is available 24/7 to assist you. From product inquiries to post-purchase support, we're here to ensure your complete satisfaction every step of the way.</p>
        </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default About
