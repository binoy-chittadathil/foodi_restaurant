import React from 'react';
import { TiStarFullOutline } from "react-icons/ti";

function Testimonials() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-around px-8 pb-28'>
        <div className='lg:w-96 '>
            <img src="/images/home/testimonials/testimonials.png" />
        </div>
        <div className=' space-y-5 flex flex-col items-center md:items-start w-96 text-center sm:text-left'>
        <p className='text-[#FF6868] text-sm font-semibold'>Testimonials</p>
        <h2 className='text-4xl font-bold leading-tight'>What Our Customers Say About Us</h2>
        <blockquote className='text-[#555555]'>
        “I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”
        </blockquote>

        {/*avatar*/}
        <div className='flex items-center gap-4'>

          <div className="avatar-group -space-x-6 rtl:space-x-reverse">
  <div className="avatar">
    <div className="w-12">
      <img src="/images/home/testimonials/testimonial1.png" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="/images/home/testimonials/testimonial2.png" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="/images/home/testimonials/testimonial3.png" />
    </div>
  </div>
   </div>

   <div>
    <p className='text-sm font-bold'>Customer Feedback</p>
    <p className='flex items-center gap-1 text-sm'><span className='text-yellow-400'><TiStarFullOutline /></span> <span className='font-semibold'>4.9</span> <span className='text-[#807E7E]'>(18.6k Reviews)</span></p>
   </div>

        </div>
        </div>
    </div>
  )
}

export default Testimonials