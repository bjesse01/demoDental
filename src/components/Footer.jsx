import React from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPaperPlane,
  FaPhoneAlt,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="bg-gray-800 flex items-center justify-center flex-col gap-3">
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-20 gap-10 sm:px-14 sm:py-20 px-8 py-10 text-gray-200">
        <div>
          <h1 className="text-[#00CCFF] text-2xl uppercase font-bold mb-5">
            dento
          </h1>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos
            laborum illum qui, ullam repellendus! Lorem ipsum dolor sit amet
            consectetur. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Iste, commodi3
          </p>
          <div className="flex gap-3 mb-2 items-center">
            <MdLocationOn className="text-[#00CCFF] text-lg" />
            <a href="foo">28 Jackson Street, Chicago, 7722569</a>
          </div>
          <div className="flex gap-3 mb-2 items-center">
            <FaPhoneAlt className="text-[#00CCFF] text-lg" />
            <a href="foo">+84, 2252, 2250, 122</a>
          </div>
          <div className="flex gap-3 mb-2 items-center">
            <HiMail className="text-[#00CCFF] text-lg" />
            <a href="foo">info.dento@gmail.com</a>
          </div>
        </div>
        <div>
          <h1 className="text-2xl mb-5 font-semibold">Opening Hours</h1>
          <div className="flex items-center justify-between mb-3">
            <p>Mon-Wed</p>
            <p>8.00-18.00</p>
          </div>
          <div className="flex items-center justify-between mb-3">
            <p>Thu-Fri</p>
            <p>8.00-17.00</p>
          </div>
          <div className="flex items-center justify-between mb-3">
            <p>Sat</p>
            <p>9.00-17.00</p>
          </div>
          <div className="flex items-center justify-between mb-3">
            <p>Sun</p>
            <p>10.00-17.00</p>
          </div>
          <div className="flex items-center justify-between mb-3">
            <p>Holiday</p>
            <p>Closed</p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl mb-5 font-semibold">Quick Link</h1>
          <div className="grid grid-cols-2 gap-2">
            <p>About</p>
            <p>FAQs</p>
            <p>Contact</p>
            <p>Policy</p>
            <p>News</p>
            <p>Advisors</p>
            <p>Careers</p>
            <p>Dentist</p>
            <p>Services</p>
            <p>Legals</p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl mb-5 font-semibold">Newsletter</h1>
          <p className="mb-5">
            We will send send out weekly newest article and some great offers
          </p>
          <form className="flex items-center">
            <input
              type="text"
              className="px-3 py-2 w-[400px] placeholder:font-medium text-lg  rounded-l-sm"
              placeholder="Email Address"
            />
            <div className="bg-[#00CCFF] px-4 py-3 rounded-r-sm">
              <FaPaperPlane className="text-white text-xl" />
            </div>
          </form>
          <div className="flex mt-5 sm:gap-7 gap-4 text-lg">
            <a href="foo">
              <FaFacebookF />
            </a>
            <a href="foo">
              <FaTwitter />
            </a>
            <a href="foo">
              <FaGooglePlusG />
            </a>
            <a href="foo">
              <FaLinkedinIn />
            </a>
            <a href="foo">
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-400 h-[1px] lg:w-[50rem] md:w-[35rem] w-[16rem]"></div>
      <p className="text-sm text-gray-200 text-center sm:px-0 px-8 py-4">
        Copyright &copy;2023 All rights reserved | Made by JBoy_tech
      </p>
    </div>
  );
};
