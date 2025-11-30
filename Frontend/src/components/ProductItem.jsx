import React, { useContext } from 'react'
import { ShopContext} from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    const {currency}=useContext(ShopContext)

  return (
    <div className='group'>
      <Link className='text-gray-300 cursor-pointer' to={`/product/${id}`}>
          <div className='overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-emerald-400 transition-all duration-300'>
            <img className='hover:scale-110 transition-transform ease-in-out duration-500' src={image[0]} alt="" />
          </div>
          <p className='pt-4 pb-2 text-sm text-gray-200 group-hover:text-emerald-400 transition-colors'>{name}</p>
          <p className='text-sm font-medium text-emerald-400'>{currency}{price}</p>
      </Link>
    </div>
  )
}

export default ProductItem
