import React from "react";
import { AiOutlineFileProtect } from "react-icons/ai";
import { FaTooth } from "react-icons/fa";
import { GiToothbrush } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

export const Serve = () => {
  return (
    <div className="sm:px-40 px-10 py-10 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-20 gap-20 py-8">
        <div className="flex flex-col items-center text-center justify-center gap-3">
          <GiToothbrush className="text-5xl text-[#00CCFF] mb-1 ml-2" />
          <h2 className="text-2xl font-semibold">Teeth Whitening</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            commodi nesciunt amet aut sapiente eius ipsa pariatur, maiores
            tempore alias eos laudantium explicabo dolor consequuntur.
          </p>
        </div>
        <div className="flex flex-col items-center text-center justify-center gap-3">
          <BiSearch className="text-5xl text-[#00CCFF] mb-1 ml-2" />
          <h2 className="text-2xl font-semibold">Missing Teeth</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            commodi nesciunt amet aut sapiente eius ipsa pariatur, maiores
            tempore alias eos laudantium explicabo dolor consequuntur.
          </p>
        </div>
        <div className="flex flex-col items-center text-center justify-center gap-3">
          <FaTooth className="text-5xl text-[#00CCFF] mb-1 ml-2" />
          <h2 className="text-2xl font-semibold">Teeth Whitening</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            commodi nesciunt amet aut sapiente eius ipsa pariatur, maiores
            tempore alias eos laudantium explicabo dolor consequuntur.
          </p>
        </div>
        <div className="flex flex-col items-center text-center justify-center gap-3">
          <HiOutlineComputerDesktop className="text-5xl text-[#00CCFF] mb-1 ml-2" />
          <h2 className="text-2xl font-semibold">Cosmetics Dentistry</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            commodi nesciunt amet aut sapiente eius ipsa pariatur, maiores
            tempore alias eos laudantium explicabo dolor consequuntur.
          </p>
        </div>
        <div className="flex flex-col items-center text-center justify-center gap-3">
          <AiOutlineFileProtect className="text-5xl text-[#00CCFF] mb-1 ml-2" />
          <h2 className="text-2xl font-semibold">Examination</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            commodi nesciunt amet aut sapiente eius ipsa pariatur, maiores
            tempore alias eos laudantium explicabo dolor consequuntur.
          </p>
        </div>
        <div className="flex flex-col items-center text-center justify-center gap-3">
          <GiToothbrush className="text-5xl text-[#00CCFF] mb-1 ml-2" />
          <h2 className="text-2xl font-semibold">Teeth Pain</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            commodi nesciunt amet aut sapiente eius ipsa pariatur, maiores
            tempore alias eos laudantium explicabo dolor consequuntur.
          </p>
        </div>
      </div>
    </div>
  );
};
