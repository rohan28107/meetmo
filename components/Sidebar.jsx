import Image from 'next/image';
import React from 'react';


const navigation = [
  { name: 'star', href: '#', image: '/assets/icons/sidebar/star.png', current: true },
  { name: 'folders', href: '#',  image:'/assets/icons/sidebar/folders.png', current: false },
  { name: 'rotate', href: '#', image:'/assets/icons/sidebar/rotate.png', current: false },
  { name: 'group', href: '#', image:'/assets/icons/sidebar/group.png', current: false },
  { name: 'media', href: '#', image:'/assets/icons/sidebar/media.png', current: false },
  { name: 'like', href: '#', image:'/assets/icons/sidebar/like.png', current: false },
  { name: 'control', href: '#', image:'/assets/icons/sidebar/control.png', current: false },
  { name: 'account', href: '#', image:'/assets/icons/sidebar/account.png', current: false },
]

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 z-10 bg-gray-800 w-19">
      {/* Sidebar content */}
      <ul className="flex flex-col">
        {navigation.map((nav) => (
          <li className="p-4 `${nav.name === 'folders' ? 'bg-gradient-to-r from-blue-400 to-indigo-700' : ''}`">
            <Image 
              src={nav.image}
              alt={nav.name}
              width={20}
              height={20}
              className='mt-2 h-6 w-6'
            />
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default Sidebar;
