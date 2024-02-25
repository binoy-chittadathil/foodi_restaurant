import React from 'react'
import SpecialCorousel from './SpecialCorousel'

function Special() {
  return (
    <div className='px-5 pb-28 sm:px-10'>
        <div className=' space-y-5 flex flex-col items-center md:items-start'>
        <p className='text-[#FF6868] text-sm font-semibold'>SPECIAL DISHES</p>
        <h2 className='text-4xl font-bold w-72 leading-tight'>Standout Dishes From Our Menu</h2>
        </div>
        <SpecialCorousel/>
    </div>
  )
}

export default Special