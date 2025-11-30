import React,{useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import { ChevronDown } from 'lucide-react';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products,search,showSearch} = useContext(ShopContext);
  const [showFilter,setShowFilter]=useState(false)
  const [filterProduct,setFilterProduct]=useState([])
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType,setSortType]=useState('relavent');

  const toggleCategory = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory(prev => prev.filter(item => item !== value));
    } else {
      setCategory(prev => [...prev, value]);
    }
  };

  const toggleSubCategory=(e)=>{
    const value=e.target.value;
    if(subCategory.includes(value)){
      setSubCategory(prev => prev.filter(item => item !== value))
    }else{
      setSubCategory(prev => [...prev, value]);
    }
  }

  const applyFilter=(e)=>{
    let productCopy = products.slice();

    if(category.length>0){
      productCopy=productCopy.filter(item=>category.includes(item.category))
    }

    if(subCategory.length>0){
      productCopy=productCopy.filter(item=>subCategory.includes(item.subCategory))
    }

    if(showSearch && search){
      productCopy=productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    setFilterProduct(productCopy);
  }

  const sortProduct=()=>{
    let fpCopy=filterProduct.slice();
    switch(sortType){
      case 'low-high':
        setFilterProduct(fpCopy.sort((a,b)=>(a.price-b.price)))
        break;
      
      case 'high-low' :
        setFilterProduct(fpCopy.sort((a,b)=>(b.price-a.price)))
        break;
      
      default :
       applyFilter();
       break;
    }
  }

  useEffect(()=>{
    applyFilter()
  },[category,subCategory,search,showSearch])

  useEffect(()=>{
     sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-zinc-800 px-4'>
      {/*filter option*/}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 text-white hover:text-emerald-400 transition-colors'>
          FILTERS
          <ChevronDown className={`h-4 sm:hidden transition-transform ${showFilter?'rotate-180':''}`}/>
        </p>
        {/* category filter*/}
        <div className={`border border-zinc-800 bg-zinc-900 rounded-xl pl-5 py-5 mt-6 ${showFilter? '':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium text-white'>CATEGORIES</p>
          <div className='flex flex-col gap-3 text-sm font-light text-gray-400'>
            <p className='flex gap-2 items-center hover:text-emerald-400 transition-colors cursor-pointer'>
              <input className='w-4 h-4 accent-emerald-500 cursor-pointer' type="checkbox" value={'Men'} onChange={toggleCategory}/>Men
            </p>
            <p className='flex gap-2 items-center hover:text-emerald-400 transition-colors cursor-pointer'>
              <input className='w-4 h-4 accent-emerald-500 cursor-pointer' type="checkbox" value={'Women'} onChange={toggleCategory}/>Women
            </p>
            <p className='flex gap-2 items-center hover:text-emerald-400 transition-colors cursor-pointer'>
              <input className='w-4 h-4 accent-emerald-500 cursor-pointer' type="checkbox" value={'Kids'} onChange={toggleCategory}/>Kids
            </p>
          </div>
        </div>
        {/*sub category*/}
        <div className={`border border-zinc-800 bg-zinc-900 rounded-xl pl-5 py-5 my-5 ${showFilter? '':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium text-white'>TYPE</p>
          <div className='flex flex-col gap-3 text-sm font-light text-gray-400'>
            <p className='flex gap-2 items-center hover:text-emerald-400 transition-colors cursor-pointer'>
              <input className='w-4 h-4 accent-emerald-500 cursor-pointer' type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/>TopWear
            </p>
            <p className='flex gap-2 items-center hover:text-emerald-400 transition-colors cursor-pointer'>
              <input className='w-4 h-4 accent-emerald-500 cursor-pointer' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/>Bottomwear
            </p>
            <p className='flex gap-2 items-center hover:text-emerald-400 transition-colors cursor-pointer'>
              <input className='w-4 h-4 accent-emerald-500 cursor-pointer' type="checkbox" value={'Winterwaer'} onChange={toggleSubCategory}/>Winterwear
            </p>
          </div>
        </div>
      </div>
      {/*right side*/}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'} />
          {/*SORTING*/}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-zinc-700 bg-zinc-900 text-gray-300 text-sm px-4 py-2 rounded-lg outline-none focus:border-emerald-400 transition-colors cursor-pointer'>
            <option value="relavent">Sort by relevancy</option>
            <option value="low-high">Sort by Low to High</option>
            <option value="high-low">Sort by High to Low</option>
          </select>
        </div>
        {/*Map product*/}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-8'>
          {
            filterProduct.map((item,index)=>(
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
