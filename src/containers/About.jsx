import React from "react";
import dent from "../assets/dental.jpg";
import { FaReact } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineSafetyCertificate } from "react-icons/ai";
import { RiProfileLine } from "react-icons/ri";
import { Counter } from "../components/Counter";

export const About = () => {
  return (
    <div className="sm:px-40 md:px-10 px-5 mt-4">
      <div className="flex items-center justify-center sm:flex-row flex-col gap-10 py-10">
        <div className="">
          <img src={dent} className="w-[370px] h-[400px]" alt="dent" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-widest">About Us</h1>
          <div className="bg-[#00CCFF] h-1 w-16 mt-4 mb-8"></div>
          <p className="sm:w-[450px] font-normal text-lg text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, qui suscipit nostrum vel quasi enim sit quae nihil
            nam adipisci saepe deleniti quod voluptates, ea omnis sed iste
            aliquam. Deleniti. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cumque, soluta. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Qui.
          </p>
          <div className="sm:w-[450px] mb-5">
            <div className="w-full flex justify-between mb-2">
              <label className="font-bold text-lg" htmlFor="experienceDentist">
                Experience Dentist
              </label>
              <span className="font-bold text-lg">80%</span>
            </div>
            <div className="w-full h-2 bg-gray-300">
              <div className="bg-[#00CCFF] h-2" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="sm:w-[450px] mb-5">
            <div className="w-full flex justify-between mb-2">
              <label className="font-bold text-lg" htmlFor="modernEquipment">
                Modern Equipment
              </label>
              <span className="font-bold text-lg">65%</span>
            </div>
            <div className="w-full h-2 bg-gray-300">
              <div className="bg-[#00CCFF] h-2" style={{ width: "65%" }}></div>
            </div>
          </div>
          <div className="sm:w-[450px] mb-5">
            <div className="w-full flex justify-between mb-2">
              <label className="font-bold text-lg" htmlFor="friendlyStaff">
                Friendly Staff
              </label>
              <span className="font-bold text-lg">85%</span>
            </div>
            <div className="w-full h-2 bg-gray-300">
              <div className="bg-[#00CCFF] h-2" style={{ width: "85%" }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 bg-gray-200 w-full h-[2px]"></div>
      <div className="px-20 grid sm:grid-cols-2 grid-cols-1 content-center place-items-center w-full gap-12 my-12">
        <div className="flex items-center justify-center flex-col">
          <FaReact className="text-[#00CCFF] text-5xl font-bold" />
          <Counter targetCount={20} className="font-bold text-xl" />
          <p>Years Of Experience</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <AiOutlineHeart className="text-[#00CCFF] text-5xl font-bold" />
          <div className="flex">
            <Counter targetCount={700} className="font-bold text-xl" />
            <span className="font-bold text-xl">+</span>
          </div>
          <p>Happy Patients</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <AiOutlineSafetyCertificate className="text-[#00CCFF] text-5xl font-bold" />
          <Counter targetCount={120} className="font-bold text-xl" />
          <p>Certificate</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <RiProfileLine className="text-[#00CCFF] text-5xl font-bold" />
          <div className="flex">
            <Counter targetCount={40} className="font-bold text-xl" />
            <span className="font-bold text-xl">+</span>
          </div>
          <p>Dentist</p>
        </div>
      </div>
    </div>
  );
};
