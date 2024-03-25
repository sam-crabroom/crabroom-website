"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    hbspt?: any;
  }
}

export default function HubSpotForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "8163130",
          formId: "1491d452-96dd-45b2-a137-eb2ce3b80ba5",
          version: "V2_PRERELEASE",
          target: "#hubspotForm",
        });
      }
    });
  }, []);

  return (
    <div className="mt-10 lg:mx-80 mx-6 pb-10 items-center">
      <div className="flex justify-center font-ethnocentric text-xl text-sky-500 mt-2 pb-10">
        Job Application - A Journey into Success
      </div>
      <div
        className="mt-4 bg-black"
        style={{ backgroundColor: "black" }}
        id="hubspotForm"
      ></div>
    </div>
  );
}
