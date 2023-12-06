import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Background from '@/components/Background'


export const metadata: Metadata = {
  title: 'Sharevent',
  description: 'Explore events around you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <div className='flex flex-col h-screen'> 
        <Background />
        <Navbar />
        <main className = "relative flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </html>
  )
}
