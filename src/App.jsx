import { useState } from 'react'
import NavigationBar from './components/NavigationBar'
import Hero from './components/Hero'
import PaypalStats from './components/PaypalStats'
import PaypalPayMethods from './components/PaypalPayMethods';
import WhyPaypal from './components/WhyPaypal';
import PaypalApprovalCard from './components/PaypalApprovalCard';

function App() {
  return (
    <div className='w-full h-full  '>
      <div className="mx-8 p-2">
        <NavigationBar />
      </div>
      <div className=' bg-zinc-200 shadow h-[1px]'></div>
      <div className='mx-10 p-2  flex flex-col gap-8'>
        <Hero /> 
        <PaypalStats />
        <PaypalPayMethods />
        <WhyPaypal/>
      </div>
      <div className='mt-20' >
        <PaypalApprovalCard />
         
      </div>
      <div className='mx-10 p-2  flex flex-col gap-8'>
       <WhyPaypal/>
        
      </div>
    </div>
  );
}

export default App
