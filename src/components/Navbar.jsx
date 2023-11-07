import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    window.scrollY > 30 ? setScrolling(true) : setScrolling(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolling ? "-translate-y-16" : "translate-y-0"
      } transition-transform transform fixed w-full z-50`}
    >
      <div className="shadow-lg flex justify-evenly px-4 items-center py-1 bg-white text-[#00CCFF]">
        <h1 className="text-3xl font-bold tracking-widest uppercase">dento</h1>

        <a
          href="#appointment"
          className="bg-[#00CCFF] text-white py-1 px-5 sm:mr-0 mr-3 font-semibold text-base rounded-sm"
        >
          BOOKING NOW
        </a>

        <div
          onClick={() => setNavbar(!navbar)}
          className="text-3xl cursor-pointer md:hidden text-gray-900"
        >
          {navbar ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`md:flex md:items-center text-gray-900 sm:shadow-none shadow-lg md:pb-0 gap-7 py-3 absolute md:static sm:bg-transparent bg-white md:z-auto z-[-1] left-0 top-12 w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${
            navbar ? "top-10 opacity-100" : "top-[-490px]"
          } md:opacity-100 opacity-0 `}
        >
          <li className="font-semibold text-xl my-2 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold text-xl my-2 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="font-semibold text-xl my-2 cursor-pointer">
            <Link to="/service">Service</Link>
          </li>
          <li className="font-semibold text-xl my-2 cursor-pointer">
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className="font-semibold text-xl my-2 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
