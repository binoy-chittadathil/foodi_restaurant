import React from 'react'
import Baner from '../components/Baner'
import Catogories from '../components/Catogories'
import Special from '../components/Special'
import Testimonials from '../components/Testimonials'
import Services from '../components/Services'

function Home() {
  return (
    <div className='sm:px-20 px-2 pt-20'>
        <Baner/>
        <Catogories/>
        <Special/>
        <Testimonials/>
        <Services/>
    </div>
  )
}

export default Home