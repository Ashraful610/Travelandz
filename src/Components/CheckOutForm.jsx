import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoChevronDownSharp } from 'react-icons/io5';
import { SlArrowDown } from 'react-icons/sl';

const CheckOutForm = ({setOpen}) => {
  return (
    <div className='h-[620px] w-[393px] sticky top-5 checkout-div rounded-[20px] border bg-white mt-[40px] pt-6 px-[26px] pb-[27px]'>
        <div className='flex justify-between'>
          <h3 className='text-lg font-bold'>$25 per night</h3>
          <SlArrowDown onClick={()=>setOpen(false)} className='md:hidden'/>
        </div>
        <div className='w-[364px] h-[79px] rounded-[15px] border mt-4 flex'>
          <div className='border-r w-2/4  px-4 py-[14px]'>
            <h3 className='font-medium'>Check-in</h3>
            <h4 className='text-lg text-[#3C3C43]'>03 June 2023</h4>
          </div>
          <div className=' w-2/4  px-4 py-[14px]'>
            <h3 className='font-medium'>Check-out</h3>
            <h4 className='text-lg text-[#3C3C43]'>06 June 2023</h4>
          </div>
        </div>
        <div className='w-[364px] h-[79px] rounded-[15px] border mt-4 flex justify-between items-center'>
           <div className=' w-2/4  px-4 py-[14px]'>
             <h3 className='font-medium'>Guests</h3>
             <h4 className='text-lg text-[#3C3C43]'>2 adults</h4>
           </div>
           <div className=' pr-4  pt-[27px] pb-[28px]'>
             <IoChevronDownSharp className='text-[24px]'/>
           </div>
        </div>
        <div className='w-[364px] h-[79px] rounded-[15px] border mt-4 flex justify-between items-center'>
           <div className=' w-2/4  px-4 py-[14px]'>
             <h3 className='font-medium'>Room type</h3>
             <h4 className='text-lg text-[#3C3C43]'>Deluxe room</h4>
           </div>
           <div className=' pr-4  pt-[27px] pb-[28px]'>
             <AiOutlinePlus className='text-[24px]'/>
           </div>
        </div>
        <div className='w-[364px] h-[46px] rounded-[80px] bg-[#F6F6F6] mt-8 flex justify-between items-center  px-1 '>
           <div className=' w-[178px] h-[36px] flex justify-center py-1 bg-white rounded-[80px] border'>
              <h3 className='font-semibold w-[78px] h-[20px]'>Hotel Only</h3>
           </div>
           <div className='w-[152px] '>
             <h2 className='text-medium text-[#8E8E92]'>Hotel + Experiences</h2>
           </div>
        </div>
        <div className='w-[364px] h-[46px] mt-6 flex justify-between  '>
           <h2 className='text-[35px] font-bold text-[#1B1B1E]'>$75</h2>
           <p className='text-[#8E8E92] pt-5 pb-2'>Tax will calculate in checkout</p>
        </div>
        <button className='w-[364px] h-[47px] mt-6 py-3 px-8 bg-gradient-to-r from-[#DD727D] to-[#834047] rounded-[100px] text-white text-lg font-semibold text-center'>
            Checkout Hotel
        </button>
        <p className='text-center mt-6'>Free Cancellation until 2023-06-03</p>
    </div>
  );
};

export default CheckOutForm;