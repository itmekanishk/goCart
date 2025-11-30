import React, {useContext,useEffect,useState}from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

    const {products} = useContext(ShopContext);

    const [latestProduct,setLatestProduct]=useState([]);
    useEffect(()=>{
        setLatestProduct(products.slice(0,10))
    },[])

  return (
    <div className='my-16 px-4'>
        <div className='text-center py-12'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 mx-auto text-sm sm:text-base md:text-lg text-gray-400 mt-4 leading-relaxed'>
              Explore our newest arrivals featuring the latest trends and timeless classics. Stay ahead of the curve with our carefully curated selection of premium products.
            </p>
        </div>

        {/*rendering products*/}
         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-8'>
            {
              latestProduct.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
              ))
            }
         </div>
    </div>
  )
}

export default LatestCollection
