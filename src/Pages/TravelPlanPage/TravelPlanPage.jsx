import React from 'react';
import { LuRefreshCcw } from "react-icons/lu";
import { FaPlus, FaStar } from 'react-icons/fa';
import img1 from '../../assets/images/plane-1.png'
import img2 from '../../assets/images/plane-2.png'
import img3 from '../../assets/images/plane-3.png'
import { GoCheckCircle } from 'react-icons/go';
import { IoChevronDownSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";

const TravelPlanPage = () => {
  return (
    <div className=''>
      {/* ------- heading div -------- */}
      <div className='flex justify-between mt-[42px]'>
        <div>
          <h2 className='text-[30px] leading-[37px] font-bold'>Hotel de Mar Gran Meliá</h2>
          <p className='flex items-center gap-2 mt-2'>
            <FaStar />
            4.3  •  (112 reviews)  •  Paseo de las Illetas, 7, Mallorca
          </p>
        </div>
        <div className='h-fit flex items-center gap-x-4'>
          <LuRefreshCcw className='text-xl text-[#DD727D]' />
          <h2 className='text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#DD727D] to-[#834047]'>
            Try Another Hotel
          </h2>
        </div>
      </div>
      {/* -------- hotel image and details  div ------------ */}
      <div className='flex gap-6 mt-[40px]'>
        {/* -------- first slide --------- */}
         <div className='w-[848px]'>
           <img src={img1} alt="hotel image" className=' h-[470px]'/>
           {/* ------------- overview div ------------- */}
           <div className='mt-[40px]'>
             <h2 className='text-[25px] leading-[31px] font-bold'>Overview</h2>
             <p className='text-lg mt-6'>
              Fuga omnis consequuntur quia cupiditate aut nulla. Blanditiis quam veritatis. Commodi quia eum quia asperiores aliquid id. Officia explicabo fugit sequi ipsa ut quo repellat. Quidem magni adipisci non voluptate modi modi et earum unde. Soluta consectetur eos eos ea vel mollitia consequatur qui ut. <br /> <br />

              Ut dolorem consequatur eligendi. Consectetur commodi ratione. Commodi fuga numquam aut
              <br/>deleniti hic. Commodi dolor excepturi et occaecati voluptas voluptatem. Minus dolorem <br />exercitationem. <br />
              Fugiat quia omnis odit doloremque hic animi. Dolorem vel facilis quisquam illum modi beatae. Impedit sunt consectetur sed libero exercitationem exercitationem. Et et sunt. Et omnis in. Aut qui optio enim beatae excepturi ipsum facere non.
             </p>
           </div> 
           <hr className='my-[40px]'/>
           {/* ---------- facilities div ------ */}
           <div className='mb-[64px]'>
             <h2 className='font-bold text-[25px] leading-[31px]'>Facilities</h2>
             <div className='grid grid-cols-4 grid-rows-2 gap-y-6 mt-6'>
                <h3 className='flex items-center gap-4'>
                    <GoCheckCircle className='text-xl '/> 24/7 Front desk
                </h3>
                <h3 className='flex items-center gap-4'>
                    <GoCheckCircle className='text-xl '/> Valet parking
                </h3>
                <h3 className='flex items-center gap-4'>
                    <GoCheckCircle className='text-xl '/> Swimming pool
                </h3>
                <h3 className='flex items-center gap-4'>
                    <GoCheckCircle className='text-xl '/> Golf park
                </h3>
                <h3 className='flex items-center gap-4'>
                    <GoCheckCircle className='text-xl '/> Airport pickup
                </h3>
                <h3 className='flex items-center gap-4'>
                    <GoCheckCircle className='text-xl '/> Spa and Gym
                </h3>
                <h3 className='flex items-center gap-4'>
                    <GoCheckCircle className='text-xl '/> Free WiFi all rooms
                </h3>
             </div>
           </div>
         </div>
         {/* -------- second slide --------- */}
         <div className='w-[412px]'>
           <img src={img2} alt="hotel image" className=' h-[223px] mb-6'/>
           <img src={img3} alt="hotel image" className=' h-[223px]'/>
           {/* --------- checkout div -------------- */}
           <div className='h-[620px] rounded-[20px] border bg-white mt-[40px] pt-6 px-[26px] pb-[27px]'>
             <h3 className='text-lg font-bold'>$25 per night</h3>
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
         </div>
      </div>
    </div>
  );
};

export default TravelPlanPage;