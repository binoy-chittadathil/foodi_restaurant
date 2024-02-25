import React from 'react'

const catogories=[
    {id:1,title:'Main Dish',des:'(86 dishes)',image:'/images/home/category/img1.png'},
    {id:2,title:'Break Fast',des:'(12 break fast)',image:'/images/home/category/img2.png'},
    {id:3,title:'Dessert',des:'(48 dessert)',image:'/images/home/category/img3.png'},
    {id:4,title:'Browse All',des:'(255 Items)',image:'/images/home/category/img4.png'},
]

function Catogories() {
  return (
    <div className='space-y-12 pb-32 px-10'>
        <div className='flex flex-col items-center justify-center space-y-6'>
        <p className='text-[#FF6868] text-sm font-semibold'>CUSTOMER FAVORITES</p>
        <h2 className='text-4xl font-bold'>Popular Catogories</h2>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {catogories.map((item,i)=>(
            <div key={i} className='flex flex-col items-center py-7 px-16 shadow-xl rounded-2xl border hover:-translate-y-4 duration-300 transition-all cursor-pointer'>
                <div className='rounded-full bg-[#C1F1C6] w-24 h-24 flex justify-center items-center'>
                <img className='w-16 h-16' src={item.image} />
                </div>
                <h2 className='text-md font-semibold'>{item.title}</h2>
                <p className='text-xs'>{item.des}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Catogories