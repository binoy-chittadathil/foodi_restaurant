import React, { useContext } from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import { UserContext } from '../context/UserContextProvider';
import Loading from '../../pages/Loading';

function Layout() {
    const {ready}=useContext(UserContext);
  if(!ready){
    return(
      <Loading/>
    )
  }
  return (
    <div>
        <Navbar/>
        <div className='min-h-screen'>
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout