import React from 'react'

function Baner() {
  return (
    <div className='flex lg:flex-row-reverse flex-col items-center justify-center pb-20'>
        <div>
                <img src="/images/home/banner.png" />
                <div className='flex gap-14'>
                  <div className='flex gap-5 rounded-xl items-center bg-white shadow-2xl relative bottom-10 left-12 w-52 p-3'>
                    <img className='w-14 rounded-xl' src="/images/home/b-food1.png" />
                    <div className=''>
                      <p className='text-xs font-bold'>Spicy noodles</p>
                      <div className="rating rating-xs">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400"  />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                       </div>
                      <p className='text-sm font-semibold'>₹180.00</p>
                    </div>
                  </div>
                  {/*2nd*/}
                  <div className='hidden md:flex gap-5 rounded-xl items-center bg-white shadow-2xl relative bottom-10 left-12 w-52 p-3'>
                    <img className='w-14 rounded-xl' src="/images/home/b-food2.png" />
                    <div className=''>
                      <p className='text-xs font-bold'>Vegetarian salad</p>
                      <div className="rating rating-xs">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400"  />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                       </div>
                      <p className='text-sm font-semibold'>₹230.00</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className=' space-y-10 px-5'>
                <h1 className='font-bold text-black text-6xl leading-snug'>Dive into Delights Of Delectable <span className='text-green'>Food</span></h1>
                <p className='text-2xl'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                <button className='btn bg-green text-white rounded-full px-7 text-lg'>Order Now</button>
            </div>
        </div>
  )
}

export default Baner