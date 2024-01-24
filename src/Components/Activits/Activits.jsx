import React from "react";
import { ImLocation } from "react-icons/im";
import { FaCirclePlus, FaUserGroup } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";
   
  const Activits =() =>{
    const [open, setOpen] = React.useState(1);
 
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    
    return (
      <div className="w-full">
        {/* ------- button div --------- */}
        <div className="flex justify-between">
          <div className="flex gap-4">
            <button className={`px-4 py-[7px] border rounded-[100px] ${open === 1 ? 'bg-white font-semibold text-black border-[#EC6274]': 'bg-[#F4F4F4]'}`} onClick={()=>handleOpen(1)}>
              Morning
            </button>
            <button className={`px-4 py-[7px] border rounded-[100px] ${open === 2 ? 'bg-white font-semibold text-black border-[#EC6274]': 'bg-[#F4F4F4]'}`} onClick={()=>handleOpen(2)}>
              Afternoon
            </button>
            <button className={`px-4 py-[7px] border rounded-[100px] ${open === 3 ? 'bg-white font-semibold text-black border-[#EC6274]': 'bg-[#F4F4F4]'}`} onClick={()=>handleOpen(3)}>
              Dining
            </button>
          </div>
          <button className="flex items-center gap-2">
            <FaCirclePlus className="text-[#EC6274]"/>
            <h3 className="text-[#EC6274] underline font-semibold text-lg">Add activity</h3>
          </button>
        </div>
        {/* ---------- activiti card 1 ----------- */}
        <div className={`w-[387px] h-[294px] rounded-[15px] border mt-[26px] ${open === 1 ? 'block ' : 'hidden'}`}>
          <div className="h-[140px] bg-[url(https://i.ibb.co/R4K43qn/images.jpg)] bg-cover rounded-t-[15px] bg-no-repeat object-cover p-4 relative">
            <div className="bg-red-500 w-8 h-8 rounded-full text-white flex justify-center items-center absolute right-4">
              <RiDeleteBin5Fill />
            </div>
          </div>
          <div className="p-4">
            <div className="h-[74px]">
              <h2 className="text-lg font-bold mb-2">Alcudia Bay 50-minutes tour from Alcudia</h2>
              <div className="flex gap-6 ">
                <p className="text-[#8E8E92] flex gap-2 items-center">
                  <ImLocation />
                  Carrer de la Mareperla
                </p>
                <p className="text-[#8E8E92] flex gap-2 items-center">
                  <FaUserGroup />
                  2 pax
                </p>
              </div>
            </div>
            <h2 className="text-[25px] font-bold mt-4">USD 344</h2>
          </div>
        </div>
         {/* ---------- activiti card 1 ----------- */}
        <div className={`w-[387px] h-[294px] rounded-[15px] border mt-[26px] ${open === 2 ? 'block' : 'hidden'}`}>
          <div className="h-[140px] bg-[url(https://i.ibb.co/dgXNzCy/images-1.jpg)] bg-cover rounded-t-[15px] bg-no-repeat object-cover p-4 relative">
            <div className="bg-red-500 w-8 h-8 rounded-full text-white flex justify-center items-center absolute right-4">
              <RiDeleteBin5Fill />
            </div>
          </div>
          <div className="p-4">
            <div className="h-[74px]">
              <h2 className="text-lg font-bold mb-2">Alcudia Bay 50-minutes tour from Alcudia</h2>
              <div className="flex gap-6 ">
                <p className="text-[#8E8E92] flex gap-2 items-center">
                  <ImLocation />
                  Carrer de la Mareperla
                </p>
                <p className="text-[#8E8E92] flex gap-2 items-center">
                  <FaUserGroup />
                  3 pax
                </p>
              </div>
            </div>
            <h2 className="text-[25px] font-bold mt-4">USD 311</h2>
          </div>
        </div>
         {/* ---------- activiti card 1 ----------- */}
        <div className={`w-[387px] h-[294px] rounded-[15px] border mt-[26px] ${open === 3 ? 'block' : 'hidden'}`}>
          <div className="h-[140px] bg-[url(https://i.ibb.co/dtCdVLw/download.jpg)] bg-cover rounded-t-[15px] bg-no-repeat object-cover p-4 relative">
            <div className="bg-red-500 w-8 h-8 rounded-full text-white flex justify-center items-center absolute right-4">
              <RiDeleteBin5Fill />
            </div>
          </div>
          <div className="p-4">
            <div className="h-[74px]">
              <h2 className="text-lg font-bold mb-2">Alcudia Bay 50-minutes tour from Alcudia</h2>
              <div className="flex gap-6 ">
                <p className="text-[#8E8E92] flex gap-2 items-center">
                  <ImLocation />
                  Carrer de la Mareperla
                </p>
                <p className="text-[#8E8E92] flex gap-2 items-center">
                  <FaUserGroup />
                  4 pax
                </p>
              </div>
            </div>
            <h2 className="text-[25px] font-bold mt-4">USD 510</h2>
          </div>
        </div>
      </div>
    );
  }

  export default Activits;