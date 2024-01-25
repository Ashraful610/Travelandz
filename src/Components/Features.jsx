import React from 'react';
import icon1 from '../assets/images/icon-1.png'
import icon2 from '../assets/images/icon-2.png'
import icon3 from '../assets/images/icon-3.png'

const Features = () => {
  return (
    <div className='mt-[81px] md:mt-[180px]'>
      <div className='h-fit md:h-[569px]'>
        {/* ------------ heading div ----------- */}
        <div className='w-[353px] md:w-[848px] mx-auto md:text-center '>
            <h2 className='text-[25px] md:text-[40px] font-bold '>
                Unparalleled Features for Effortless <br className='md:block hidden'/> AI Trip Planning
            </h2>
            <p className='text-lg mt-6'>
            Travelandz is an AI trip planner that uses the tools of travel agencies, allowing it to offer the best price for hotels and activities available.
            </p>
        </div>
        {/* ------------ featurer card div -------- */}
        <div className='mt-[40px] md:mt-[60px] flex md:flex-row flex-col gap-6 px-5 md:px-0'>
            {/* --------- feature 1 ---------- */}
            <div className='w-[350xp] h-[362px] md:w-[412px] md:h-[339px] rounded-[20px] border border-[#E5E5E580] bg-[#FFF] p-6'>
             <img src={icon1} alt="icons" className='w-[42px] h-[42px]'/>
             <h3 className='text-[25px] font-bold mt-8 mb-6'>Personalized Planning</h3>
             <p className='text-lg h-[184px] '>
                Our AI-driven platform crafts unique travel plans tailored to your preferences, ensuring a unique experience that suits you. Share your plans with the Travelandz community to receive valuable suggestions and ideas from fellow travelers.
             </p>
            </div>
            {/* --------- feature 2 ---------- */}
            <div className='w-[350xp] h-[362px] md:w-[412px] md:h-[339px] rounded-[20px] border border-[#E5E5E580] bg-[#FFF] p-6'>
            <img src={icon2} alt="icons" className='w-[42px] h-[42px]'/>
            <h3 className='text-[25px] font-bold mt-[32px] mb-6'>Real-time Availability</h3>
            <p className='text-lg'>
                Our AI-driven platform crafts unique travel plans tailored to your preferences, ensuring a unique experience that suits you. Share your plans with the Travelandz community to receive valuable suggestions and ideas from fellow travelers.
            </p>
            </div>
            {/* --------- feature 3 ---------- */}
            <div className='w-[350xp] h-[362px] md:w-[412px] md:h-[339px] rounded-[20px] border border-[#E5E5E580] bg-[#FFF] p-6'>
            <img src={icon3} alt="icons" className='w-[42px] h-[42px]'/>
            <h3 className='text-[25px] font-bold mt-[32px] mb-6'>User-friendly Interface</h3>
            <p className='text-lg'>
                Our AI-driven platform crafts unique travel plans tailored to your preferences, ensuring a unique experience that suits you. Share your plans with the Travelandz community to receive valuable suggestions and ideas from fellow travelers.
            </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Features;