"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import crab4 from "@/public/images/remotework.webp";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import crab from "@/public/images/money.webp";
import crab1 from "@/public/images/trip.webp";
import crab5 from "@/public/images/flexiblework.webp";
import crab7 from "@/public/images/goalsetting.webp";
import crab8 from "@/public/images/training.webp";
import crab6 from "@/public/images/communication.webp";
import crab9 from "@/public/images/suprizes.webp";
import crab2 from "@/public/images/bonus.webp";
import crab10 from "@/public/images/health care.webp";
import Link from "next/link";
const content = [
  {
    title: "1. Competitive Salary Package",
    description:
      " As a member of the Crabroom team, you'll receive a salary that's not only competitive but also reflects the value and skills you bring to the company. This means you'll be paid well for your work and experience",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
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
    title: "2. Performance Bonus",
    description:
      " Crabroom appreciates hard work and success. You'll be eligible for extra bonuses, both monthly and annually, as a reward for your excellent performance and dedication to your job. This is a way to recognize and encourage your efforts and achievements.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={crab2}
          width={400}
          height={300}
          className="h-full w-full  object-cover rounded-3xl"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "3. Funded Global Business Trip",
    description:
      " For your professional growth, Crabroom offers the chance to travel to the United States on a business trip, fully paid for by the company. This trip is a great opportunity to learn new things, meet industry leaders, and get a broader view of the global business landscape.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
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
    title: "4. Remote Work Flexibility",
    description:
      "  The company understands the importance of balancing work and personal life. You have the option to work from home, which gives you the flexibility to manage your time and work environment in a way that suits you best.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
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
  {
    title: "5. Flexible Work Hours",
    description:
      " Crabroom knows that everyone has different times when they are most productive. Therefore, you have the freedom to choose your own working hours. This means you can work during the times you feel most energetic and focused.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
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
    title: "6. Professional Communication Training",
    description:
      "  Good communication is essential in the workplace. Crabroom provides special training to help you enhance your communication skills. This training will empower you to express your ideas clearly and effectively",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={crab6}
          width={400}
          height={300}
          className="h-full w-full object-cover rounded-3xl"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "7. Goal Setting Support",
    description:
      "The company is committed to your success and will offer personalized support in setting and achieving your career goals. This includes help in planning your career path and reaching important milestones.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={crab7}
          width={400}
          height={300}
          className="h-full w-full object-cover rounded-3xl"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "8. Tailored Training Programs",
    description:
      "Crabroom offers training programs that are specifically designed to align with your career aspirations. These programs are focused on helping you develop skills that are relevant to the career path you are passionate about.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={crab8}
          width={400}
          height={300}
          className="h-full w-full object-cover rounded-3xl"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "9. Exciting Surprises",
    description:
      " To ensure a lively work environment, Crabroom organizes weekend parties and other surprises. These activities are a fun way to relax and enjoy your time at the company, promoting a healthy work-life balance.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={crab9}
          width={400}
          height={300}
          className="h-full w-full object-cover rounded-3xl"
          alt="linear board demo"
        />
      </div>
    ),
  },
  
  {
    title: "10. Comprehensive Health Insurance Coverage",
    description:
      "Your health and well-being are a top priority for Crabroom. The company provides extensive health insurance coverage to ensure that you and your family have access to the best medical care without worrying about the cost.",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={crab10}
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-3xl"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
const CoreTeamPerks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS library with a duration of 1000ms
  }, []);

  return (
    <div className="lg:px-40 sm:px-0 md:px-20">
      <div className="pl-8 pr-8">
        <br/>
        <br/>

        <h1 className="text-2xl text-sky-500 font-ethnocentric mb-4">
          Joining Crabroom's Jr. Core Collaborators
        </h1>
        <h2 className="text-lg text-gray-500 font-ethnocentric">The Path to High Achievement at Crabroom</h2>

        <br/>
        <div className="flex justify-end">
          <button className="relative duration-500 group cursor-pointer text-slate-100 overflow-hidden h-14 w-64 rounded-full bg-sky-800 p-2 flex justify-center items-center">
            <div className="absolute z-10 w-52 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
            <div className="absolute z-10 w-44 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
            <div className="absolute z-10 w-36 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
            <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
            {/* <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div> */}

            <div className="relative z-20">
              <Link
                href={"/interviewprocess"}
                className="font-semibold text-slate-100"
              >
                Interview Process 🡢
              </Link>
            </div>
          </button>
        </div>

        <h3 className="text-md text-gray-400 font-ethnocentric mb-4">[Ten Perks]</h3>

        <br/>
        <br/>

        <div className="pb-10 sm:px-0">
          <StickyScroll content={content} />
        </div>

        <div className="flex justify-end pb-10">
        <button className="relative duration-500 group cursor-pointer text-slate-100 overflow-hidden h-14 w-64 rounded-full bg-sky-800 p-2 flex justify-center items-center">
            <div className="absolute z-10 w-52 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
            <div className="absolute z-10 w-44 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
            <div className="absolute z-10 w-36 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
            <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
            {/* <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div> */}

            <div className="relative z-20">
              <Link
                href={"/interviewprocess"}
                className="font-semibold text-slate-100"
              >
                Interview Process 🡢
              </Link>
            </div>
          </button>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default CoreTeamPerks;
