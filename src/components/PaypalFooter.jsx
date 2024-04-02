import React from 'react'
import { FaPaypal } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaRegCopyright } from "react-icons/fa6";
function PaypalFooter() {
  return (
    <div className="h-full w-full mt-10 py-8">
      <div className="flex flex-col gap-10">
        <div className="flex  ">
          <FaPaypal className="size-12 text-blue-600 " />
          <span className=" ml-4 text-5xl font-bold text-blue-950">Pay</span>
          <span className="text-5xl font-bold text-blue-700">Pal</span>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="flex gap-6 text-blue-950 font-bold text-xl">
              <a href="#" className="hover:underline">
                Help
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
              <a href="#" className="hover:underline">
                Fees
              </a>
              <a href="#" className="hover:underline">
                Security
              </a>
              <a href="#" className="hover:underline">
                Apps
              </a>
              <a href="#" className="hover:underline">
                Shop
              </a>
              <a href="#" className="hover:underline">
                Enterprise
              </a>
              <a href="#" className="hover:underline">
                Partners
              </a>
              <a href="#" className="hover:underline">
                Feedback
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="hover:underline font-bold text-3xl text-red-500"
              >
                <LiaFlagUsaSolid />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex justify-between">
        <div className="flex gap-6 text-blue-950 font-bold text-xl">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Jobs
          </a>
          <a href="#" className="hover:underline">
            Press
          </a>
          <a href="#" className="hover:underline">
            Social Innovation
          </a>
          <a href="#" className="hover:underline">
            Public Policy
          </a>
          <a href="#" className="hover:underline">
            Sitemap
          </a>
        </div>
        <div className="flex gap-3 ">
          <a
            href="#"
            className="hover:underline "
          >
            <FaRegCopyright className='inline '/>1999-2022
          </a>
          <div className="flex gap-6 text-blue-950 font-bold text-xl">
            <a href="#" className="hover:underline">
              Legal
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Cookies
            </a>
            <a href="#" className="hover:underline">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaypalFooter