import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";

function DashboardLayout() {
  return (
    <div className="drawer md:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content md:flex flex-col">
        {/* Page content here */}
        <div className='flex justify-between items-center mx-4 mt-2'>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button md:hidden"><MdDashboardCustomize /></label>
          <button className='btn bg-green text-white hover:text-black rounded-full px-5 md:hidden'><FaRegUser /> Logout</button>
        </div>
        <div className='mt-5 md:mt-0 mx-4'>
        <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar upper content */}
          <li>
            <Link to={'/dashboard'} className='flex justify-start mb-3'>
              <img src="/images/logo.png" className='w-20' />
              <div className="badge badge-primary">Admin</div>
            </Link>
          </li>
          <hr />

          <li className='mt-3'>
            <Link to={'/dashboard'}>
              <MdDashboard /> Dashboard
            </Link>
          </li>

          <li>
            <Link to={'/dashboard'}>
              <IoBagHandle /> Manage Bookings
            </Link>
          </li>

          <li>
            <Link to={'/dashboard'}>
              <IoIosAddCircle /> Add Menu
            </Link>
          </li>

          <li>
            <Link to={'/dashboard'}>
              <FaEdit /> Manage Items
            </Link>
          </li>

          <li className='mb-3'>
            <Link to={'/dashboard/users'}>
              <FaUserFriends />All Users
            </Link>
          </li>

          <hr />

          {/* sidebar lower content */}

          <li className='mt-3'>
            <Link to={'/'}>
            <MdDashboard /> Home
            </Link>
          </li>

          <li>
            <Link to={'/menu'}>
            <FaShoppingCart /> Menu
            </Link>
          </li>

          <li>
            <Link to={'/dashboard/users'}>
            <FaLocationArrow /> Order Tracking
            </Link>
          </li>

          <li>
            <Link to={'/dashboard/users'}>
            <MdContactSupport /> Customer Support
            </Link>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default DashboardLayout