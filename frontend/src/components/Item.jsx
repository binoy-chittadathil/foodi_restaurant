import React from 'react'

function Item({item}) {
  return (
                <div className='hover:border shadow-xl p-6 flex flex-col rounded-3xl'>
                  <div className='flex items-center justify-center'>
                  <img className='w-4/5 hover:scale-105 transition-all duration-300' src={item.image} />
                  </div>
                  <div className='space-y-3'>
                  <h2 className='font-bold text-xl'>{item.name}</h2>
                  <p className='text-[#555555] font-semibold pb-5'>{item.recipe}</p>
                  </div>
                  {/* price and add to cart option */}
                  <div className='flex w-full items-center justify-between mt-auto'>
                    <p className='text-xl font-bold'><span className='text-[#FF6868]'>$</span> <span>{item.price}</span></p>
                    <button className='btn bg-green text-white'>Add to Cart</button>
                  </div>
                  </div>
  )
}

export default Item