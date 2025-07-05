import {
  FaUser,
  FaCalendarAlt,

  FaCheckCircle,
  FaClock,
  FaGlobe
} from 'react-icons/fa';
import { GrPowerCycle } from "react-icons/gr";
import { IoBagRemove } from "react-icons/io5";
import { HiHashtag } from "react-icons/hi2";

import { FaAngleDown } from "react-icons/fa6";

import { FiLink2,FiPlus  } from "react-icons/fi";
import { TbDots ,TbArrowFork } from "react-icons/tb";


import SpreadsheetRow from './SpreadsheetRow';

const headers = [
  { icon1:<HiHashtag className="text-gray-400 text-xl" /> },
  { icon1: <IoBagRemove className="text-gray-400 text-[15px]" />,icon2:<FaAngleDown />, label: 'Job Request' },
  { icon1: <FaCalendarAlt className="text-gray-400 text-[15px]" />,icon2:<FaAngleDown />, label: 'Submitted' },
  { icon1: <FaClock className="text-gray-400 text-[15px]" />,icon2:<FaAngleDown />, label: 'Status' },
  { icon1: <FaUser className="text-gray-400 text-[15px]" />,icon2:<FaAngleDown />, label: 'Submitter' },
  { icon1: <FaGlobe className="text-gray-400 text-[15px] bg-[#ecdeeee4]" />, icon2:<FaAngleDown />,label: 'URL' },
  { icon1: <FaCheckCircle className="text-gray-400 text-[15px] bg-[#e5f1e5]" />, icon2:<FaAngleDown />,label: 'Assigned' },
  {  label: 'Priority',  }, 
  {  label: 'Due Date' ,},
  {  label: 'Est. Value',},
  { label: '' },
];

const realData = [
  {
    request: "Launch social media campaign",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    due: "20-11-2024",
    value: "6,200,000",
  },
  {
    request: "Update press kit",
    submitted: "30-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhan.com",
    assigned: "Tejas Pandey",
    priority: "High",
    due: "30-10-2024",
    value: "3,500,000",
  },
  {
    request: "User testing feedback",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohnson.com",
    assigned: "Rachel Lee",
    priority: "Medium",
    due: "10-12-2024",
    value: "4,750,000",
  },
  {
    request: "Design new features",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen.com",
    assigned: "Tom Wright",
    priority: "Low",
    due: "15-01-2025",
    value: "5,900,000",
  },
  {
    request: "Financial report Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabrown.com",
    assigned: "Kevin Smith",
    priority: "Low",
    due: "30-01-2025",
    value: "2,800,000",
  },
];

// Add empty rows after real data to reach 22 total rows
const data = [
  ...realData,
  ...Array.from({ length: 17 }, () => ({})), // 22 - 5 = 17 empty rows
];

const colorMap: Record<string, string> = {
  'Assigned':'bg-[#e5f1e5] text-[#6E756E]',
  'Priority': ' bg-[#ecdeeee4] text-[#6D638A]',
  'Due Date': 'bg-[#ecdeeee4] text-[#6D638A]',
  'Est. Value': 'bg-orange-100 text-[#97756A] ',
};

const Spreadsheet = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full border border-white text-sm bg-white">
        {/* Grouped Header Row */}
        <thead className="bg-gray-0  font-semibold">
          <tr>
            <th className=" bg-white p-2 " />
            <th className=" p-2 text-left bg-[#E7E7E7] " colSpan={4}>
              <div className='inline-flex items-center justify-between gap-2'>
              <div className="inline-flex items-center justify-between gap-2 bg-[#f3f3f3] cursor-pointer px-3 py-1 text-sm rounded-md font-normal text-gray-700 shadow-sm border border-gray-200">
                <FiLink2 className="text-blue-400" />
                Q3 Financial Overview
                
              </div>
              <GrPowerCycle className='text-orange-300 gap-3 py-1 text-2xl '/>
              </div>
            </th>
            <th className="bg-white p-2" />
            <th className="bg-[#D6E4D8] border-white border-2 p-2">
            <div className="flex items-center justify-center text-[17px] cursor-pointer font-medium px-5 gap-1 text-[#565B56] ">
              <TbArrowFork className="rotate-180  text-[#B0BAB0] gap-3" />
              ABC
              <TbDots className="text-[#565B56] text-sm" />
            </div>
          </th>

          <th className="bg-[#E0D3FF] border-white border-2" colSpan={2}>
            <div className="flex items-center justify-center  gap-1 text-[#5f5676] text-[17px] font-medium px-5 cursor-pointer">
             <TbArrowFork className="rotate-180  text-white gap-3" />
              Answer a Question
              <TbDots className="text-gray-400 text-sm" />
            </div>
          </th>

          <th className="bg-[#FFC6B2]  border-r-3 border-dashed border-r-gray-300"> 
            <div className="flex items-center justify-center gap-1  cursor-pointer  text-[#71574F] text-[17px] font-medium px-5 ">
              <TbArrowFork className="rotate-180  text-white gap-3" />
              Extract
              <TbDots className="text-gray-400 text-sm" />
            </div>
          </th>
            <th className=" px-10 py-2 border-r-3 text-center border-dashed border-gray-300 cursor-pointer">
              <FiPlus className='text-gray-500 text-xl ' />
            </th>
          </tr>
        </thead>

        {/* Column Labels */}
        <thead>
  <tr>
    {headers.map((header, index) => {
      // Apply color conditionally based on label
       const bgColor = header.label ? colorMap[header.label] ?? '' : '';

       
      // Identify last two columns
      const isLastTwo = index === headers.length - 1 || index === headers.length - 2;

      // Solid white borders on top, left, bottom
      const baseBorder = isLastTwo
        ? ' border-l border-b border-gray-50'
        : 'border border-white';

      // Dashed right border only if last two columns
      const dashedRight = isLastTwo
        ? 'border-r-2 border-dashed border-gray-300'
        : '';

      return (
        <th
          key={index}
          className={`${baseBorder} ${dashedRight}  px-4 py-2 text-left ${bgColor}`}
        >
          <div className="flex justify-between  gap-2">
            <div className="flex gap-2 cursor-pointer ">
            {header.icon1}
            {header.label}
            </div>
            <div className='text-gray-400 flex justify-end cursor-pointer'>
                {header.icon2}
            </div>
          </div>
        </th>
      );
    })}
  </tr>
</thead>


        {/* Table Body */}
        <tbody className="text-gray-800">
          {data.map((row, index) => (
            <SpreadsheetRow key={index} index={index} {...row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;
