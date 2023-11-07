import React from "react";

export const Cover = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen w-full bg-slate-400">
      <h1 className="font-bold text-3xl text-center mb-3">
        We believe everyone should have easy access to great dental care
      </h1>
      <p className="sm:w-[800px] text-center text-lg font-normal p-7 sm:p-0 mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        deleniti? At et autem distinctio possimus debitis nesciunt vel iusto
        quasi. Doloremque corporis consectetur maxime odio omnis esse quos
        voluptate sit!
      </p>
      <div className="flex gap-3 items-center">
        <a
          href="foo"
          className="bg-[#00CCFF] text-white py-1 px-5 font-semibold text-base rounded-sm"
        >
          GET STARTED
        </a>
        <a
          href="foo"
          className="bg-transparent border border-[#00CCFF] text-[#00CCFF] px-5 py-1 font-semibold tex-base rounded-sm"
        >
          CONTACT US
        </a>
      </div>
    </div>
  );
};
