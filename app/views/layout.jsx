import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Background from '@/components/Background'
import SignUp from './signup'

export const metadata = {
  title: 'Sharevent',
  description: 'Explore events around you',
}

export default function RootLayout({ children, username }) {
  return (
    <html lang="en">
      <body>
        {(username) != '' ? 
          <div className='flex flex-col h-screen'>
            <Background /> 
            <Navbar />
              <main className = "relative flex-grow">
                {children}
              </main>
            <Footer />
          </div>
          :
          <SignUp />
        }
      </body>
    </html>
  )
}
