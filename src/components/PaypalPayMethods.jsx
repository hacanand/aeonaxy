import React from "react";
import { FaArrowRight } from "react-icons/fa";

function PaypalPayMethods() {
  return (
    <div className="w-full h-full mt-48">
      <div className="flex gap-6 text-gray-700">
        <div className="flex flex-col w-1/2">
          <div className="font-semibold text-6xl text-wrap">
            Offer a range of payment method worldwide
          </div>
          <div className=" flex  flex-col text-3xl font-medium mt-6 text-wrap gap-4">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              architecto corrupti consequuntur harum voluptatem neque, 
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              beatae ullam numquam perspiciatis hic omnis error porro
            </div>
            <div className="text-blue-600 text-3xl flex font-medium">
              More about payment methods <div className="m-2"><FaArrowRight /></div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 p-6"> daf</div>
      </div>
    </div>
  );
}

export default PaypalPayMethods;
