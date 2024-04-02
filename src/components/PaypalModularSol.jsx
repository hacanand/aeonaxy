import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

function PaypalModularSol() {
  return (
    <div className="w-full h-full bg-blue-950 py-20">
      <div className="mx-10 p-2 flex  gap-10 relative">
        <div className="flex flex-col w-3/12 text-white gap-8 p-10  justify-center">
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
            <div className="m-1.5">
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
        <div className="shadow-xl w-1/2 absolute right-16 bg-white rounded-xl p-6">
          <div class="  p-6">
            <table class="w-full text-sm text-left rtl:text-right text-gray-700  ">
              <tbody>
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
