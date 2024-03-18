import React, { useContext, useEffect, useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Login from './Login';
import { UserContext } from './context/UserContextProvider';
import UserButton from './UserButton';
import { CartContext } from './context/CartContextProvider';

function Navbar() {
  const { user } = useContext(UserContext);
  const {cartDataLength,cartData,setCartDataLength}=useContext(CartContext);

  useEffect(()=>{
    setCartDataLength(cartData.length)
  },[cartData])

  return (
    <div className="navbar bg-base-100 lg:px-20 py-5 fixed z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li>
              <a>Menu</a>
              <ul className="p-2">
                <Link to={'/menu'}>All</Link>
                <li><a>Salad</a></li>
                <li><a>Pizza</a></li>
              </ul>
            </li>
            <li>
              <a>Sevices</a>
              <ul className="p-2">
                <li><a>Online Order</a></li>
                <li><a>Table Booking</a></li>
                <li><a>Order Tracking</a></li>
              </ul>
            </li>
            <li><a>Offers</a></li>
          </ul>
        </div>
        <a className="text-xl"><img src="/images/logo.png" alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to={'/'}>Home</Link></li>
          <li>
            <details>
              <summary>Menu</summary>
              <ul className="p-2">
                <li><Link to={'/menu'}>All</Link></li>
                <li><Link to={'/menu'}>Salad</Link></li>
                <li><Link to={'/menu'}>Pizza</Link></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="p-2">
                <li><a>Online Order</a></li>
                <li><a>Table Booking</a></li>
                <li><a>Order Tracking</a></li>
              </ul>
            </details>
          </li>
          <li><a>Offers</a></li>
        </ul>
      </div>
      <div className="navbar-end">

        {/*search button*/}
        <button className="btn btn-ghost btn-circle hidden md:flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>

        {/*cart button*/}
        <Link to={user ? '/cart' : '/signup'} tabIndex={0} role="button" className="btn btn-ghost btn-circle hidden md:flex mr-5">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm indicator-item text-white bg-green">{user ? cartDataLength : 0}</span>
          </div>
        </Link>

        {/* login or user button */}
        {user ? (
          <UserButton/>
        ) : (
          <button onClick={() => document.getElementById('my_modal_5').showModal()}
            className='btn rounded-full px-7 text-white bg-green'><FaRegUser /> Login</button>
        )}

        <Login />
      </div>
    </div>
  )
}

export default Navbar