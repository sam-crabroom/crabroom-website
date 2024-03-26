
import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'
//import Banner from '@/components/banner'
// import TypewriterEffect from '@/components/ui/typewriter'


//const inter = Inter({
  //subsets: ['latin'],
 // variable: '--font-inter',
 // display: 'swap'
//})

//const architects_daughter = Architects_Daughter({
  //subsets: ['latin'],
  //variable: '--font-architects-daughter',
  //weight: '400',
  //display: 'swap'
//})

export const metadata = {
  title: 'Crabroom | Online Payment Gateway Integration or Development',
  description: 'Generated by create next app',
}

// export const useClient = true;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en">
      {/*<body className={` "Nunito", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif ${inter.variable} ${architects_daughter.variable}  font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>*/}
      <body
        style={{
          fontFamily: `"Nunito", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, ethnocentric,  sans-serif`,
          //backgroundColor: "#1F456E", 
          // Set your desired background color
          backgroundColor: '#020617',

            color: '#cbd5e0', // Set your desired text color
            letterSpacing: '0.05em', // Add other styles as needed
          }}
        >
         
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          {/*<Banner />*/}
          
        </div>
      </body>
    </html>
  )
}
 