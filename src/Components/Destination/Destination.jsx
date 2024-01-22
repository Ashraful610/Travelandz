import React from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import cardImage1 from '../../assets/images/card-1.png'
import cardImage2 from '../../assets/images/card-2.png'
import cardImage3 from '../../assets/images/card-3.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination , HashNavigation } from 'swiper/modules';

const Destination = () => {
    
 return (
    <div>
      <div className='h-[805px] pt-[180px]'>
        {/* ----------- section heading and icons div ------------- */}
        <div className='flex justify-between'>
            {/* ------- heading div --------- */}
           <div className='w-[872px]'>
              <h3 className='text-[35px] font-bold'>
                Discover Unique Destinations with AI Trip Itinerary.
              </h3>
              <p className='text-lg w-[848px] mt-6'>
                Explore our AI's handpicked selection of the top 10 unique cities and create lifelong vacation's  memories using AI trip planner. Use Travelandz AI planner to experience local culture and nature in these breathtaking destinations.
              </p>
           </div>
           {/* ------ arrow icons div ---------- */}
           <div className='w-[164px] flex gap-6'>
              <div className='w-[70px] h-[70px] bg-[#DB6B76] rounded-full flex justify-center items-center '>
               <IoIosArrowRoundBack className='text-white text-4xl'/>  
              </div>
              <div className='w-[70px] h-[70px] border border-[#F1C4C8] rounded-full flex justify-center items-center '>
               <IoIosArrowRoundForward className='text-white text-4xl text-[#DB6B76]'/>  
              </div>
           </div>
        </div>
        {/* ------------- destination card slider --------- */}
        <Swiper
         slidesPerView={3}
         spaceBetween={24}
         loop={true}
         pagination={{
          clickable: true,
         }}
         modules={[Pagination,HashNavigation]}
         className="mySwiper mt-[60px]"
         
        >
            <SwiperSlide className='h-[630px]'> 
              <div className='h-[540px] bg-[url(https://i.ibb.co/zXBJ82M/card-1.png)] relative'>  
                <div className='absolute bottom-0 left-0 px-5  bg-gradient-to-b from-black/0 to-black w-full h-[100px] rounded-b-[20px] flex items-center'>
                  <h2 className='text-[30px] font-bold text-white'>Dubai</h2>
                </div>
              </div> 
            </SwiperSlide>
            <SwiperSlide className='h-[630px]'> 
              <div className='h-[540px] bg-[url(https://i.ibb.co/kxm9NfG/card-2.png)] relative'>  
                <div className='absolute bottom-0 left-0 px-5  bg-gradient-to-b from-black/0 to-black w-full h-[100px] rounded-b-[20px] flex items-center'>
                  <h2 className='text-[30px] font-bold text-white'>Petra</h2>
                </div>
              </div> 
            </SwiperSlide>
            <SwiperSlide className='h-[630px]'> 
              <div className='h-[540px] bg-[url(https://i.ibb.co/R45rYtP/card-3.png)] relative'>  
                <div className='absolute bottom-0 left-0 px-5  bg-gradient-to-b from-black/0 to-black w-full h-[100px] rounded-b-[20px] flex items-center'>
                  <h2 className='text-[30px] font-bold text-white'>Istanbul</h2>
                </div>
              </div> 
            </SwiperSlide>
            <SwiperSlide className='h-[630px]'> 
              <div className='h-[540px] bg-[url(https://i.ibb.co/zXBJ82M/card-1.png)] relative'>  
                <div className='absolute bottom-0 left-0 px-5  bg-gradient-to-b from-black/0 to-black w-full h-[100px] rounded-b-[20px] flex items-center'>
                  <h2 className='text-[30px] font-bold text-white'>Dubai</h2>
                </div>
              </div> 
            </SwiperSlide>
            <SwiperSlide className='h-[630px]'> 
              <div className='h-[540px] bg-[url(https://i.ibb.co/kxm9NfG/card-2.png)] relative'>  
                <div className='absolute bottom-0 left-0 px-5  bg-gradient-to-b from-black/0 to-black w-full h-[100px] rounded-b-[20px] flex items-center'>
                  <h2 className='text-[30px] font-bold text-white'>Petra</h2>
                </div>
              </div> 
            </SwiperSlide>
            <SwiperSlide className='h-[630px]'> 
              <div className='h-[540px] bg-[url(https://i.ibb.co/R45rYtP/card-3.png)] relative'>  
                <div className='absolute bottom-0 left-0 px-5  bg-gradient-to-b from-black/0 to-black w-full h-[100px] rounded-b-[20px] flex items-center'>
                  <h2 className='text-[30px] font-bold text-white'>Istanbul</h2>
                </div>
              </div> 
            </SwiperSlide>
       </Swiper>
      </div>      
    </div>
 );
};

export default Destination;