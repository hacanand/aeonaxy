import React from "react";
import {  FaLongArrowAltRight } from "react-icons/fa";

function PaypalModularSol() {
  return (
    <div className="w-full h-full bg-blue-950 py-20">
      <div className="mx-10 p-2 flex ">
        <div className="flex flex-col w-1/3 text-white gap-8  justify-center">
          <div className="font-medium text-4xl">
            Our modular solution can grow with you
          </div>
          <div className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            numquam fugit tenetur recusandae aliquam nobis nostrum accusamus
            mollitia id, molestiae nam necessitatibus magni veniam alias commodi
            similique consequatur et maxime.
          </div>
          <div className="text-cyan-400 font-medium flex cursor-pointer">
                      <div>Connect with a payments expert</div>
                      <div className="m-1.5"><FaLongArrowAltRight/></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaypalModularSol;
