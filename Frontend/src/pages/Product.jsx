import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProduct from '../components/RelatedProduct';
import { toast } from 'react-toastify';

const Product = () => {
  const{productId}=useParams();
  const {products,currency,addToCart}=useContext(ShopContext);
  const [productData,setProductData]=useState(false);
  const [image,setImage]=useState('')
  const [size,setSize]=useState('')

  const fetchProductData=async()=>{
    products.map((item)=>{
      if(item._id===productId){
        setProductData(item);
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData();
  },[productId],products)
  

  return productData ? (
    <div className='border-t-2 border-zinc-800 transition-opacity ease-in duration-500 opacity-100 px-4'>
      
      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row pt-10'>
        
        {/* product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full gap-2'>
            {
              productData.image.map((item,index)=>(
                <img 
                  onClick={()=>setImage(item)} 
                  src={item} 
                  key={index} 
                  className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded-lg border-2 ${image===item? 'border-emerald-400':'border-zinc-800'} hover:border-emerald-400 transition-colors`} 
                  alt="" 
                />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto rounded-2xl border border-zinc-800' src={image} alt="" />
          </div>
        </div>

        {/* product details */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2 text-white'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className='pl-2 text-gray-400'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium text-emerald-400'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-400 md:w-4/5 leading-relaxed'>{productData.description}</p>

          {/* sizes */}
          <div className='flex flex-col gap-4 my-8'>
            <p className='text-white font-medium'>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <button 
                  onClick={()=>setSize(item)} 
                  className={`border-2 py-3 px-6 rounded-lg font-medium transition-all ${item===size? 'border-emerald-400 bg-emerald-950 text-emerald-400' : 'border-zinc-700 bg-zinc-900 text-gray-400 hover:border-emerald-400'}`} 
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button onClick={()=>addToCart(productData._id,size)} className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium px-10 py-3 text-sm rounded-lg transition-colors active:scale-95 border border-white hover:border-emerald-600"
>
            Add to Cart
          </button>

          <hr className='mt-8 sm:w-4/5 border-zinc-800' />

          <div className='text-sm text-gray-400 mt-5 flex flex-col gap-2'>
            <p>✓ 100% Original Product</p>
            <p>✓ Cash On Delivery Available</p>
            <p>✓ Easy Exchange and Return Policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* description */}
      <div className='mt-20'>
        <div className='flex border-b border-zinc-800'>
          <b className='border border-zinc-800 bg-zinc-900 px-5 py-3 text-sm text-white rounded-t-lg'>Description</b>
          <p className='border border-transparent px-5 py-3 text-sm text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border border-zinc-800 bg-zinc-900 rounded-b-lg px-6 py-6 text-sm text-gray-400 leading-relaxed'>
          <p>Experience premium quality with our carefully crafted products. Each item undergoes rigorous quality checks to ensure you receive nothing but the best. Our commitment to excellence is reflected in every detail, from material selection to final production.</p>
          <p>We take pride in our customer-centric approach, offering hassle-free returns and exchanges. Your satisfaction is our priority, and we stand behind every product we sell with confidence. Shop with peace of mind knowing you're getting exceptional value and quality.</p>
        </div>
      </div>

      {/* related product */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ): <div className='opacity-0'></div>
}

export default Product
