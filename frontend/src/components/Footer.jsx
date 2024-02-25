import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div className='mt-28'>
        <footer className="footer p-10 text-[#555555] flex items-center justify-center md:gap-20 xl:gap-32 ">
  <aside className='hidden md:block md:w-40'>
    <img src="/images/logo.png" />
    <p>Savor the artistry where every dish is a culinary masterpiece</p>
  </aside> 
  <div className='flex gap-10 sm:gap-20 lg:gap-48 xl:gap-68 '>
  <nav className='grid'>
    <h6 className="footer-title">Useful links</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Events</a>
    <a className="link link-hover">Blogs</a>
    <a className="link link-hover">FAQ</a>
  </nav> 
  <nav className='grid'>
    <h6 className="footer-title">Main Menu</h6> 
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Offers</a>
    <a className="link link-hover">Menus</a>
    <a className="link link-hover">Reservation</a>
  </nav> 
  <nav className='grid'>
    <h6 className="footer-title">Contact Us</h6> 
    <a className="link link-hover">example@email.com</a>
    <a className="link link-hover">+64 958 248 966</a>
    <a className="link link-hover">Social media</a>
  </nav>
  </div>
</footer>
{/*footer base*/}
<div>
<footer className="footer items-center py-2 border-t-2 px-3 sm:px-20 flex justify-between">
  <aside className="items-center grid-flow-col">
    <p>Copyright © 2024 - All right reserved</p>
  </aside> 
  <nav className="grid-flow-col gap-4 text-lg">
    <a className='btn rounded-full bg-green text-white'><FaFacebookF /></a>
    <a className='btn rounded-full bg-green text-white'><FaInstagram /></a>
  </nav>
</footer>
</div>

    </div>
  )
}

export default Footer