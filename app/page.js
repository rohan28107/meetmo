import Secondnav from '@/components/Secondnav'
import Image from 'next/image'

const secondnav = [
  { name: 'star', href: '#', image: '/assets/icons/secondnav/star.png', current: true },
  { name: 'folders', href: '#',  image:'/assets/icons/secondnav/arrow.png', current: false },
  { name: 'rotate', href: '#', image:'/assets/icons/secondnav/stop.png', current: false },
  { name: 'group', href: '#', image:'/assets/icons/secondnav/plugin.png', current: false },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Secondnav /> */}
      <div className=''>
        <ul className="flex flex-row justify-between h-16">
          {secondnav.map((nav) => (
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
    </main>
  )
}
