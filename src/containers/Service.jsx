import React from "react";
import { AiOutlineFileProtect } from "react-icons/ai";
import { FaTooth } from "react-icons/fa";
import { GiToothbrush } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

export const Service = () => {
  return (
    <div className="bg-gray-800 text-white sm:px-40 px-10 py-20">
      <div className="">
        <h1 className="text-3xl font-bold tracking-widest">Our Service</h1>
        <div className="bg-[#00CCFF] h-1 w-16 mt-4 mb-8"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-10 gap-5 py-8">
        <div>
          <GiToothbrush className="text-4xl mb-1 ml-2" />
          <p>Teeth Whitening</p>
        </div>
        <div>
          <BiSearch className="text-4xl mb-1 ml-2" />
          <p>Missing Teeth</p>
        </div>
        <div>
          <FaTooth className="text-4xl mb-1 ml-2" />
          <p>Teeth Whitening</p>
        </div>
        <div>
          <HiOutlineComputerDesktop className="text-4xl mb-1 ml-2" />
          <p>Cosmetics Dentistry</p>
        </div>
        <div>
          <AiOutlineFileProtect className="text-4xl mb-1 ml-2" />
          <p>Examination</p>
        </div>
        <div>
          <GiToothbrush className="text-4xl mb-1 ml-2" />
          <p>Teeth Pain</p>
        </div>
      </div>
    </div>
  );
};
