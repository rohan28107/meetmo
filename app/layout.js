import Navbar from '@/components/Navbar';
import '../styles/globals.css';
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar';
import Secondnav from '@/components/Secondnav';

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
            {children}
          </main>
        </body>
    </html>   
  )
}
