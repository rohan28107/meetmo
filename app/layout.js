import Navbar from '@/components/Navbar';
import '../styles/globals.css';
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar';
import Secondnav from '@/components/Secondnav';
import Mediaplayer from '@/components/Mediaplayer';
import Form from '@/components/Form';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MeetMo',
  description: 'Online audio nodes mixer',
}

export default function RootLayout({ children }) {
  return (    
      <html lang="en">
        <body>
          <main className='app'>
            <Navbar />
            <Secondnav />
            <Sidebar />
            <div className='w-80 h-full'>
            {children}
            </div>
          </main>
        </body>
      {/* <body className={inter.className}>{children}</body> */}
    </html>   
  )
}
