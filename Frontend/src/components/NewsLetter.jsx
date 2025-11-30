import React from 'react'

const NewsLetter = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className='text-center py-16 bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 my-16 px-4'>
      <p className='text-2xl font-medium text-white mb-3'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3 mb-8'>Join our community and be the first to know about exclusive deals and new arrivals</p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-zinc-700 rounded-full pl-6 bg-zinc-900 focus-within:border-emerald-400 transition-colors'>
        <input className='w-full sm:flex-1 outline-none bg-transparent text-gray-200 placeholder-gray-500' type="email" placeholder='Enter your email' required />
        <button type='submit' className='bg-emerald-500 hover:bg-emerald-600 text-black text-xs px-8 py-4 rounded-full font-medium transition-colors'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetter


