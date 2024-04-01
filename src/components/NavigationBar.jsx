// NavigationBar.js

import React from "react";
import { FaPaypal } from "react-icons/fa";
const NavigationBar = () => {
  return (
    <nav className="bg-white h-full w-full">
      <div className="flex items-center justify-between">
        <div className="font-bold text-xl p-4 flex space-x-8 ">
          <FaPaypal className="size-8" />
          <div className="space-x-8 font-bold text-blue-900">
            <a href="#" className=" hover:underline">
              Personal
            </a>
            <a href="#" className="  hover:underline">
              Business
            </a>
            <a href="#" className="  hover:underline">
              Developer
            </a>
            <a href="#" className="  hover:underline">
              Help
            </a>
          </div>
        </div>
        <div className="space-x-8 font-bold text-xl">
          <button className="bg-white text-blue-00 px-4 py-2 rounded-full ring ring-blue-900 hover:bg-blue-100">
            Log In
          </button>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
