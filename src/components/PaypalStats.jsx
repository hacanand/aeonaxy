import React from 'react'

function PaypalStats() {
  return (
    <div className="mt-64 flex justify-evenly flex-wrap">
      <div className="flex flex-col">
        <div className=" text-9xl font-bold text-blue-900 p-6">401%</div>
        <div className="font-medium text-balance p-4 w-96 text-3xl">
          ROI for the composite merchant,estimated by forester with paypal
          enterprise payment solutions
        </div>
      </div>
      <vr className="w-px bg-gray-400 border-0" />
      {/* <div className="bg-gray-200 h-96  w-[1px] "></div> */}
      <div className="flex flex-col">
        <div className=" text-5xl font-bold text-blue-900 p-4">30%</div>
        <div className="font-medium text-balance p-4 w-96 text-3xl">
          Increase in conversion rate for merchants using paypal checkout
        </div>
        <div className="bg-gray-200 h-[1px] w-96 "></div>
        <div className=" text-5xl font-bold text-blue-900 p-4">4bps</div>
        <div className="font-medium text-balance p-4 w-96 text-3xl">
          In the US,Lorem ipsum, dolor sit amet consectetur adipisicing
        </div>
      </div>
    </div>
  );
}

export default PaypalStats