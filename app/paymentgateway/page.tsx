'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import Image from '@/public/images/QR code growth insights.png'

import Footer from '@/components/ui/footer'
// import TypewriterEffect from '../../components/TypewriterEffect'
import TypingEffect from '@/components/Typewritereffectpos'
import ReviewSlider from '@/components/carouselpaymentgateway'
import WhyUs from '@/components/whyuspayment'
import CallToAction from '@/components/getstartedpayment'
//import  Ourproduct from '@/components/OURproduct'
import Videopayment from '@/components/videopayment'
import { GoogleGeminiEffectDemo } from '@/components/effectpayment'

export default function DefaultLayout() {

  
  useEffect(() => {
    


    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>

    <main className="grow">
    <div className="max-w-3xl mx-auto text-center pb-10 md:pb-5 mt-10">
              <h2 className="h3 mb-4 text-white pb-5">Payment Gateway-POS Matchmaker</h2>
              <p className='h6 text-cyan-400 '>Your Payment Solution Advisor:Effortlessly select the ideal payment gateway or POS system!</p>
              
            </div>
    
       

       {/* {children} */}

        <div className="mt-8 flex justify-content-center justify-center align-items-center flex-wrap pb-5">
          

          <TypingEffect />

       </div>

       <div className="mt-16 pb-10"> 
         <CallToAction />
       </div>
       

       <div className="mt-8">
          <ReviewSlider />
       </div >
       <div>
       <GoogleGeminiEffectDemo/>
       </div>
       <div>
          <WhyUs/>
       </div>
       <div className="mt-4 flex justify-content-center justify-center align-items-center pb-10">
      
      <video className="w-96 h-auto  border border-gray-200 rounded-xl dark:border-gray-700" controls>
  <source src="videos/video.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
</video>
      </div>


      </main>

      <Footer />
      
  </>
  )
}
