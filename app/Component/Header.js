"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineUser,AiOutlineSearch } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';




// import second from  '../Page/App.js'
// import {Link, NavLink} from 'react-router-dom'

function Header() {
  const [navBarVisible, setNavBarVisible] = useState(false);

  const toggleNavBar = () => {
    setNavBarVisible(!navBarVisible);
  };
  
    // Your other code

  return (
    <>
    <div className=' h-[80px]'></div>
    <div className='fixed top-0 left-0 w-full bg-white shadow-md z-10 topnav'>
      <div className='flex h-[80px] color-primary'>
        <div className='w-[10%] flex items-center justify-center'>
          <a href='/'><img className='h-[30px] logo ' src="/images/myntra_logo.png" alt="Myntra Logo" /></a>
        </div>
        <div className='w-[40%] flex items-center'>
          <div className='px-[15px] cursor-pointer'>
            <a href='/Page2' className=' font-bold'>Men</a>
          </div>
          <div className='px-[15px] cursor-pointer'>
            <a href='/Page2' className='font-bold'>Women</a>
          </div>
          <div className='px-[15px] cursor-pointer'>
            <a href='/Page2' className='font-bold'>Kids</a>
          </div>
          <div className='px-[15px] cursor-pointer'>
            <a href='/Page2' className='font-bold'>Home & Living</a>
          </div>
          <div className='px-[15px] cursor-pointer'>
            <a href='/Page2' className='font-bold'>Beauty</a>
          </div>
          <div className='px-[15px] cursor-pointer'>
            <a href='/Page2' className='font-bold'>Studio<sup className='text-pink-500'>NEW</sup> </a>
          </div>
        </div>
        <div className='w-[35%] flex justify-center items-center relative'>
          <div className='absolute left-[28px]'>
            <svg style={{ color: '#717288', height: '15px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <input className='h-[50%] w-[95%] bg-[#F5F5F6] rounded pl-[40px] focus:bg-[white] focus:outline-none focus:border-[2px]' type='text' placeholder='Search for products, brands, and more' />
        </div>
        <div className='w-[15%] flex items-center gap-3'>
          <div>
            <div>
              <svg className='text-[15px] stroke-1 w-4 h-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div className='flex-1 justify-center items-center'>
              <p className='font-bold text-[10px]'>Profile</p>
            </div>
          </div>
          <div>
            <div>
              <svg className='text-[15px] stroke-1 w-4 h-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <div className='flex-1 justify-center items-center'>
              <p className='font-bold text-[10px]'>Wishlist</p>
            </div>
          </div>
          <div>
            <div>
              <svg className='text-[15px] stroke-1 w-4 h-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375.0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
            <div className='flex-1 justify-center items-center'>
              <p className='font-bold text-[10px]'>Bag</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className='h-[80px] fixed border  w-[100vw] top-0 bg-white ' id='mobile-view1'>
  <div className='flex items-center justify-between px-4 py-4 '>
    <div className='w-[10%] flex items-center justify-center'>
      <a href='/'><img className='h-[30px] logo ' src="/images/myntra_logo.png" alt="Myntra Logo" /></a>
    </div>
    <div className='flex gap-3 '>
      <div><AiOutlineSearch/></div>
      <div><AiOutlineUser/></div>
      <div id='bar'onClick={toggleNavBar}>{navBarVisible ? <RxCross1 /> : <FaBars />}</div>
    </div>
  </div>
</div>

<div className='flex justify-end items-center fixed  ' id='navBar' style={{ display: navBarVisible ? 'block' : 'none' }} >
<div className='h-[100vh] w-[80vw] flex flex-col    gap-10 items-center justify-center border bg-gray-400  '>
  <div> 
  <a href='/Page2' className=' font-bold'>Men</a>
  </div>
  <div>
  <a href='/Page2' className=' font-bold'>Women</a>
  </div>
  <div>
  <a href='/Page2' className=' font-bold'>Kids</a>
  </div>
  <div>
  <a href='/Page2' className=' font-bold'>Home & Living
</a>
  </div>
  <div>
  <a href='/Page2' className=' font-bold'>Beauty</a>
  </div>
  <div>
  <a href='/Page2' className=' font-bold'>Studio</a>
  </div>
</div>
</div>





</>
  );
}

export default Header;
