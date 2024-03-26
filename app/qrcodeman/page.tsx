"use client";
import Image from "next/image";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import qrimage from "@/public/images/QR code growth insights.webp";

import Footer from "@/components/ui/footer";
// import TypewriterEffect from '../../components/TypewriterEffect'
//import TypingEffect from '@/components/Typewriterqr'
import TypingEffect1 from "@/components/Typewriterqr";
//import ReviewSlider from '@/components/carouselpaymentgateway'
import WhyUs from "@/components/whyusqr";
import CallToAction from "@/components/callToAction";
import IntegrationProcess from "@/components/stepsqr";
//import  Ourproduct from '@/components/OURproduct'
import Videopayment from "@/components/videopayment";
import { GoogleGeminiEffectDemo } from "@/components/effectpayment";

export default function DefaultLayout(
  {
    // children,
    //}: {
    // children: React.ReactNode
  }
) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <main className="grow">
        <div className="max-w-4xl mx-auto text-center pb-10 md:pb-5 mt-10">
          <h2 className="text-2xl mb-4 text-sky-500 font-ethnocentric pb-5">
            Crabroom's Innovative QR Code Solution for Manufacturing Partners
          </h2>
          <p className="text-md font-ethnocentric text-white ">
            Transforming Signage into a Source of Continuous Profit for
            Manufacturers through Innovative QR Code Solutions
          </p>
        </div>

        {/* // {children} */}

        <div className="mt-4  font-size: 1rem flex justify-center items-center flex-wrap">
          <TypingEffect1 />
        </div>
        <div>
          <GoogleGeminiEffectDemo />
        </div>

        <div className="mt-2 ">
          <IntegrationProcess />
        </div>
        <div>
          <WhyUs />
        </div>

        <div className="mt-2 flex justify-content-center justify-center align-items-center pb-10">
          <Image
            src={qrimage} // Replace with the path to your image
            alt="Description of the image"
            width={700} // Specify the fixed width
            height={700}
            className="rounded-3xl" // Specify the fixed height
          />
        </div>
        <div className="mt-4 flex justify-content-center justify-center align-items-center pb-10">
          <video
            className="w-1/2 h-auto border border-gray-200 rounded-xl dark:border-gray-700"
            controls
          >
            <source src="videos/dinebot.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </main>

      <Footer />
    </>
  );
}
