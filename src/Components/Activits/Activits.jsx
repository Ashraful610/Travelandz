import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
   
  const Activits =() =>{
    const data = [
        {
          label: "Morning",
          value: "morning",
          desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
        },
        {
          label: "Afternoon",
          value: "afternoon",
          desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
          label: "Daining",
          value: "daining",
          desc: ` it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        }
      ];
   
    return (
      <Tabs value="html" className='w-[387px] '>
        <TabsHeader>
          {data.map(({ label ,value}) => (
            <Tab key={label} value={value} className=" px-4 py-[7px] bg-[#F4F4F4] mx-4 rounded-[100px]">
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ desc ,value }) => (
            <TabPanel key={desc} value={value} className="h-[294px] border rounded-[15px] mt-6">
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }

  export default Activits;