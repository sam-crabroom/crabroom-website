"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

//import PageIllustration from '@/components/page-illustration'
import Footer from "@/components/ui/footer";
// import TypewriterEffect from '../../components/TypewriterEffect'
import TypingEffect from "@/components/TypewriterEffect";
import ReviewSlider from "@/components/carousel";
import WhyUs from "@/components/whyus";
import CallToAction from "@/components/callToAction";
import Ourproduct from "@/components/OURproduct";
import { GoogleGeminiEffectDemo } from "@/components/googlegemini";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <main className="grow custom-scrollbar">
        {/* <GoogleGeminiEffectDemo/>  */}

        {/* <PageIllustration />*/}

        {children}

        <div className="justify-content-center justify-center align-items-center">
          <TypingEffect />
        </div>
        <div className="fixed right-4 top-4 z-50 mb-16">
          <CallToAction />
        </div>
        <div className="rounded-3xl mt-16">
        {/* <hr className="w-3/4 h-0.5 mb-6 mx-auto border-0 rounded shadow-sm shadow-sky-500 bg-sky-500"></hr> */}
          <div className="pb-10 rounded-3xl">
            <h1 className="h3 text-sky-500 text-center font-ethnocentric text-2xl">Customer Reviews</h1>
          </div>
          <div className="pb-[100px] lg:pb-[20px] xl:pb-[10px] rounded-3xl">
            <ReviewSlider />
          </div>
          {/* <hr className="w-1/4 h-0.5 mx-auto my-6 border-0 rounded bg-sky-500 shadow-md shadow-sky-500"></hr> */}
        </div>

        <div className="max-w-3xl mx-auto text-center pb-1">
          <h2 className="text-2xl text-sky-500 font-ethnocentric ">
            Why Us? - Beyond Fintech Development
          </h2>
        </div>

        {/* <div className="mt-4">
          <WhyUs/>
        </div> */}
        <div>
          <Ourproduct />
        </div>
      </main>

      <Footer />
    </>
  );
}
