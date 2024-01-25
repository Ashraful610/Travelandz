import React from 'react';
import logo from '../assets/images/Travelandz logo.png';
import { HiBars3, HiOutlineUser } from "react-icons/hi2";
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineNotificationsNone } from "react-icons/md";
import { IoIosArrowDown } from 'react-icons/io';
import { TiUser } from "react-icons/ti";

const Navbar = () => {
  const {pathname} = useLocation()
  
  return (
     <div className={`h-[90px] px-5 md:px-[78px] mx-auto ${pathname === '/travelPlanePage'&'border-b'}`}>
        <div className='flex justify-between items-center h-full'>
          {/* -------- logo div ------- */}
          <div>
            <Link to='/'>
                <img src={logo} alt="logo" className='w-[123px] h-[25px] md:w-[172.98px]  md:h-[35px]'/>
            </Link>
          </div>
          {/* --------- navigation logo --------- */}
          <div className={`${pathname === '/travelPlanePage' ? 'hidden' : 'md:block hidden'}`}>
            <a href="#" className=' text-[#1B1B1E] leading-5 '>About Travelandz</a>
            <a href="#" className=' text-[#1B1B1E] leading-5 mx-[32px]'>Famous destinations</a>
            <a href="#" className=' text-[#1B1B1E] leading-5 '>Contact us</a>
          </div>
          {/* ---------- user profile div ------- */}
          <div className={` w-[44px] h-[44px] p-3 rounded-full border ${pathname === '/travelPlanePage' ? 'hidden' : 'md:block hidden'}`}>
            <HiOutlineUser className='w-5 h-5'/>
          </div>
          <HiBars3 className='md:hidden block w-6 h-6'/>
          {/* ----------- notification icons , USD and user profile div --------- */}
          <div className={`flex items-center ${pathname === '/travelPlanePage'? 'md:flex hidden' :'hidden'}`}>
            {/* -------- notification div -------- */}
            <div>
                <MdOutlineNotificationsNone className='w-6 h-6'/>
            </div>
            {/* ---------- currency div --------- */}
            <div className='flex items-center gap-2 ml-8 mr-[14px]'>
              <h3 className='font-medium'>USD</h3>
              <IoIosArrowDown />
            </div>
            {/* --------- profile -------- */}
            <div className='px-4 py-3 w-[155px] h-[44px] rounded-[100px] flex items-center border'>
              <TiUser className='text-xl'/>
              <h3 className='mr-[10px] ml-2 font-medium'>John doe</h3>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
     </div>
  );
};

export default Navbar;