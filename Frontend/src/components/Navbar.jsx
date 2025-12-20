import React,{useContext, useState} from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { NavLink,Link } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu, ChevronDown} from 'lucide-react';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';

const Navbar = () => {
    const[visible,setVisible]=useState(false);
    const {setShowSearch,getCartCount,navigate,token,setToken,setCartItems}=useContext(ShopContext);
    const logout=()=>{
        navigate('/login')
        toast.success('Logged out')
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
        
    }
  return (
    <div className='flex items-center justify-between py-6 font-medium border-b border-zinc-800 bg-black px-4'>
        <Link to='/'><img src={assets.logo} className='w-36 brightness-400  invert' alt="Logo" /></Link>

        <ul className='hidden sm:flex gap-8 text-sm text-gray-300'>
            <NavLink to='/' className='flex flex-col items-center gap-1 hover:text-emerald-400 transition-colors'>
            <p className='tracking-wider'>HOME</p>
            <hr className='w-2/4 border-none h-[2px] bg-emerald-400 hidden' />
            </NavLink>

            <NavLink to='/collection' className='flex flex-col items-center gap-1 hover:text-emerald-400 transition-colors'>
            <p className='tracking-wider'>COLLECTION</p>
            <hr className='w-2/4 border-none h-[2px] bg-emerald-400 hidden' />
            </NavLink>

            <NavLink to='/about' className='flex flex-col items-center gap-1 hover:text-emerald-400 transition-colors'>
            <p className='tracking-wider'>ABOUT</p>
            <hr className='w-2/4 border-none h-[2px] bg-emerald-400 hidden' />
            </NavLink>

            <NavLink to='/contact' className='flex flex-col items-center gap-1 hover:text-emerald-400 transition-colors'>
            <p className='tracking-wider'>CONTACT</p>
            <hr className='w-2/4 border-none h-[2px] bg-emerald-400 hidden' />
            </NavLink>
        </ul>

        <div className="flex items-center gap-6">
           <Search onClick={()=>setShowSearch(true)} className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />

            <div className="group relative">
                <Link onClick={()=> token ? null : navigate('/login') } to='/login'><User className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 cursor-pointer transition-colors" /></Link>
                { /* drop down menue */}
                {token &&
                   <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-10'>
                    <div className='flex flex-col gap-2 w-40 py-4 px-6 bg-zinc-900 text-gray-300 rounded-lg border border-zinc-800 shadow-xl'>
                        <p className='cursor-pointer hover:text-emerald-400 transition-colors'>My Profile</p>
                        <p onClick={()=> navigate('/orders')} className='cursor-pointer hover:text-emerald-400 transition-colors'>Orders</p>
                        <p onClick={logout} className='cursor-pointer hover:text-red-400 transition-colors'>Logout</p>
                   </div>
                </div>
                }
                
            </div>
            <Link to='/cart' className='relative'>
                <ShoppingBag className='w-5 min-w-5 text-gray-400 hover:text-emerald-400 transition-colors'/>
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-emerald-500 text-black aspect-square rounded-full text-[8px] font-bold'>{getCartCount()}</p>
            </Link>
            <Menu className='w-5 cursor-pointer sm:hidden text-gray-400 hover:text-emerald-400 transition-colors' onClick={()=>setVisible(true)} />
        </div>
        {/*side bar for small screen*/}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-zinc-950 border-l border-zinc-800 transform transition-all duration-300 z-50 ${visible?'w-full' :'w-0'}`}>
            <div className='flex flex-col text-gray-300'>
                <div onClick={()=> setVisible(false)} className='flex items-center gap-4 p-5 cursor-pointer hover:bg-zinc-900 transition-colors border-b border-zinc-800'>
                    <ChevronDown className='h-5 rotate-180 text-emerald-400'/>
                    <p className='text-white'>Back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-4 pl-8 border-b border-zinc-800 hover:bg-zinc-900 hover:text-emerald-400 transition-all' to='/'>HOME</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-4 pl-8 border-b border-zinc-800 hover:bg-zinc-900 hover:text-emerald-400 transition-all' to='/collection'>COLLECTION</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-4 pl-8 border-b border-zinc-800 hover:bg-zinc-900 hover:text-emerald-400 transition-all' to='/about'>ABOUT</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-4 pl-8 border-b border-zinc-800 hover:bg-zinc-900 hover:text-emerald-400 transition-all' to='/contact'>CONTACT</NavLink>
            </div>
        </div>
    </div>
  )
}
 
export default Navbar
