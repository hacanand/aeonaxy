import React from "react";
import img2 from '../assets/img2.jpg'
import { FaArrowRight } from "react-icons/fa";
function PaypalIntegration() {
  return (
    <div className="w-full h-full mt-20  ">
      <div className="flex flex-col gap-8">
        <div className="flex gap-10 max-md:flex-wrap">
          <div className="flex flex-col gap-4 text-wrap p-4">
            <div className="font-bold text-xl">
              Executive Guide:Paypal enterprise integration
            </div>
            <div className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              debitis consequatur animi ducimus ullam veritatis similique
              laboriosam saepe dicta magni tempore, voluptatem tempora qui
              minus. Incidunt minima dolorem maiores dolor?
            </div>
            <div className="text-xl font-bold text-blue-600 flex">
              Get the guide <FaArrowRight className="m-1" />
            </div>
          </div>
          <vr className="w-px bg-gray-400 border-0" />

          <div className="flex flex-col gap-4  text-wrap p-4">
            <div className="font-bold text-xl">
              Executive Guide:Paypal enterprise integration
            </div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              debitis consequatur animi ducimus ullam veritatis similique
              laboriosam saepe dicta magni tempore, voluptatem tempora qui
              minus. Incidunt minima dolorem maiores dolor?
            </div>
            <div className="text-xl font-bold text-blue-600 flex">
              Get the guide <FaArrowRight className="m-1" />
            </div>
          </div>
        </div>
        <hr className="h-px bg-gray-400 border-0" />
        <div className="flex gap-8">
          <div className="w-1/3 ">
            <img src={img2} alt="img2" />
          </div>
          <div className="flex flex-col gap-4 p-4 ">
            <div className="font-bold text-xl">
              Report: Forester economic impact analysis
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              accusamus officia eligendi eveniet veritatis sequi id nemo
              repellat, quia libero tempora, praesentium ipsa! Magni in quam
              nesciunt, omnis dolore voluptate.
            </div>
            <div className="text-xl font-bold text-blue-600 flex">
              Get the Report <FaArrowRight className="m-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaypalIntegration;
