import { useState } from 'react'
import NavigationBar from './components/NavigationBar'
import Hero from './components/Hero'

function App() {
  return (
    <div className='w-full h-full  '>
      <div className="mx-8 p-2">
        <NavigationBar />
      </div>
      <div className=' bg-zinc-200 shadow h-[1px]'></div>
      <div className='mx-8 p-2  flex flex-col gap-5'>
         <Hero/> 
      </div>
    
    </div>
  );
}

export default App
