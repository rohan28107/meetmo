import Navbar from '@/components/Navbar';
import '../styles/globals.css';
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar';

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
          <Sidebar />
          {children}
        </main>
      </body>
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  )
}
