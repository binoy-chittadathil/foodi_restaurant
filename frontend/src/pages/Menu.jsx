import React, { useEffect, useState } from 'react';
import Baner from '../components/Baner';
import { FaFilter } from "react-icons/fa";
import axios from 'axios'
import Item from '../components/Item';

function Menu() {
  const [menu, setMenu] = useState([]);
  const [filteredMenu,setFilteredMenu]=useState([]);

  // call all menus from backend
  useEffect(()=>{
    axios.get('/menus').then(({data})=>{
      setMenu(data);
      setFilteredMenu(data);
    }).catch(err=>console.error('some error occured to find data',err))
  },[]);
  //function to handle menu by category
  function handleMenu(category){
    if(category==='all'){
      setFilteredMenu(menu);
    }else{
      const filtered=menu.filter(item=>item.category===category);
      setFilteredMenu(filtered)
    }
  };

  //function to handle filter
  function handleFilter(ev){
    const value=ev.target.value;
    let sortedItems=[...filteredMenu];
    let dummy=[...filteredMenu]
    console.log(value);
    switch (value) {
      case 'a-z':
        sortedItems.sort((a,b)=>a.name.localeCompare(b.name));
        break;
      case 'z-a':
        sortedItems.sort((a,b)=>b.name.localeCompare(a.name));
        break;
      case 'low-to-high':
        sortedItems.sort((a,b)=>a.price-b.price);
        break;
      case 'high-to-low':
        sortedItems.sort((a,b)=>b.price-a.price);
        break;
      default:
        break;
    };
    setFilteredMenu(sortedItems);
  }


  return (
    <div className='pt-40 px-4 sm:px-20'>
            {/* menu baner */}
            <div className=' space-y-10 px-5 text-center'>
                <h1 className='font-bold text-black text-5xl leading-snug'>Dive into Delights Of Delectable <span className='text-green'>Food</span></h1>
                <p className='text-xl'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                <button className='btn bg-green text-white rounded-full px-7 text-lg'>Order Now</button>
            </div>

            <div className='flex sm:justify-between justify-start font-semibold text-lg mt-20 flex-wrap gap-5'>
              {/* catogories */}
              <ul className='flex gap-4 lg:gap-10 '>
                <li className='cursor-pointer' onClick={()=>handleMenu('all')}>All</li>
                <li className='cursor-pointer' onClick={()=>handleMenu('salad')}>Salad</li>
                <li className='cursor-pointer' onClick={()=>handleMenu('pizza')}>Pizza</li>
                <li className='cursor-pointer' onClick={()=>handleMenu('soup')}>Soups</li>
                <li className='cursor-pointer' onClick={()=>handleMenu('dessert')}>Desserts</li>
                <li className='cursor-pointer' onClick={()=>handleMenu('drinks')}>Drinks</li>
              </ul>
              {/* filter */}
              <div className='flex items-center bg-black text-white px-2 py-1 gap-2'>
                <FaFilter />
                <select onChange={handleFilter} className='outline-none bg-black w-20 cursor-pointer'>
                  <option value="filter">Filters</option>
                  <option value="a-z">A-Z</option>
                  <option value="z-a">Z-A</option>
                  <option value="low-to-high">Low-to-High</option>
                  <option value="high-to-low">High-to-Low</option>
                </select>
              </div>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12'>
              {filteredMenu.map((item,i)=>(
                <Item item={item} key={i} />
              ))}
            </div>
    </div>
  )
}

export default Menu