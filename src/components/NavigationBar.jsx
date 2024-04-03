// NavigationBar.js

import React, { useEffect } from "react";
import { initFlowbite } from "flowbite";
import { FaPaypal } from "react-icons/fa";
const NavigationBar = () => {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <header>
      <nav class="bg-white border-gray-200 ">
        <div class="flex  justify-between flex-wrap">
          <FaPaypal className="size-10 text-blue-900" />
          <div class="flex items-center lg:order-2 space-x-4 max-md:space-x-2 font-semibold">
            <button className="bg-white text-blue-00  max-md:px-2 max-sm:px-1 px-4 py-2 rounded-full ring ring-blue-900 hover:bg-blue-100">
              Log In
            </button>

            <button className="bg-blue-900 text-white px-4 py-2 max-sm:px-1 max-md:px-2 rounded-full hover:bg-blue-800">
              Sign Up
            </button>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex  items-center md:p-2 md:ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="hidden justify-between   items-center relative w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 font-medium max-lg:absolute max-lg:w-full max-lg:bg-opacity-0 backdrop-filter backdrop-blur-lg lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-white rounded bg-primary-600 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Personal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b rounded border-gray-100  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Business
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b rounded border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Developer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b rounded border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    // <nav className="bg-white h-full w-full">
    //   <div className="flex items-center justify-between">
    //     <div className="font-bold text-xl p-4 flex space-x-8 ">
    //       <FaPaypal className="size-8 text-blue-600" />
    //       <div className="space-x-8 font-bold text-blue-900">
    //         <a href="#" className=" hover:underline">
    //           Personal
    //         </a>
    //         <a href="#" className="  hover:underline">
    //           Business
    //         </a>
    //         <a href="#" className="  hover:underline">
    //           Developer
    //         </a>
    //         <a href="#" className="  hover:underline">
    //           Help
    //         </a>
    //       </div>
    //     </div>
    //     <div className="space-x-8 font-bold text-xl">
    //       <button className="bg-white text-blue-00 px-4 py-2 rounded-full ring ring-blue-900 hover:bg-blue-100">
    //         Log In
    //       </button>
    //       <button className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800">
    //         Sign Up
    //       </button>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default NavigationBar;
