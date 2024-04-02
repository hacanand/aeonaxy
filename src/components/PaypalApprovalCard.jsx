import React from 'react'
import img2 from '../assets/img2.jpg'

function PaypalApprovalCard() {
  return (
      <div className='h-full w-full bg-gray-200'>
          <div className='flex '>
              <div className='p-10 px-12 w-1/2'>
                  <img src={img2} alt="img2" className='rounded-xl'/>
              </div>
              <div className='flex flex-col justify-center w-1/2 pr-4'>
                  <div className='text-2xl font-semibold'>Boost approval rates</div>
                    <div className='text-wrap font-semibold mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eos omnis ipsam voluptas, repudiandae reiciendis culpa quae delectus debitis minus modi itaque consequatur nobis libero! Sunt debitis enim ducimus commodi.</div>
              </div>
          </div>
    </div>
  )
}

export default PaypalApprovalCard