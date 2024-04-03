import React from "react";
import { FaLongArrowAltRight, FaQuoteLeft } from "react-icons/fa";
import img2 from "../assets/img2.jpg";
function PaypalCMO() {
  return (
    <div className="w-full h-full bg-blue-950  flex relative ">
      <div className="mx-10 py-20 p-2 flex max-md:flex-col gap-6 ">
        <div className="flex flex-col md:w-1/3 text-white gap-8 justify-center">
          <div className="font-medium text-4xl">
            <FaQuoteLeft/>
          </div>
          <div className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            numquam fugit tenetur recusandae aliquam nobis nostrum accusamus
            mollitia id, molestiae nam necessitatibus magni veniam alias commodi
            similique consequatur et maxime.
                  </div>
                  <div>
                    <div>David Oksman</div>
                  <div>Chief Marketing Officer</div>
                  </div>
                  <div>Samsonite</div>
                  
        </div>
        <div className="md:absolute md:w-1/2 -top-8 right-0">
          <img src={img2} alt="" className="md:w-10/12 rounded"/>
        </div>
      </div>
    </div>
  );
}

export default PaypalCMO;
