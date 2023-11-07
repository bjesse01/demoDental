import React from "react";
import { MdLocationOn } from "react-icons/md";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export const Media = () => {
  return (
    <div className="bg-gray-300 w-full flex items-center sm:justify-around justify-between sm:px-0 px-5 py-2">
      <div className="flex items-center sm:gap-9 gap-3">
        <div className="flex items-center gap-2">
          <MdLocationOn className="text-[#00CCFF] text-xl" />
          <p className="text-sm sm:block hidden">
            28 Jackson Street, Chicago, 7788569 USA
          </p>
        </div>
        <div className="flex items-center gap-2">
          <HiMail className="text-[#00CCFF] text-xl" />
          <p className="text-sm sm:block hidden">info.dento@gmail.com</p>
        </div>
      </div>
      <div className="flex sm:gap-7 gap-4 text-lg text-gray-900">
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
  );
};
