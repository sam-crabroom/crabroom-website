"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/style.css";
import Footer from "@/components/ui/footer";
import Link from "next/link";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import crab from "@/public/images/topgrade.webp";
import crab1 from "@/public/images/fintechexpert.webp";
import crab2 from "@/public/images/skillsimpact.webp";
import crab3 from "@/public/images/communi.webp";
import crab4 from "@/public/images/teampalyer.webp";
import crab5 from "@/public/images/staypositive.webp";

const content = [
  {
    title: "1. Top Grades in School: Show Your Dedication to Learning",
    description:
      "Crabroom values your academic hard work. A score of 90% or more means you're dedicated and ready to tackle complex financial challenges. It's about showing you're prepared to contribute to the company's innovative work",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={crab}
          width={400}
          height={300}
          className="h-full w-full object-cover rounded-3xl"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: " 2. Fintech Expert: Know Your Stuff in Financial Technology",
    description:
      "  To be great at Crabroom, you need a strong grasp of financial technology. Being an expert here means you can help lead the company in new and exciting directions in the industry.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={crab1}
          width={400}
          height={300}
          className="h-full w-full object-cover rounded-3xl"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: " 3. Ace the Interview: Impress with Your Skills and Passion",
    description:
      " Crabroom looks for stars in their interviews. You should be able to talk confidently about your skills and your passion for financial technology. This shows you're ready to make a big impact at Crabroom.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={crab2}
          width={400}
          height={300}
          className="h-full w-full object-cover rounded-3xl"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: " 4. Great Communicator: Share Ideas Clearly and Effectively",
    description:
      "  Good communication is key at Crabroom. You should be able to talk and write well, sharing ideas and working with the team and clients smoothly. This helps everyone work better together.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={crab3}
          width={400}
          height={300}
          className="h-full w-full object-cover rounded-3xl"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: " 5. Stay Positive: Keep an Optimistic and Resilient Attitude",
    description:
      "Having a positive mindset is important. Facing challenges with optimism and resilience inspires others and helps turn tough situations into opportunities for success.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={crab5}
          width={400}
          height={300}
          className="h-full w-full object-cover rounded-3xl"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: " 6. Team Player: Work Well with Others",
    description:
      "  Being part of Crabroom means being a good team player. It's about working together, understanding others, and combining everyone's skills to come up with great solutions.",

    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={crab4}
          width={400}
          height={300}
          className="h-full w-full object-cover rounded-3xl"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

const CoreTeamTraits = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="lg:px-40 sm:px-0">
      <div className="pl-8 pr-8">
        <br />
        <br />
        <h1 className="text-2xl font-ethnocentric text-sky-500 mb-4">
          Joining Crabroom's Junior Core Collaborators
        </h1>
        <h2 className="text-lg font-ethnocentric text-gray-500"> Your Guide to Excellence</h2>
        <div className="flex justify-end">
          <button className="relative duration-500 group cursor-pointer text-slate-100 overflow-hidden h-14 w-32 rounded-full bg-sky-800 p-2 flex justify-center items-center">
            {/* <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
            <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div> */}
            <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-150"></div>
            <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-200"></div>
            <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-300"></div>

            <div className="relative z-20">
              <Link
                href={"/coreteamperks"}
                className="font-semibold text-slate-100"
              >
                Perks 🡢
              </Link>
            </div>
          </button>
        </div>
        <br />
        <h3 className="text-md font-ethnocentric text-gray-400 mb-4">[Six Traits]</h3>
        <br />
        <br />
        <p className="mb-4 text-gray-400" data-aos="fade-up">
          Crabroom PayInt LLC, a distinguished leader in the payment technology
          sector, meticulously identifies six fundamental attributes in its
          prospective team members. These characteristics are imperative for
          individuals aspiring to distinguish themselves within Crabroom's
          esteemed Core Collaborators. We shall now examine these essential
          qualities to comprehend their pivotal role in fostering professional
          success at Crabroom.
        </p>
        <br />
        <div className="pb-10 sm:px-0 custom-scrollbar">
          <StickyScroll content={content} />
        </div>
        <p className="mb-4 text-gray-400" data-aos="fade-up">
          At Crabroom, if you show these six qualities, you're on your way to
          being a top team member. These traits are not just about doing well at
          Crabroom; they're also about growing personally and professionally. If
          you've got these qualities, you're ready for an exciting career with
          Crabroom PayInt LLC, where your skills and dedication will shine.
        </p>
        <div className="flex justify-end mt-10 pb-10">
          <button className=" relative duration-500 group cursor-pointer text-slate-100 overflow-hidden h-14 w-32 rounded-full bg-sky-800 p-2 flex justify-center items-center">
            {/* <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
            <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div> */}
            <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-150"></div>
            <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-200"></div>
            <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-300"></div>

            <div className="relative z-20">
              <Link
                href={"/coreteamperks"}
                className="font-semibold text-slate-100"
              >
                Perks 🡢
              </Link>
            </div>
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CoreTeamTraits;
