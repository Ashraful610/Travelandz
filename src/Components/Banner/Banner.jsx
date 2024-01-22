import React from 'react';

const Banner = () => {
  return (
    <div className='bg-[url(https://i.ibb.co/C8YKwnq/Rectangle-6742.png)] w-full h-[660px] flex flex-col justify-center items-center'>
      {/* ------------ banner heading div ----------- */}
      <div className='w-[893px] text-[#FFFFFF] text-center'>
        <h2 className='font-extrabold text-[50px]  leading-[63px] '>
            Experience Wanderlust at its Finest with AI-Powered Travel Planner
        </h2>
        <p className='text-lg leading-[22px] mt-[24px]'>
            Discover the best prices, secure your mobile tickets, and set off on a journey of a lifetime
        </p>
      </div>
      {/* ------------ explore plans div --------- */}
      <div className='w-[1066px] h-[186px] bg-white rounded-[20px] mt-[60px] px-6 py-7'>
         <div className='flex border-b-[1px] pb-[10px]'>
            <h3 className='font-semibold leading-[20px] text-[#000000] mr-[23px] underline decoration-2  decoration-[#0189EB] underline-offset-[12px]'>
                Business Trip
            </h3>
            <h3 className='font-semibold leading-[20px] text-[#69696E]'>Vacationing </h3>
         </div>
         <form className='mt-6 flex gap-[24px]'>
            <div className='flex flex-col'>
              <label htmlFor="destination" className='font-medium text-[#000000] mb-[8px]'>
                Destination
              </label>
              <input type="text" id='destination' placeholder='What is your destination'  className='border w-[279px] h-[47px] rounded-[100px] px-5 py-2'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="check-in" className='font-medium text-[#000000] mb-[8px]'>
                Check-in
              </label>
              <input type="text" id='check-in' placeholder='DD/MM/YYYY'  className='border w-[160px] h-[47px] rounded-[100px] px-5 py-2'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="check-out" className='font-medium text-[#000000] mb-[8px]'>
                Check-out
              </label>
              <input type="text" id='check-out' placeholder='DD/MM/YYYY' className='border w-[160px] h-[47px] rounded-[100px] px-5 py-2'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="guests" className='font-medium text-[#000000] mb-[8px]'>
                Guests
              </label>
              <input type="text" id='guests' placeholder='Guests' className='border w-[160px] h-[47px] rounded-[100px] px-5 py-2'/>
            </div>
            <button className='w-[180px] h-[47px] font-semibold text-lg text-white rounded-[100px] bg-gradient-to-r from-[#DD727D] to-[#834047] mt-[32px]'>
              Explore Plans
            </button>
         </form>
      </div>
    </div>
  );
};

export default Banner;