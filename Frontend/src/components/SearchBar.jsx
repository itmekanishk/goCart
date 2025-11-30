import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import {Search,X} from 'lucide-react'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
    const{search,setSearch,showSearch,setShowSearch}=useContext(ShopContext)
    const [visible,setVisible]= useState(false)

    const location=useLocation();
    useEffect(()=>{
        if(location.pathname.includes('collection')){
            setVisible(true);
        }else{
            setVisible(false);
        }
    },[location])
  return showSearch && visible ? (
    <div className='border-t border-b border-zinc-800 bg-zinc-950 text-center py-8'>
        <div className='inline-flex items-center justify-center border border-zinc-700 px-5 py-3 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 bg-zinc-900 focus-within:border-emerald-400 transition-colors'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-transparent text-sm text-gray-200 placeholder-gray-500' type="text" placeholder='Search for products...' />
            <Search className='w-5 text-emerald-400'/>
        </div>
        <X onClick={()=>setShowSearch(false)} className='inline w-4 cursor-pointer brightness-100 invert opacity-70 hover:opacity-100 transition-opacity'  alt="" />
    </div>
  ):null
}

export default SearchBar
