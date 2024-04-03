import React from "react";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
function Hero() {
  return (
    <div className="w-full h-full p-2 mt-10 max-md:mt-5 ">
      <div className="flex flex-col  items-center justify-between">
        <span className="text-5xl max-md:text-2xl font-medium">
          Global Payment
        </span>
        <span className="text-5xl max-md:text-2xl font-medium">
          
          processing solutions
        </span>
        <div className="flex flex-col text-balance text-center">
          <span className="font-medium mt-5">
            Grow optimise your business with a flexible,end-to-end payments
            platform
          </span>
          <span className="font-medium">powered by Braintree technology</span>
        </div>
        <button className="bg-blue-900 md:mt-10  text-white px-4 max-md:mt-5  p-3 rounded-full ">
          Connect with a Payments Expert
        </button>
      </div>
      <div className="mt-16">
        <div class="mt-3  flex -space-x-2 relative ">
          <img
            class="inline-block w-7/12  rounded-xl hover:scale-105 transition duration-500 ease-in-out"
            src={img1}
            alt=""
          />
          <img
            class="inline-block w-8/12 -top-7 rounded-xl absolute right-20 hover:scale-105 transition duration-500 ease-in-out"
            src={img2}
            alt=""
          />
          <div className=" bg-white p-4 absolute right-10 rounded-xl -top-8 flex gap-5  flex-col  hover:scale-105 transition duration-500 ease-in-out  w-6/12">
            <img class="rounded-xl" src={img3} alt="" className="" />
            <div className="flex justify-between p-2">
              <div className="text-gray-400  font-medium text-wrap text-xl">
                Speckled bowl set
                <div className="font-normal  text-wrap text-base">
                  Set of two
                </div>
              </div>
              <div className="text-gray-400  font-medium text-xl">$24.00</div>
            </div>
            <button className=" bg-slate-300 rounded-full py-3 font-medium ">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
