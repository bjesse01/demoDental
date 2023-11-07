import React from "react";

export const Header = ({ title }) => {
  return (
    <div className="bg-gray-800 text-center py-10 sm:mt-16 mt-14">
      <h1 className="text-white text-2xl font-semibold tracking-widest uppercase">
        {title}
      </h1>
    </div>
  );
};
