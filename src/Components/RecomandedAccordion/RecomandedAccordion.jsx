import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Activits from "../Activits/Activits";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
const RecomandedAccordion = () =>{
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open}/>} className="">
        <AccordionHeader onClick={() => handleOpen(1)} className={`h-[72px] border-none bg-[#F1F1F1] px-6 ${open === 1 ? 'rounded-t-[20px]': 'rounded-[20px] mb-6'} `}>
           <div className="flex items-center gap-[40px]">
             <h2 className="text-lg font-bold">Day 1</h2>
             <p className="text-base text-[#8E8E92]">03 June 2023</p>
           </div>
        </AccordionHeader>
        <AccordionBody className={`bg-white h-[400px] rounded-b-[20px] p-6 border ${open === 1 &&'mb-6'}`}>
          <Activits/>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open}/>} className="">
        <AccordionHeader onClick={() => handleOpen(2)} className={`h-[72px] border-none bg-[#F1F1F1] px-6 ${open === 2 ? 'rounded-t-[20px]': 'rounded-[20px] mb-6'} `}>
           <div className="flex items-center gap-[40px]">
             <h2 className="text-lg font-bold">Day 2</h2>
             <p className="text-base text-[#8E8E92]">04 June 2023</p>
           </div>
        </AccordionHeader>
        <AccordionBody className={`bg-white h-[400px] rounded-b-[20px] p-6 border ${open === 2 &&'mb-6'}`}>
          <Activits/>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open}/>} className="">
        <AccordionHeader onClick={() => handleOpen(3)} className={`h-[72px] border-none bg-[#F1F1F1] px-6 ${open === 3 ? 'rounded-t-[20px]': 'rounded-[20px] mb-6'} `}>
           <div className="flex items-center gap-[40px]">
             <h2 className="text-lg font-bold">Day 3</h2>
             <p className="text-base text-[#8E8E92]">05 June 2023</p>
           </div>
        </AccordionHeader>
        <AccordionBody className={`bg-white h-[400px] rounded-b-[20px] p-6 border ${open === 3 &&'mb-6'}`}>
          <Activits/>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open}/>} className="">
        <AccordionHeader onClick={() => handleOpen(4)} className={`h-[72px] border-none bg-[#F1F1F1] px-6 ${open === 4 ? 'rounded-t-[20px]': 'rounded-[20px] mb-6'} `}>
           <div className="flex items-center gap-[40px]">
             <h2 className="text-lg font-bold">Day 4</h2>
             <p className="text-base text-[#8E8E92]">06 June 2023</p>
           </div>
        </AccordionHeader>
        <AccordionBody className={`bg-white h-[400px] rounded-b-[20px] p-6 border ${open === 4 &&'mb-6'}`}>
          <Activits/>
        </AccordionBody>
      </Accordion>
    </>
  );
}

export default RecomandedAccordion