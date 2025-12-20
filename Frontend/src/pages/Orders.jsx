import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { products } from '../assets/frontend_assets/assets'
import axios from 'axios'

const Orders = () => {
  const {currency,backEndUrl,token}=useContext(ShopContext);

  const[orderData,setOrderData]=useState([]);

  const loadOrderData = async ()=>{
    try{
      if(!token){
        return null;
      }
      const response = await axios.post(`${backEndUrl}/api/order/userorders`,{},{headers:{token}})
      //console.log(response.data)
      if(response.data.success){
        let allOrdersItem=[]
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status']=order.status
            item['payment']=order.payment
            item['paymentMethod']=order.paymentMethod
            item['date']=order.date

            allOrdersItem.push(item)
          })
        })
        //console.log(allOrdersItem)
        setOrderData(allOrdersItem.reverse())
      }

    }catch(error){

    }
  }

  useEffect(()=>{
    loadOrderData();

  },[token])


  return (
    <div className='border-t border-zinc-800 pt-16 px-4'>
      <div className='text-2xl mb-8'>
        <Title text1={'MY'} text2={'ORDERS'}/>
      </div>
      <div>
        {
          orderData.map((item,index)=>(
            <div className='py-6 border border-zinc-800 bg-zinc-900 rounded-xl text-gray-300 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4 hover:border-emerald-400 transition-colors' key={index}>
              <div className='flex items-start gap-6 text-sm px-4 sm:px-6'>
                <img className='w-16 sm:w-20 rounded-lg border border-zinc-700' src={item.image[0]} alt="" />
                <div>
                  <p className='sm:text-base font-medium text-white'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-3 text-base text-gray-400'>
                    <p className='text-lg text-emerald-400 font-medium'>{currency}{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size:{item.size}</p>
                  </div>
                  <p className='mt-3'>Date: <span className='text-gray-500'>{new Date(item.date).toDateString()}</span></p>
                  <p className='mt-3'>Payment: <span className='text-gray-500'>{item.paymentMethod}</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between px-4 sm:px-6 items-center'>
                  <div className='flex items-center gap-2'>
                     <p className='min-w-2 h-2 rounded-full bg-emerald-500'></p>
                     <p className='text-sm md:text-base text-gray-300'>{item.status}</p>
                  </div>
                  <button onClick={loadOrderData} className='border border-zinc-700 bg-zinc-800 hover:bg-emerald-500 hover:border-emerald-500 hover:text-black px-6 py-2 text-sm font-medium rounded-lg transition-all'>Track Order</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
