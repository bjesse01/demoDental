import React from "react";

export const Apointment = () => {
  return (
    <div className="bg-gray-800 py-20" id="appointment">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-2xl text-white font-bold tracking-widest">
          Book An Appointment
        </h1>
        <div className="bg-[#00CCFF] h-1 w-16 mt-4 mb-8"></div>
      </div>
      <form action="" className="sm:px-40 px-10">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mb-5">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 text-lg bg-[#36454F] placeholder:italic text-white outline-none rounded-sm"
          />
          <input
            type="text"
            placeholder="Your Phone"
            className="px-4 py-2 text-lg bg-[#36454F] placeholder:italic text-white outline-none rounded-sm"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 text-lg bg-[#36454F] placeholder:italic text-white outline-none rounded-sm"
          />
          <input
            type="text"
            placeholder="Your Address"
            className="px-4 py-2 text-lg bg-[#36454F] placeholder:italic text-white outline-none rounded-sm"
          />
          <select className="px-4 py-2 text-lg bg-[#36454F] placeholder:italic text-white outline-none rounded-sm">
            <option value="">Choose Your Schedule</option>
            <option value="">9 AM to 10 AM</option>
            <option value="">11 AM to 12 PM</option>
            <option value="">2 PM to 4 PM</option>
            <option value="">8 PM to 10 PM</option>
          </select>
          <select className="px-4 py-2 text-lg bg-[#36454F] placeholder:italic text-white outline-none rounded-sm">
            <option value="">Choose Your Schedule</option>
            <option value="">9 AM to 10 AM</option>
            <option value="">11 AM to 12 PM</option>
            <option value="">2 PM to 4 PM</option>
            <option value="">8 PM to 10 PM</option>
          </select>
        </div>
        <textarea
          className="w-full px-4 py-2 text-lg bg-[#36454F] placeholder:italic text-white outline-none rounded-sm"
          cols="30"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <div className="w-full flex justify-center items-center mt-5">
          <input
            type="submit"
            value="booking now"
            className="uppercase text-center text-lg text-white font-semibold bg-[#00CCFF] px-5 py-1 rounded-sm shadow-sm"
          />
        </div>
      </form>
    </div>
  );
};
