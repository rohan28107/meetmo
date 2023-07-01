"use client"


import Flow from '@/components/Flow';
import Form from '@/components/Form';
import Mediaplayer from '@/components/Mediaplayer'

export default function Home() {

  return (
    <div className="flex">
      {/* bg-[#303640] */}
        <div className='w-70 h-100'>
          <Flow />
        </div>
        
        <div className='w-30 mt-0 fixed right-5 top-20 bottom-0 z-10 bg-gray-800'>
          <Mediaplayer />
          <Form />
        </div> 
    </div>
  )
}
