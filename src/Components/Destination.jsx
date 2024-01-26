import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination , HashNavigation } from 'swiper/modules';
import { GoArrowRight } from 'react-icons/go';

const Destination = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [space , setSpace] = useState(24)

    useEffect(() => {
        const updateSlidesPerView = () => {
            const width = window.innerWidth;
            if(width >= 768) {
                setSlidesPerView(3);
            }
            else if (width <= 576){
              setSpace(2)
                setSlidesPerView(1)
            }
        };
        updateSlidesPerView();
        window.addEventListener('resize', updateSlidesPerView);
        window.removeEventListener('resize', updateSlidesPerView);
    }, []);
    
 return (
    <div id='famousDestination'>
      <div className=' mx-auto h-fit md:h-[805px] mt-[100px] md:mt-[180px]' >
        {/* ----------- section heading and icons div ------------- */}
        <div className='flex justify-between'>
            {/* ------- heading div --------- */}
           <div className='w-[353px] mx-auto md:m-0 md:w-[872px] '>
              <h3 className='text-[25px] md:text-[35px] font-bold pr-2'>
                Discover Unique Destinations with AI Trip Itinerary.
              </h3>
              <p className='text-lg  w-[353px] md:w-[848px] mt-6'>
                Explore our AI's handpicked selection of the top 10 unique cities and create lifelong vacation's  memories using AI trip planner. Use Travelandz AI planner to experience local culture and nature in these breathtaking destinations.
              </p>
           </div>
           {/* ------ arrow icons div ---------- */}
           <div className='w-[164px] flex gap-6 md:flex hidden'>
              <div className='w-[70px] h-[70px] bg-[#DB6B76] rounded-full flex justify-center items-center '>
               <IoIosArrowRoundBack className='text-white text-4xl'/>  
              </div>
              <div className='w-[70px] h-[70px] border border-[#F1C4C8] rounded-full flex justify-center items-center '>
               <IoIosArrowRoundForward className='text-4xl text-[#DB6B76]'/>  
              </div>
           </div>
        </div>
        {/* ------------- destination card slider --------- */}
        <Swiper
         slidesPerView={slidesPerView}
         spaceBetween={space}
         loop={true}
         pagination={{clickable: true}}
         modules={[Pagination,HashNavigation]}
         className="mySwiper mt-10 md:mt-[60px] w-[350px] md:w-full"        
        >
          <SwiperSlide className='pb-[50px]'> 
            <div className='h-[540px] rounded-[20px] bg-[url(https://i.ibb.co/zXBJ82M/card-1.png)] bg-no-repeat bg-cover group relative overflow-hidden'>  
              <div className='absolute bottom-[-50%] group-hover:bottom-0 duration-500 left-0 px-[27.18px] md:px-5  bg-gradient-to-b from-black/10 to-black w-full h-[250px] rounded-b-[20px] flex flex-col justify-center'>
                <h2 className='text-[30px] font-bold text-white'>Dubai</h2>
                <p className='text-white text-lg leading-[22px]'>
                  Immerse yourself in the modern city known for its impressive skyline, luxury shopping, and man-made attractions such as the iconic Burj Khalifa, the world's tallest building.
                </p>
                <p className='text-lg font-semibold text-white mt-[12px]'>
                  Plane your trpe <GoArrowRight className='inline text-xl' />
                </p>
              </div>
            </div> 
          </SwiperSlide>
          <SwiperSlide className='pb-[50px]'> 
            <div className='h-[540px] rounded-[20px] bg-[url(https://i.ibb.co/kxm9NfG/card-2.png)] bg-no-repeat bg-cover group relative overflow-hidden'>  
              <div className='absolute bottom-[-50%] group-hover:bottom-0 duration-500 left-0 px-[27.18px] md:px-5  bg-gradient-to-b from-black/10 to-black w-full h-[250px] rounded-b-[20px] flex flex-col justify-center'>
                <h2 className='text-[30px] font-bold text-white'>Petra</h2>
                <p className='text-white text-lg leading-[22px]'>
                  Immerse yourself in the modern city known for its impressive skyline, luxury shopping, and man-made attractions such as the iconic Burj Khalifa, the world's tallest building.
                </p>
                <p className='text-lg font-semibold text-white mt-[12px] '>
                  Plane your trpe <GoArrowRight className='inline text-xl' />
                </p>
              </div>
            </div> 
          </SwiperSlide>
          <SwiperSlide className='pb-[50px]'> 
            <div className='h-[540px] rounded-[20px] bg-[url(https://i.ibb.co/R45rYtP/card-3.png)] bg-no-repeat bg-cover group relative overflow-hidden'>  
              <div className='absolute bottom-[-50%] group-hover:bottom-0 duration-500 left-0 px-[27.18px] md:px-5  bg-gradient-to-b from-black/10 to-black w-full h-[250px] rounded-b-[20px] flex flex-col justify-center'>
                <h2 className='text-[30px] font-bold text-white'>Istanbul</h2>
                <p className='text-white text-lg leading-[22px]'>
                  Immerse yourself in the modern city known for its impressive skyline, luxury shopping, and man-made attractions such as the iconic Burj Khalifa, the world's tallest building.
                </p>
                <p className='text-lg font-semibold text-white mt-[12px]'>
                  Plane your trpe <GoArrowRight className='inline text-xl' />
                </p>
              </div>
            </div> 
          </SwiperSlide>
          <SwiperSlide className='pb-[50px]'> 
            <div className='h-[540px] rounded-[20px] bg-[url(https://i.ibb.co/zXBJ82M/card-1.png)] bg-no-repeat bg-cover group relative overflow-hidden'>  
              <div className='absolute bottom-[-50%] group-hover:bottom-0 duration-500 left-0 px-[27.18px] md:px-5  bg-gradient-to-b from-black/10 to-black w-full h-[250px] rounded-b-[20px] flex flex-col justify-center'>
                <h2 className='text-[30px] font-bold text-white'>Dubai</h2>
                <p className='text-white text-lg leading-[22px]'>
                  Immerse yourself in the modern city known for its impressive skyline, luxury shopping, and man-made attractions such as the iconic Burj Khalifa, the world's tallest building.
                </p>
                <p className='text-lg font-semibold text-white mt-[12px]'>
                  Plane your trpe <GoArrowRight className='inline text-xl' />
                </p>
              </div>
            </div> 
          </SwiperSlide>
          <SwiperSlide className='pb-[50px]'> 
            <div className='h-[540px] rounded-[20px] bg-[url(https://i.ibb.co/kxm9NfG/card-2.png)] bg-no-repeat bg-cover group relative overflow-hidden'>  
              <div className='absolute bottom-[-50%] group-hover:bottom-0 duration-500 left-0 px-[27.18px] md:px-5  bg-gradient-to-b from-black/10 to-black w-full h-[250px] rounded-b-[20px] flex flex-col justify-center'>
                <h2 className='text-[30px] font-bold text-white'>Petra</h2>
                <p className='text-white text-lg leading-[22px]'>
                  Immerse yourself in the modern city known for its impressive skyline, luxury shopping, and man-made attractions such as the iconic Burj Khalifa, the world's tallest building.
                </p>
                <p className='text-lg font-semibold text-white mt-[12px]'>
                  Plane your trpe <GoArrowRight className='inline text-xl' />
                </p>
              </div>
            </div> 
          </SwiperSlide>
          <SwiperSlide className='pb-[50px]'> 
            <div className='h-[540px] rounded-[20px] bg-[url(https://i.ibb.co/R45rYtP/card-3.png)] bg-no-repeat bg-cover group relative overflow-hidden'>  
              <div className='absolute bottom-[-50%] group-hover:bottom-0 duration-500 left-0 px-[27.18px] md:px-5  bg-gradient-to-b from-black/10 to-black w-full h-[250px] rounded-b-[20px] flex flex-col justify-center'>
                <h2 className='text-[30px] font-bold text-white'>Istanbul</h2>
                <p className='text-white text-lg leading-[22px]'>
                  Immerse yourself in the modern city known for its impressive skyline, luxury shopping, and man-made attractions such as the iconic Burj Khalifa, the world's tallest building.
                </p>
                <p className='text-lg font-semibold text-white mt-[12px]'>
                  Plane your trpe <GoArrowRight className='inline text-xl' />
                </p>
              </div>
            </div> 
          </SwiperSlide>
        </Swiper>
      </div>      
    </div>
 );
};

export default Destination;