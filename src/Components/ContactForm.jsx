import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

const ContactForm = () => {
  return (
    <div className='py-[100px] md:py-[180px]' id='contact'>
      <div className='h-[756px] w-[394px] md:w-[848px] mx-auto'>
        <div className='w-[353px] mx-auto md:w-full'>
          <h3 className='text-[25px] leading-[33px] md:text-[35px] font-bold leading-[44px] text-[#1B1B1E] md:text-center'>
            How Can We Help?
          </h3>
          <p className='text-lg text-[#3C3C43] leading-[22.65px] md:text-center mt-6 md:mt-5 pr-5 md:px-2'>
            Travelandz is an AI trip planner that uses the tools of travel agencies, allowing it to offer the best price  for hotels and activities available.
          </p>
        </div>
        <form className='w-[353px] mx-auto md:w-[521px] h-[565px] md:h-[582px] bg-white rounded-[20px]  mt-[40px] md:mt-[60px] px-4 py-6 md:px-8 md:pb-8 md:pt-[33px] shadow'>
          <label htmlFor="name" className='font-medium'>Your Name</label>
          <input type="text" id='name' placeholder='Your name' className='w-[321px] md:w-[457px] h-[50px] border rounded-[100px] px-6 py-[15px] mt-2 mb-4'/>

          <label htmlFor="name" className='font-medium'>Phone Number</label>
          <input type="text" id='name' placeholder='Your phone number' className='w-[321px] md:w-[457px] h-[50px] border rounded-[100px] px-6 py-[15px] mt-2 mb-4'/>

          <label htmlFor="name" className='font-medium'>Email Address</label>
          <input type="text" id='name' placeholder='Your email address' className='w-[321px] md:w-[457px] h-[50px] border rounded-[100px] px-6 py-[15px] mt-2 mb-4'/>

          <label htmlFor="name" className='font-medium'>Message</label>
          <textarea type="text" id='name' placeholder='How can we help?' className='w-[321px] md:w-[457px] h-[120px] border rounded-[20px] px-6 py-[15px] mt-2  mb-4'/>

          <button className='w-full px-8 py-3 bg-gradient-to-r from-[#DD727D] to-[#834047] rounded-[100px] text-lg font-semibold text-white '>
            Send Inquiry <GoArrowUpRight className='inline text-xl'/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;