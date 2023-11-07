import React from "react";

export const Context = () => {
  return (
    <div className="py-10 sm:px-40 px-2 w-full flex sm:flex-row flex-col gap-10">
      <div className="bg-[#00CCFF] sm:w-[200px] text-white px-5 py-6">
        <div className="mb-5">
          <h2 className="text-2xl font-semibold">Address</h2>
          <p className="text-lg font-normal">
            28 Jackson Street, Chicago, 7788569 USA
          </p>
        </div>
        <div className="mb-5">
          <h2 className="text-2xl font-semibold">Phone</h2>
          <p className="text-lg font-normal">+84. 2252. 225. 122</p>
        </div>
        <div className="mb-5">
          <h2 className="text-2xl font-semibold">Fax</h2>
          <p className="text-lg font-normal">+84. 2252. 225. 122</p>
        </div>
        <div className="mb-5">
          <h2 className="text-2xl font-semibold">Email</h2>
          <p className="text-lg font-normal">info.dento@gmail.com</p>
        </div>
      </div>
      <div className="w-full">
        <div className="">
          <h1 className="text-3xl font-semibold tracking-widest">
            Get In Touch
          </h1>
          <div className="bg-[#00CCFF] h-1 w-16 mt-4 mb-8"></div>
        </div>
        <form action="" className="flex flex-col justify-start">
          <input
            type="text"
            className="border border-gray-300 rounded-md px-3 py-2 outline-none text-lg placeholder:italic mb-5 tracking-wider"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="border border-gray-300 rounded-md px-3 py-2 outline-none text-lg placeholder:italic mb-5 tracking-wider"
            placeholder="Your Email"
          />
          <textarea
            cols="10"
            className="border border-gray-300 rounded-md px-3 py-2 outline-none text-lg placeholder:italic mb-5 tracking-wider"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <div>
            <input
              type="submit"
              className="bg-[#00CCFF] text-white py-2 px-7 sm:mr-0 mr-3 font-semibold text-base rounded-sm"
              value="SEND MESSAGE"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
