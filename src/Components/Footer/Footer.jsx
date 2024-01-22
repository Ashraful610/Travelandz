import React from 'react';
import logo from '../../assets/images/footer-logo.png';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='h-[268px] bg-[#ECECED] p-[60px] '>
      <div className='w-[400px] mx-auto flex flex-col items-center'>
         <img src={logo} alt="logo" className='w-[172px] h-[35px] object-cover'/>
         <div className='text-[#5F5F60] flex gap-[30px] mt-[33px] text-center px-3'>
           <FaFacebookF /> 
           <FaLinkedinIn />
           <FaTwitter />
           <RiInstagramFill />
         </div>
         <p className='text-[#808080] text-lg mt-[40px] text-center'>© 2023, made with by Travelandz </p>
      </div>
    </div>
  );
};

export default Footer;