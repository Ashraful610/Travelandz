import React from 'react';
import logo from '../../assets/images/Travelandz logo.png';
import { HiOutlineUser } from "react-icons/hi2";
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineNotificationsNone } from "react-icons/md";
import { IoIosArrowDown } from 'react-icons/io';
import { TiUser } from "react-icons/ti";

const Navbar = () => {
  const {pathname} = useLocation()
  
  return (
     <div className={`h-[90px] px-[78px] mx-auto ${pathname === '/travelPlanePage' && 'border-b'}`}>
        <div className='flex justify-between items-center h-full'>
            {/* -------- logo div ------- */}
            <div>
              <Link to='/'>
                <img src={logo} alt="logo" className='w-[172.98px] h-[35px]'/>
              </Link>
            </div>
            {/* --------- navigation logo --------- */}
            <div className={pathname === '/travelPlanePage' && 'hidden'}>
                <a href="#" className=' text-[#1B1B1E] leading-5 '>About Travelandz</a>
                <a href="#" className=' text-[#1B1B1E] leading-5 mx-[32px]'>Famous destinations</a>
                <a href="#" className=' text-[#1B1B1E] leading-5 '>Contact us</a>
            </div>
            {/* ---------- user profile div ------- */}
            <div className={`w-[44px] h-[44px] flex justify-center items-center rounded-full border-[1px] ${pathname === '/travelPlanePage' && 'hidden'}`}>
              <HiOutlineUser />
            </div>
            {/* ----------- notification icons , USD and user profile div --------- */}
            <div className='flex items-center'>
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