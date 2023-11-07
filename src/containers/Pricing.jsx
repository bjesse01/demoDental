import React from "react";
import { Link } from "react-router-dom";

export const Pricing = () => {
  return (
    <div className="pt-7 pb-5">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-2xl font-bold tracking-widest">Pricing</h1>
        <div className="bg-[#00CCFF] h-1 w-16 mt-4 mb-8"></div>
      </div>
      <div className="flex items-center justify-center sm:px-80 md:px-20">
        <table className="w-full border-separate border-spacing-2">
          <tr className="bg-[#00CCFF] text-xl text-white text-left ">
            <th className="px-4 py-2">Service Names</th>
            <th className="px-4">Stages</th>
            <th className="px-5">Price</th>
          </tr>
          <tr className="bg-gray-300">
            <td className="pl-4 py-2">Teeth Whitening Service at home</td>
            <td className="pl-3">1 times</td>
            <td className="pl-3">$115.00</td>
          </tr>
          <tr className="bg-gray-300">
            <td className="pl-4 py-2">
              Teeth Whitening Service at Dental Clinic
            </td>
            <td className="pl-3">1 times</td>
            <td className="pl-3">$100.00</td>
          </tr>
          <tr className="bg-gray-300">
            <td className="pl-4 py-2">
              Ceramic crowns and fillings Dental porcelain
            </td>
            <td className="pl-3">1 times</td>
            <td className="pl-3">$99.00</td>
          </tr>
          <tr className="bg-gray-300">
            <td className="pl-4 py-2">Remove crowns, bridges Service</td>
            <td className="pl-3">1 tooth</td>
            <td className="pl-3">$50.00</td>
          </tr>
          <tr className="bg-gray-300">
            <td className="pl-4 py-2">Covering the recession of the gums</td>
            <td className="pl-3">1 times</td>
            <td className="pl-3">$400.00</td>
          </tr>
          <tr className="bg-gray-300">
            <td className="pl-4 py-2">
              Consultation, impressions and preparation of models
            </td>
            <td className="pl-3">1 times</td>
            <td className="pl-3">$35.00</td>
          </tr>
          <tr className="bg-gray-300">
            <td className="pl-4 py-2">Removal of an old inlay, old crown</td>
            <td className="pl-3">1 times</td>
            <td className="pl-3">$99.00</td>
          </tr>
          <tr className="bg-gray-300">
            <td className="pl-4 py-2">Overlay teeth whitening(2 arches)</td>
            <td className="pl-3">1 times</td>
            <td className="pl-3">$170.00</td>
          </tr>
          <tr className="bg-gray-300">
            <td className="pl-4 py-2">
              Standard porcelain and zirconium crown on implant
            </td>
            <td className="pl-3">1 tooth</td>
            <td className="pl-3">$499.00</td>
          </tr>
          <tr className="bg-gray-300">
            <td className="pl-4 py-2">
              Implantation of an implant(price depends on system used)
            </td>
            <td className="pl-3">1 tooth</td>
            <td className="pl-3">$600.00</td>
          </tr>
        </table>
      </div>
      <div className="w-full flex justify-center items-center my-4">
        <Link
          to="/pricing"
          className="uppercase text-center text-lg text-white font-semibold bg-[#00CCFF] px-5 py-1 rounded-sm shadow-sm"
        >
          read more &gt;
        </Link>
      </div>
    </div>
  );
};
