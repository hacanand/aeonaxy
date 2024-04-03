import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

function PaypalModularSol() {
  return (
    <div className="w-full h-full bg-blue-950 py-20">
      <div className="mx-10 p-2 flex flex-wrap py-10  gap-10 relative">
        <div className="flex flex-col w-4/12 text-white gap-8 py-8 justify-center">
          <div className="font-medium text-4xl">
            Our modular solution can grow with you
          </div>
          <div className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            numquam fugit tenetur recusandae aliquam nobis nostrum accusamus
            
          </div>
          <div className="text-cyan-400 font-medium flex cursor-pointer">
            <div>Connect with a payments expert</div>
            <div className="m-1.5">
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
        <div className=" w-7/12 ">
          <div class=" relative ">
            <table class="w-full shadow-xl rounded-md  md:absolute p-6 text-sm text-left   text-gray-700  ">
              <tbody className="">
                <tr class="bg-white border-b  border-gray-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-bold text-xl  whitespace-nowrap text-gray-700"
                  >
                    Accept payments  
                  </th>

                  <td class="px-6 py-4">
                    <TiTick className=" fill-emerald-800 bg-emerald-200 text-xl rounded-full" />
                  </td>
                </tr>
                <tr class="bg-white border-b  border-gray-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-bold text-xl text-gray-700 whitespace-nowrap  "
                  >
                     Make payouts
                  </th>

                  <td class="px-6 py-4">
                    <TiTick className=" fill-emerald-800 bg-emerald-200 text-xl rounded-full" />
                  </td>
                </tr>
                <tr class="bg-white border-b  border-gray-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-bold text-xl text-gray-700 whitespace-nowrap  "
                  >
                      Manage risk
                  </th>

                  <td class="px-6 py-4">
                    <TiTick className=" fill-emerald-800 bg-emerald-200 text-xl rounded-full" />
                  </td>
                </tr>
                <tr class="bg-white border-b  border-gray-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-bold text-xl text-gray-700 whitespace-nowrap  "
                  >
                      Fraud protection
                  </th>

                  <td class="px-6 py-4">
                    <TiTick className=" fill-emerald-800 bg-emerald-200 text-xl rounded-full" />
                  </td>
                </tr>
                <tr class="bg-white border-b  border-gray-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-bold text-xl text-gray-700 whitespace-nowrap  "
                  >
                      Reporting and analytics
                  </th>

                  <td class="px-6 py-4">
                    <TiTick className=" fill-emerald-800 bg-emerald-200 text-xl rounded-full" />
                  </td>
                </tr>
                <tr class="bg-white border-b  border-gray-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-bold text-xl text-gray-700 whitespace-nowrap  "
                  >
                      Compliance and security
                  </th>

                  <td class="px-6 py-4">
                    <TiTick className=" fill-emerald-800 bg-emerald-200 text-xl rounded-full" />
                  </td>
                </tr>
                <tr class="bg-white border-b  border-gray-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-bold text-xl text-gray-700 whitespace-nowrap  "
                  >
                      Developer tools
                  </th>

                  <td class="px-6 py-4">
                    <TiTick className=" fill-emerald-800 bg-emerald-200 text-xl rounded-full" />
                  </td>
                </tr>
                <tr class="bg-white border-b  border-gray-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-bold text-xl text-gray-700 whitespace-nowrap  "
                  >
                       Customer support  
                  </th>

                  <td class="px-6 py-4">
                    <TiTick className=" fill-emerald-800 bg-emerald-200 text-xl rounded-full" />
                  </td>
                </tr>
                <tr class="bg-white border-b  border-gray-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-bold text-xl text-gray-700 whitespace-nowrap  "
                  >
                        Pricing and fees 
                  </th>

                  <td class="px-6 py-4">
                    <TiTick className=" fill-emerald-800 bg-emerald-200 text-xl rounded-full" />
                  </td>
                </tr>
                <tr class="bg-white border-b  border-gray-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-bold text-xl text-gray-700 whitespace-nowrap  "
                  >
                        Global reach   
                  </th>

                  <td class="px-6 py-4">
                    <TiTick className=" fill-emerald-800 bg-emerald-200 text-xl rounded-full" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaypalModularSol;
