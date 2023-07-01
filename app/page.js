"use client"


import Flow from '@/components/Flow';
import Form from '@/components/Form';
import Mediaplayer from '@/components/Mediaplayer'

export default function Home() {

  return (
    <div className="flex flex-col md:flex-row">
      <Flow />
      <div className='w-30 mt-0 fixed right-5 top-20 bottom-0 z-10 bg-[#303640]'>
          <Mediaplayer />
          <Form />
      </div> 
    </div>
  )
}
