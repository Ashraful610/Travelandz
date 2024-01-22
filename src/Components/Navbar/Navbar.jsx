import React from 'react';
import logo from '../../assets/images/Travelandz logo.png';
import { HiOutlineUser } from "react-icons/hi2";

const Navbar = () => {
  return (
     <div className='h-[90px]'>
        <div className='flex justify-between items-center h-full'>
            {/* -------- logo div ------- */}
            <div>
                <img src={logo} alt="logo" className='w-[172.98px] h-[35px]'/>
            </div>
            {/* --------- navigation logo --------- */}
            <div>
                <a href="#" className=' text-[#1B1B1E] leading-5 '>About Travelandz</a>
                <a href="#" className=' text-[#1B1B1E] leading-5 mx-[32px]'>Famous destinations</a>
                <a href="#" className=' text-[#1B1B1E] leading-5 '>Contact us</a>
            </div>
            {/* ---------- user profile div ------- */}
            <div className='w-[44px] h-[44px] flex justify-center items-center rounded-full border-[1px]'>
              <HiOutlineUser />
            </div>
        </div>
     </div>
  );
};

export default Navbar;