import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='bg-[url(https://i.ibb.co/C8YKwnq/Rectangle-6742.png)] bg-cover bg-center object-cover bg-no-repeat w-full h-[810px] md:h-[660px] flex flex-col justify-center items-center '>
      {/* ------------ banner heading div ----------- */}
      <div className='w-[353px] md:w-[893px] text-[#FFFFFF] text-center'>
        <h2 className='md:font-extrabold md:text-[50px] font-bold text-[30px] md:leading-[63px] '>
            Experience Wanderlust at its Finest with AI-Powered Travel Planner
        </h2>
        <p className='text-lg leading-[22px] mt-[24px]'>
            Discover the best prices, secure your mobile tickets, and set off on a journey of a lifetime
        </p>
      </div>
      {/* ------------ explore plans div --------- */}
      <div className='w-[353px] h-[441px] md:w-[1066px] md:h-[186px] bg-white rounded-[20px] mt-[60px]  px-4 py-[26px] md:px-6 md:py-7'>
         <div className='flex border-b-[1px] pb-[10px]'>
            <h3 className='font-semibold leading-[20px] text-[#000000] mr-[23px] underline decoration-2  decoration-[#0189EB] underline-offset-[12px]'>
                Business Trip
            </h3>
            <h3 className='font-semibold leading-[20px] text-[#69696E]'>Vacationing </h3>
         </div>
         <form className='mt-4 md:mt-6 flex md:flex-row flex-col gap-4 md:gap-[24px]'>
            <div className='flex flex-col'>
              <label htmlFor="destination" className='font-medium text-[#000000] mb-[8px]'>
                Destination
              </label>
              <input type="text" id='destination' placeholder='What is your destination'  className='border w-[321px] md:w-[279px] h-[47px] rounded-[100px] px-4 pt-[13px] pb-[14px] md:px-5  md:py-2'/>
            </div>
            <div className='flex  gap-[21px] md:gap-[24px]'> 
              <div className='flex flex-col '>
                <label htmlFor="check-in" className='font-medium text-[#000000] mb-[8px]'>
                  Check-in
                </label>
                <input type="text" id='check-in' placeholder='DD/MM/YYYY'  className='border w-[150px] md:w-[160px] h-[47px] rounded-[100px] px-4 pt-[13px] pb-[14px] md:px-5  md:py-2'/>
              </div>
              <div className='flex flex-col '>
                <label htmlFor="check-out" className='font-medium text-[#000000] mb-[8px]'>
                  Check-out
                </label>
                <input type="text" id='check-out' placeholder='DD/MM/YYYY' className='border w-[150px] md:w-[160px] h-[47px] rounded-[100px] px-4 pt-[13px] pb-[14px] md:px-5  md:py-2'/>
              </div>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="guests" className='font-medium text-[#000000] mb-[8px]'>
                Guests
              </label>
              <input type="text" id='guests' placeholder='Guests' className='border w-[160px] h-[47px] rounded-[100px] px-4 pt-[13px] pb-[14px] md:px-5  md:py-2'/>
            </div>
            <button className='w-[321px] md:w-[180px] h-[47px] font-semibold text-lg text-white rounded-[100px] bg-gradient-to-r from-[#DD727D] to-[#834047] mt-4 md:mt-8'>
              <Link to='/travelPlanePage'> Explore Plans</Link>              
            </button>
         </form>
      </div>
    </div>
  );
};

export default Banner;