import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { GoCheckCircle } from 'react-icons/go';
import { LuRefreshCcw } from "react-icons/lu";
import { TbGridDots } from "react-icons/tb";
import RecomandedAccordion from '../../Components/RecomandedAccordion';
import CheckOutForm from '../../Components/CheckOutForm';
import { SlArrowUp } from 'react-icons/sl';

const TravelPlanPage = () => {
  const [open , setOpen]  = useState(false);

  return (
    <div className="font-['Plus Jakarta Sans']">
      {/* ------- heading div -------- */}
      <div className='md:flex justify-between hidden mt-[42px]'>
        <div>
          <h2 className='text-[30px] leading-[37px] font-bold'>Hotel de Mar Gran Meliá</h2>
          <p className='flex items-center gap-2 mt-2'>
            <FaStar />
            4.3  •  (112 reviews)  •  Paseo de las Illetas, 7, Mallorca
          </p>
        </div>
        <div className='h-fit flex items-center gap-x-4 '>
          <LuRefreshCcw className='text-xl text-[#DD727D]' />
          <h2 className='text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#DD727D] to-[#834047]'>
            Try Another Hotel
          </h2>
        </div>
      </div>
      {/* -------- hotel image and details  div ------------ */}
      <div className='flex gap-6 md:mt-[40px] h-fit md:h-[2180px]'>
        {/* -------- first slide --------- */}
        <div className='w-[393px] md:w-[848px] h-fit md:h-[1875px] '>
         <img src='https://i.ibb.co/w6GMFnT/plane-1.png' alt="hotel image" className='w-full h-[350px] md:h-[470px]'/>
          {/* ------------- overview and facilities div ------------- */}
          <div className='h-fit md:h-[530px] mb-[100px] md:mb-[68px] mt-6 md:mt-[40px] md:w-full w-[353px] mx-auto'>
            <div className='mb-[40px] md:hidden'>
              <h2 className='text-[25px] md:text-[30px] leading-[37px] font-bold'>
                Hotel de Mar Gran Meliá
              </h2>
              <div className='flex gap-2 mt-[14px]'>
               <FaStar className='mt-1'/>
               <p>
                4.3  •  (112 reviews)  • <br/>  Paseo de las Illetas, 7, Mallorca
               </p>
              </div>
            </div>
            {/* --------- overvivew div -------- */}
            <div className='h-fit md:h-[330px]'>
              <h2 className='text-[25px] leading-[31px] font-bold'>Overview</h2>
              <p className="text-zinc-700 text-lg font-normal mt-6">
                  Fuga omnis consequuntur quia cupiditate aut nulla. Blanditiis quam veritatis. Commodi quia eum quia asperiores aliquid id. Officia explicabo fugit sequi ipsa ut quo repellat. Quidem magni adipisci non voluptate modi modi et earum unde. Soluta consectetur eos eos ea vel mollitia consequatur qui ut. <br /> <br />

                  Ut dolorem consequatur eligendi. Consectetur commodi ratione. Commodi fuga numquam aut
                  <br/>deleniti hic. Commodi dolor excepturi et occaecati voluptas voluptatem. Minus dolorem <br className='md:block hidden'/>exercitationem. <br />
                  Fugiat quia omnis odit doloremque hic animi. Dolorem vel facilis quisquam illum modi beatae. Impedit sunt consectetur sed libero exercitationem exercitationem. Et et sunt. Et omnis in. Aut qui optio enim beatae excepturi ipsum facere non.
              </p>
            </div> 
            {/* -------- horizantall line --------- */}
            <hr className='my-[40px]'/>
            {/* ---------- facilities div ------ */}
            <div className='h-fit md:h-[120px]'>
              <h2 className='font-bold text-[25px] leading-[31px]'>Facilities</h2>
              <div className='grid grid-cols-2 md:grid-cols-4 grid-row-4 md:grid-rows-2 gap-y-6 mt-6'>
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
          {/* ----------- recomandations div ------------- */}
          <div className='h-fit md:h-[874px] mb-[180px] md:w-full w-[353px] mx-auto'>
            {/* ------------- heading div ---------- */}
            <div className='mb-[40px] '>
              <h2 className='text-[25px] md:text-[30px] font-bold leading-[37px] mb-4'>
                Personalized Recommendations For You
              </h2>
              <p>
                I have added recommended experiences for you, please feel free to add or remove new ones
              </p>
            </div>
            {/* -------- recomanded Accordion ---------- */}
            <RecomandedAccordion/>
          </div>
        </div>
        {/* -------- second slide --------- */}
        <div className='w-[412px] h-[1875px] md:block hidden'>
           <img src='https://i.ibb.co/FJHSvq7/plane-2.png' alt="hotel image" className=' h-[223px] mb-6'/>
           <div className='relative'>
             <img src='https://i.ibb.co/x5rmYRb/plane-3.png' alt="hotel image" className=' h-[223px]'/>
             <div className='w-[204px] h-[43px] rounded-[15px] bg-[#FFFFFF] absolute bottom-6 right-6 flex items-center gap-4 px-4 py-[10px]'>
                <TbGridDots className='w-[19px] h-[19px]'/>
                <h3 className='text-semibold text-lg'>Show all photos</h3>
             </div>
           </div>
           {/* --------- checkout component -------------- */}
           <CheckOutForm/>
        </div>
      </div>
      {/* ------------- small device bottom fixed div --------- */}
      {
        open ?      
        <div className='fixed bottom-0'> 
          <CheckOutForm setOpen={setOpen}/>
        </div>
        :
        <div className='w-[393px] h-[82px] bg-white fixed bottom-0 flex items-center px-5 justify-between md:hidden' onClick={() => setOpen(true)}>
          <div>
            <h2 className='text-[25px] font-bold'>$75</h2>
            <h3 className='flex items-center gap-2'>Hotel Only <SlArrowUp  /></h3>
          </div>
          <button className='w-[150px] h-[47px] text-lg font-semibold text-white py-1 px-8 rounded-full bg-gradient-to-r from-[#DD727D] to-[#834047]'>
            Checkout
          </button>
        </div>
      }
    </div>
  );
};

export default TravelPlanPage;