import React, {useContext,useEffect,useState}from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
    const{products}=useContext(ShopContext);

    const [bestSeller,setBestSeller]=useState([]);

    useEffect(()=>{
        const bestProduct=products.filter((item)=>(item.bestSeller));
        setBestSeller(bestProduct.slice(0,5));
    },[products])
  return (
    <div className='my-16 px-4'>
      <div className='text-center py-12'>
        <Title text1={'BEST'} text2={'SELLERS'}/>
        <p className='w-3/4 mx-auto text-sm sm:text-base md:text-lg text-gray-400 mt-4 leading-relaxed'>
            Discover our most loved products, handpicked by customers worldwide. Each item represents quality, style, and exceptional value that keeps our community coming back for more.
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-8'>
        {
            bestSeller.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))
        }
      </div>
    </div>
  )
}

export default BestSeller
