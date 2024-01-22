import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

const ContactForm = () => {
  return (
    <div className='py-[180px]'>
        <div className='h-[756px] w-[848px] mx-auto'>
            <div>
                <h3 className='text-[35px] font-bold leading-[44px] text-[#1B1B1E] text-center'>
                    How Can We Help?
                </h3>
                <p className='text-lg text-[#3C3C43] leading-[22.65px] text-center mt-5 px-2'>
                    Travelandz is an AI trip planner that uses the tools of travel agencies, allowing it to offer the best price  for hotels and activities available.
                </p>
            </div>
            <form className='w-[521px] h-[582px] bg-white rounded-[20px] mx-auto mt-[60px] px-8 pb-8 pt-[33px] shadow'>
                <label htmlFor="name" className='font-medium'>Your Name</label>
                <input type="text" id='name' placeholder='Your name' className='w-[457px] h-[50px] border rounded-[100px] px-6 py-[15px] mt-2 mb-4'/>

                <label htmlFor="name" className='font-medium'>Phone Number</label>
                <input type="text" id='name' placeholder='Your phone number' className='w-[457px] h-[50px] border rounded-[100px] px-6 py-[15px] mt-2 mb-4'/>

                <label htmlFor="name" className='font-medium'>Email Address</label>
                <input type="text" id='name' placeholder='Your email address' className='w-[457px] h-[50px] border rounded-[100px] px-6 py-[15px] mt-2 mb-4'/>

                <label htmlFor="name" className='font-medium'>Message</label>
                <textarea type="text" id='name' placeholder='How can we help?' className='w-[457px] h-[120px] border rounded-[20px] px-6 py-[15px] mt-2  mb-4'/>

                <button className='w-full px-8 py-3 bg-gradient-to-r from-[#DD727D] to-[#834047] rounded-[100px] text-lg font-semibold text-white '>
                  Send Inquiry <GoArrowUpRight className='inline text-xl'/>
                </button>
            </form>
        </div>
    </div>
  );
};

export default ContactForm;