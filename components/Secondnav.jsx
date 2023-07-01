import Image from 'next/image'
import React from 'react'

const secondnav = [
    { name: 'star', href: '#', image: '/assets/icons/secondnav/star.png', width: 20, height: 20, current: true },
    { name: 'folders', href: '#',  image:'/assets/icons/secondnav/arrow.png', width: 35, height: 30, current: false },
    { name: 'rotate', href: '#', image:'/assets/icons/secondnav/stop.png', width: 35, height: 30, current: false },
    { name: 'group', href: '#', image:'/assets/icons/secondnav/plugin.png', width: 20, height: 20, current: false },
  ]

const Secondnav = () => {
  return (
    <div className='flex bg-[#303640] max-w-8xl ml-8 mx-auto px-4 sm:px-6 lg:px-8 relative r-5'>
        <ul className="flex flex-row justify-between h-16">
        {secondnav.map((nav) => (
          <li className="flex p-4 `${nav.name === 'folders' ? 'bg-gradient-to-r from-blue-400 to-indigo-700' : ''}`">
            <Image 
              src={nav.image}
              alt={nav.name}
              width={nav.width}
              height={nav.height}
              className='mt-2 h-6 w-6'
            />
            <span className="text-gray-400 inline-block ml-2 w-1.5 h-1.5 mt-4 border-b-2 border-r-2 transform rotate-45"></span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Secondnav