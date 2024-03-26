"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/ui/footer";
import Link from "next/link";
import crab from "@/public/images/inteview_process-removebg-preview.png";
import Image from "next/image";
import crab1 from "@/public/images/intropic.webp";
import crab2 from "@/public/images/coding.webp";
import crab3 from "@/public/images/performance round.webp";
import crab4 from "@/public/images/v0ogpg9i.png";

const InterviewProcess = () => {
  const [selectedStep, setSelectedStep] = React.useState(1);
  // const boxShadowStyle = {
  //   boxShadow:
  //     "10px 10px 20px -3px #04A4EC, -10px 10px 10px -10px #04A4EC",
  // };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleStepClick = (step: number) => {
    setSelectedStep(step);
  };
  const renderStepContent = () => {
    switch (selectedStep) {
      case 1:
        return (
          <div className="pb-20 mt-10" data-aos="fade-up">
            <div
              className="flex flex-col md:flex-row justify-between"
              data-aos="fade-up"
            >
              <div
                className="flex flex-col md:flex-row max-w-4xl mx-auto my-8 p-6 rounded-3xl shadow-md shadow-sky-500"
                // style={boxShadowStyle}
              >
                <div>
                  <Image
                    src={crab1}
                    alt="Laptop Image"
                    style={{ maxWidth: "100%", height: "auto" }} // Make the image responsive
                  />
                </div>
                <div className="md:ml-4 mt-4 md:mt-0">
                  <h2 className="text-lg mb-2 font-ethnocentric" data-aos="fade-up">
                    Round 1: Introduction Round - 30 minutes
                  </h2>
                  <h2 className="text-sm font-ethnocentric mb-2 text-sky-400" data-aos="fade-up">
                    One Hour Video Call, Get to Know Who We Are
                  </h2>
                  <p className="mb-4 text-slate-400" data-aos="fade-up">
                    In the first round, we aim to get to know you better and
                    introduce you to the Crabroom culture. This video call,
                    lasting for 30 minutes to one hour, allows us to understand
                    your background, experiences, and aspirations. Additionally,
                    we'll share insights into our company's mission, vision, and
                    core values. It's a great opportunity for us to build a
                    connection and ensure a shared sense of purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="pb-20 mt-10">
            <div
              className="flex flex-col md:flex-row justify-between"
              data-aos="fade-up"
            >
              <div
                className="flex   flex-col md:flex-row max-w-4xl mx-auto my-8 p-6 rounded-3xl shadow-md shadow-sky-500"
                // style={boxShadowStyle}
              >
                <div className="md:ml-4 mt-4 md:mt-0">
                  <h2 className="text-lg mb-2 font-ethnocentric" data-aos="fade-up">
                    Round 2: Technical Round
                  </h2>
                  <h2 className="text-sm font-ethnocentric mb-2 text-sky-400" data-aos="fade-up">
                    1-2 Hour Video Call
                  </h2>
                  <p className="mb-4 text-slate-400" data-aos="fade-up">
                    During the technical round, we dive into your expertise and
                    skills. Lasting one to two hours, this video call evaluates
                    your proficiency in your respective domain. We may present
                    real-world scenarios and problem-solving challenges to gauge
                    your capabilities and adaptability. This round helps us
                    assess your potential to contribute meaningfully to our
                    team's projects and advancements We aim to make this
                    experience valuable for both parties for a collaboration.
                  </p>
                </div>
                <div className="flex md:w">
                  <Image
                    src={crab2}
                    alt="Laptop Image"
                    style={{ maxWidth: "100%", height: "auto" }} // Make the image responsive
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="pb-20 mt-10">
            <div
              className="flex flex-col md:flex-row justify-between"
              data-aos="fade-up"
            >
              <div
                className="flex   flex-col md:flex-row max-w-4xl mx-auto my-8 p-6 rounded-3xl shadow-md shadow-sky-500"
                // style={boxShadowStyle}
              >
                <div className="flex md:w">
                  <Image
                    src={crab3}
                    alt="Laptop Image"
                    style={{ maxWidth: "100%", height: "auto" }} // Make the image responsive
                  />
                </div>
                <div className="md:ml-4 mt-4 md:mt-0">
                  <h2 className="text-lg mb-2 font-ethnocentric" data-aos="fade-up">
                    Round 3: Performance Round
                  </h2>
                  <h2 className="text-sm font-ethnocentric mb-2 text-sky-400" data-aos="fade-up">
                    In-Person, Paid Interview, One Week Duration
                  </h2>
                  <p className="mb-4 text-slate-400" data-aos="fade-up">
                    The performance round is an immersive experience where we
                    invite you to join our team for one week. As a paid
                    interview, you'll collaborate on actual projects, work
                    alongside our professionals, and experience the Crabroom
                    work environment firsthand. This extended interaction allows
                    you to showcase your skills and fit within our dynamic team.
                    At the same time, you'll gain valuable insights into our
                    operations and culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="pb-20 mt-10">
            <div
              className="flex flex-col md:flex-row justify-between"
              data-aos="fade-up"
            >
              <div
                className="flex flex-col md:flex-row max-w-4xl mx-auto my-8 p-6 rounded-3xl shadow-md shadow-sky-500"
                // style={boxShadowStyle}
              >
                <div className="md:ml-4 mt-4 md:mt-0">
                  <h2 className="text-lg mb-2 font-ethnocentric" data-aos="fade-up">
                    Round 4: HR Round
                  </h2>
                  <h2
                    className="text-sm font-ethnocentric mb-2 text-sky-400"
                    data-aos="fade-up"
                  >
                    Compensation, Traits and Perks, Responsibilities,
                    Confirmation
                  </h2>
                  <p className="mb-4 text-slate-400" data-aos="fade-up">
                    In the final round, our HR team will discuss various aspects
                    of your potential role at Crabroom. We'll cover compensation
                    packages, benefits, and perks tailored to match your
                    qualifications. Additionally, we'll clarify your
                    responsibilities, ensuring alignment with your professional
                    goals and aspirations. This round is the gateway to
                    confirming your position as a valued member of the Crabroom
                    family.
                  </p>
                </div>
                <div className="flex md:w">
                  <Image
                    src={crab4}
                    alt="Laptop Image"
                    style={{ maxWidth: "100%", height: "auto" }} // Make the image responsive
                  />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="lg:px-40 sm:px-0 md:px-20">
      <div className="pl-8 pr-8 pb-10">
        <br />
        <br />

        <h1 className="text-2xl text-sky-500 font-ethnocentric mb-4" data-aos="fade-up">
          Interview Process at Crabroom: Unlocking Your Potential
        </h1>
        <div className="flex justify-end mt-8">
          <button className="relative duration-500 group cursor-pointer text-slate-100 overflow-hidden h-14 w-96 rounded-full bg-sky-600 hover:bg-sky-700 p-2 flex justify-center items-center">
            {/* <div className="absolute z-10 w-64 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
            <div className="absolute z-10 w-48 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
            <div className="absolute z-10 w-36 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
            <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div> */}
            {/* <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div> */}

            <div className="relative z-20">
              <Link
                href={"/jobschedulepage"}
                className="font-ethnocentric text-sm text-slate-100"
              >
                Schedule Interview (Invited applicants only)
              </Link>
            </div>
          </button>
        </div>

        <br />
        <br />

        <p className="mb-4 pb-10 text-gray-400" data-aos="fade-up">
          Joining Crabroom's innovative team begins with a comprehensive
          interview process designed to identify exceptional talents and foster
          a strong fit with our organization's values. Let's explore the four
          rounds of our interview process:
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Timeline with spaced circular points and connecting lines */}
          <div
            style={{
              display: "flex",
              position: "relative",
              marginBottom: "10px",
            }}
          >
            {[1, 2, 3, 4].map(
              (step: number, index: number, array: number[]) => (
                <React.Fragment key={step}>
                  {index < array.length - 1 && (
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: `calc(${(100 / (array.length - 1)) * index}%)`,
                        transform: "translate(-50%, -50%)",
                        height: "5px",
                        width: `${100 / (array.length - 1)}%`,
                        backgroundColor:
                          index < selectedStep - 1 ? "#04A4EC" : "transparent",
                        zIndex: 0,
                      }}
                    />
                  )}
                  <div
                    key={step}
                    onClick={() => handleStepClick(step)}
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor:
                        selectedStep === step ? "#ffffff" : "#04A4EC",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "black",
                      fontSize: "16px",
                      cursor: "pointer",
                      zIndex: 1,
                      marginLeft: "50px", // Increase the margin for more space
                    }}
                  >
                    {step}
                  </div>
                </React.Fragment>
              )
            )}
            {/* Pointer Tracer Connection */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: `calc(${(100 / (4 - 1)) * (selectedStep - 1)}% + 30px)`,
                transform: "translate(-50%, -50%)",
                height: "8px",
                width: "8px",
                backgroundColor: "#04A4EC",
                borderRadius: "50%",
                zIndex: 2,
              }}
            />
          </div>
          {/* Render dynamic step content */}

          {/* Render dynamic step content */}
        </div>
        {renderStepContent()}
        
        <p className="mb-4 text-gray-400" data-aos="fade-up">
          At Crabroom, we believe in identifying individuals who align with our
          values and contribute to our shared vision. Our interview process is
          designed to be thorough, insightful, and engaging, ensuring that every
          candidate and our team find the perfect match. We look forward to
          discovering your potential and embarking on a journey of growth and
          success together.
        </p>

        <div className="flex justify-end mt-8">
          <button className="relative duration-500 group cursor-pointer text-slate-100 overflow-hidden h-14 w-96 rounded-full bg-sky-600 hover:bg-sky-700 p-2 flex justify-center items-center">
            {/* <div className="absolute z-10 w-64 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
            <div className="absolute z-10 w-48 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
            <div className="absolute z-10 w-36 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
            <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div> */}
            {/* <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div> */}

            <div className="relative z-20">
              <Link
                href={"/jobschedulepage"}
                className="font-ethnocentric text-sm text-slate-100"
              >
                Schedule Interview (Invited applicants only)
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

export default InterviewProcess;
