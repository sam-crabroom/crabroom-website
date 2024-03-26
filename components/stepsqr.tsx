// components/IntegrationProcess.js
"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const IntegrationProcess = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1500 });
    setShowContent(true);
  }, []);

  return (
    <div style={{ backgroundColor: "#020617" }}>
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
        <div className="text-center" data-aos="fade-up">
          <h3
            className=" text-lg sm:text-xl leading-normal font-ethnocentric tracking-tight text-sky-500"
            data-aos="fade-up"
          >
            The process is streamlined for ease of integration and operational
            efficiency:
          </h3>
        </div>

        <div className="mt-20">
          <ul className="">
            <li
              className=" bg-white rounded-full p-1 pb-10 text-center  mb-20"
              data-aos="fade-up"
            >
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-sky-500 text-white border-4 border-white text-xl font-semibold">
                    1
                  </div>
                </div>
                <div className="mt-4">
                  <p
                    className="mt-2 text-base leading-6 text-slate-500"
                    data-aos="fade-up"
                  >
                    Crabroom will provide a unique URL to our manufacturing
                    partners.
                  </p>
                </div>
              </div>
            </li>
            <li
              className="bg-white rounded-full p-1 pb-10   text-center mb-20"
              data-aos="fade-up"
            >
              <div className="flex flex-col items-center ">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-sky-500 text-white border-4 border-white text-xl font-semibold">
                    2
                  </div>
                </div>
                <div className="mt-4">
                  <p
                    className="mt-2 text-base leading-6 text-slate-500"
                    data-aos="fade-up"
                  >
                    Leveraging this URL, our partners will have the capability
                    to generate a new QR code for inclusion on their signage
                    products.
                  </p>
                </div>
              </div>
            </li>
            <li
              className=" bg-white rounded-full p-1 pb-10 text-center mb-20"
              data-aos="fade-up"
            >
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-sky-400 text-white border-4 border-white text-xl font-semibold">
                    3
                  </div>
                </div>
                <div className="mt-4">
                  <p
                    className="mt-2 text-base leading-6 text-slate-500"
                    data-aos="fade-up"
                  >
                    Upon purchase, end-users can easily scan the QR code to
                    initiate configuration, tailoring it to their specific
                    needs.
                  </p>
                </div>
              </div>
            </li>

            <li
              className="bg-white rounded-full p-1 pb-10 text-center mb-20"
              data-aos="fade-up"
            >
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-sky-500 text-white border-4 border-white text-xl font-semibold">
                    4
                  </div>
                </div>
                <div className="mt-4">
                  <p
                    className="mt-2 text-base leading-6 text-slate-500"
                    data-aos="fade-up"
                  >
                    This QR code offers versatile redirection options, including
                    but not limited to, customer review pages or payment
                    processing portals.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IntegrationProcess;
