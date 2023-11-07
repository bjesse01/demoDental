import React from "react";
// import dent1 from "../assets/doc1.png";
import dent2 from "../assets/doc2.png";
import dent3 from "../assets/doc3.png";
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";

export const Dentist = () => {
  return (
    <div className="py-10">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-2xl font-bold tracking-widest">Our Dentist</h1>
        <div className="bg-[#00CCFF] h-1 w-16 mt-4 mb-8"></div>
      </div>
      <div className="flex justify-center items-center sm:flex-row flex-col sm:gap-12 gap-7">
        <div className="sm:w-[180px] bg-gray-200 rounded-sm relative sm:mx-0 mx-12">
          <img src={dent2} alt="doc1" />
          <div className="py-2 absolute bottom-0 left-0 text-white text-center bg-[#36454f8f] w-full flex justify-center items-center flex-col">
            <h3 className="font-semibold tracking-wider text-lg">
              Micheal Barley
            </h3>
            <p className="font-normal">Implant Expert</p>
          </div>
          <div className="absolute opacity-0 hover:opacity-100 flex w-full h-full top-0 text-[#00CCFF] justify-center items-center sm:gap-4 gap-7">
            <div className="bg-white p-2 rounded-full">
              <FaFacebookF className="text-[#00CCFF] sm:text-lg text-2xl" />
            </div>
            <div className="bg-white p-2 rounded-full">
              <FaTwitter className="text-[#00CCFF] sm:text-lg text-2xl" />
            </div>
            <div className="bg-white p-2 rounded-full">
              <FaGooglePlusG className="text-[#00CCFF] sm:text-lg text-2xl" />
            </div>
          </div>
        </div>

        <div className="sm:w-[180px] bg-gray-200 rounded-sm relative sm:mx-0 mx-12">
          <img src={dent3} alt="doc2" />
          <div className="py-2 absolute bottom-0 text-white text-center bg-[#36454f8f] w-full flex justify-center items-center flex-col">
            <h3 className="font-semibold tracking-wider text-lg">
              Micheal Barley
            </h3>
            <p className="font-normal">Implant Expert</p>
          </div>
          <div className="absolute opacity-0 hover:opacity-100 flex w-full h-full top-0 text-[#00CCFF] justify-center items-center sm:gap-4 gap-7">
            <div className="bg-white p-2 rounded-full">
              <FaFacebookF className="text-[#00CCFF] sm:text-lg text-2xl" />
            </div>
            <div className="bg-white p-2 rounded-full">
              <FaTwitter className="text-[#00CCFF] sm:text-lg text-2xl" />
            </div>
            <div className="bg-white p-2 rounded-full">
              <FaGooglePlusG className="text-[#00CCFF] sm:text-lg text-2xl" />
            </div>
          </div>
        </div>

        <div className="sm:w-[180px] bg-gray-200 rounded-sm relative sm:mx-0 mx-12">
          <img src={dent2} alt="doc3" />
          <div className="py-2 absolute bottom-0 text-white text-center bg-[#36454f8f] w-full flex justify-center items-center flex-col">
            <h3 className="font-semibold tracking-wider text-lg">
              Micheal Barley
            </h3>
            <p className="font-normal">Implant Expert</p>
          </div>
          <div className="absolute opacity-0 hover:opacity-100 flex w-full h-full top-0 text-[#00CCFF] justify-center items-center sm:gap-4 gap-7">
            <div className="bg-white p-2 rounded-full">
              <FaFacebookF className="text-[#00CCFF] sm:text-lg text-2xl" />
            </div>
            <div className="bg-white p-2 rounded-full">
              <FaTwitter className="text-[#00CCFF] sm:text-lg text-2xl" />
            </div>
            <div className="bg-white p-2 rounded-full">
              <FaGooglePlusG className="text-[#00CCFF] sm:text-lg text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
