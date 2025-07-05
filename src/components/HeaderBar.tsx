// Header.jsx
import {
  FiEyeOff,
  
  FiDownload,
  FiUpload,
  
  
  FiSearch,
} from "react-icons/fi";
import { LuArrowUpDown,  } from "react-icons/lu";
import { FaRegShareSquare } from "react-icons/fa";
import { TbArrowFork ,TbDots} from "react-icons/tb";
import { FaBell } from 'react-icons/fa';
import { PiNumberCircleTwoFill } from 'react-icons/pi';
import { TbLayoutGrid } from "react-icons/tb"; 
import { HiChevronRight } from "react-icons/hi";
import { RiFilter3Fill ,RiBookLine } from "react-icons/ri";

interface ToolbarButtonProps {
  icon: React.ReactNode;
  label: string;
}


export default function Header() {
  return (
    <div className="w-full border-2 border-solid border-gray-200 border-b px-6 py-4 space-y-3 ">
      {/* Top Row */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 whitespace-nowrap">
          <RiBookLine className="-rotate-90 text-gray-800 text-xl mx-2 "/>
          <span className="text-gray-400 cursor-pointer">Workspace</span>
          <HiChevronRight className="mx-1 text-gray-400" />
          <span className="text-gray-400 cursor-pointer">Folder 2</span>
          <HiChevronRight className="mx-1 text-gray-400" />
          <span className="font-semibold text-gray-700 cursor-pointer">Spreadsheet 3</span>
              <TbDots className="text-gray-400 text-sm mx-2" />
        </div>

        {/* Search + Profile */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search within sheet"
              className="pl-3 pr-10 py-1.5 border border-gray-300 rounded-md text-sm w-64 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <FiSearch className="absolute right-3 top-2.5 text-gray-500 text-sm" />
          </div>

          {/* Profile */}
       <div className="relative inline-block">
      {/* Main Icon */}
      <FaBell className="text-3xl text-gray-700 cursor-pointer" />
      
      {/* Badge - small circle on top-right */}
      <div className="absolute -top-1 -right-1 bg-white rounded-full w-5 h-5 flex items-center justify-center text-green text-xs font-bold">
        <PiNumberCircleTwoFill className="w-4 h-4" />
      </div>
    </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://i.pravatar.cc/32?img=5"
              alt="avatar"
              className="w-8 h-8 rounded-full cursor-pointer"
            />
            <div className="text-sm leading-tight">
              <div className="font-medium text-gray-700">John Doe</div>
              <div className="text-xs text-gray-400">john.doe@email.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Toolbar */}
      <div className="flex justify-between items-center  flex-wrap gap-4">
        {/* Left buttons */}
        <div className="flex items-center space-x-2 cursor-pointer text-gray-900 font-medium ">
          <span className="gap-1 border border-gray-50 px-3 py-1.5 rounded-md  hover:bg-gray-100 text-gray-700">
             Tool bar <span className="ml-1 text-gray-500 text-lg">&raquo;</span>
          </span>


          <ToolbarButton icon={<FiEyeOff />} label="Hide fields" />
          <ToolbarButton icon={<LuArrowUpDown />} label="Sort" />
          <ToolbarButton icon={<RiFilter3Fill />} label="Filter" />
          <ToolbarButton icon={<TbLayoutGrid />} label="Cell view" />
        </div>

        {/* Right buttons */}
        <div className="flex items-center space-x-2">
          <ToolbarButton icon={<FiUpload />} label="Import" />
          <ToolbarButton icon={<FiDownload />} label="Export" />
          <ToolbarButton icon={<FaRegShareSquare />} label="Share" />
          <button className="flex items-center gap-1 bg-green-700 text-white text-sm px-4 py-1.5 rounded-md hover:bg-green-800">
          <TbArrowFork className="rotate-180  text-white gap-3 cursor-pointer" />
            New Action
          </button>
        </div>
      </div>
    </div>
  );
}

// Reusable toolbar button
const ToolbarButton: React.FC<ToolbarButtonProps>=({ icon, label }) =>{
  return (
    <button className="flex cursor-pointer items-center gap-1 border border-gray-50 px-3 py-1.5 rounded-md text-sm hover:bg-gray-100 text-gray-700">
      {icon}
      {label}
    </button>
  );
}
