import React from 'react'

const services=[
    {id:1,image:'/images/home/services/icon1.png',title:'Catering',des:'Delight your guests with our flavors and  presentation'},
    {id:2,image:'/images/home/services/icon2.png',title:'Fast delivery',des:'We deliver your order promptly to your door'},
    {id:3,image:'/images/home/services/icon3.png',title:'Online Ordering',des:'Explore menu & order with ease using our Online Ordering '},
    {id:4,image:'/images/home/services/icon4.png',title:'Gift Cards',des:'Give the gift of exceptional dining with Foodi Gift Cards'}
]
function Services() {
  return (
    <div className='grid lg:grid-cols-[1fr_1fr] gap-16 place-items-center px-1 sm:px-8'>
        <div className='space-y-5 w-96'>
        <p className='text-[#FF6868] text-sm font-semibold'>Our Story & Services</p>
        <h2 className='text-4xl font-bold leading-tight'>Our Culinary Journey And Services</h2>
        <p className='text-[#555555]'>
        Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
        </p>
        <button className='btn px-10 text-white bg-green rounded-full'>Explore</button>
        </div>
        {/*services*/}
        <div className='grid place-items-center md:grid-cols-2 gap-10'>
            {services.map((service,i)=>(
                <div key={i} className='py-2 hover:scale-105 duration-300 transition-all hover:border shadow-xl rounded-3xl flex flex-col items-center text-center gap-4 cursor-pointer w-[200px]'>
                    <img className='w-1/4' src={service.image} />
                    <h4 className='text-lg font-semibold text-green'>{service.title}</h4>
                    <p className='text-[#90BD95] text-sm'>{service.des}</p>
                </div>
            ))}
        </div>
        </div>
  )
}

export default Services