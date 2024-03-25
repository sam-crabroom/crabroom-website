"use client";
import React, { useEffect } from "react";
//import Footer from '@/components/ui/footer';

const JobSchedule = () => {
  useEffect(() => {
    // Check if running on the client side
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src =
        "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
      script.type = "text/javascript";
      script.async = true;

      const container =
        document.querySelector(".meetings-iframe-container") ??
        document.createElement("div");
      container.appendChild(script);

      // Clean up the script when the component unmounts
      return () => {
        container.removeChild(script);
      };
    }
  }, []);

  return (
    <>
      <div
        className="meetings-iframe-container"
        style={{ backgroundColor: "black" }}
        data-src="https://meetings.hubspot.com/bhavesh-dasireddy/crabroom-job-interview?embed=true"
      ></div>
    </>
  );
};

export default JobSchedule;
