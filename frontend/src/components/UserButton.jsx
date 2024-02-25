import React, { useContext } from 'react';
import { RiLogoutCircleLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import axios from 'axios';
import { UserContext } from './context/UserContextProvider';
import { useNavigate } from 'react-router-dom';

function UserButton() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  
  //handle logout
  async function handleLogout() {
    try {
      await axios.post('http://localhost:3000/logout');
      setUser('');
      // Redirect to signup page after successful logout
      navigate('/signup');
    } catch (error) {
      console.error('Logout error:', error);
    }
  }



  return (
    <div className='z-30'>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="/images/user_image.png" />
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><a><CgProfile /> Profile</a></li>
            <li onClick={handleLogout}><a><RiLogoutCircleLine /> Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserButton