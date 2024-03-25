import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function CallToAction() {
  const [showButton, setShowButton] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowButton(true);
  //   }, 10000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div>
    <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center pb-20">
      <div className="transition duration-1000 ease-in-out">
        <Link
          className="btn text-white bg-sky-500 hover:bg-sky-600 rounded-md w-44 text-md mb-4"
          href={"/bookmeeting"}
          passHref
        >
          Book Meeting
        </Link>
      </div>
    </div>
    </div>
  );
}
