"use client";
import React, { useRef } from "react";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
  
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
   // target: ref,
  container: ref,
   offset: ["start start", "end start"],
  });
  const cardLength = content.length+1;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // const backgroundColors = [
  //   "var(--slate-900)",
  //   "var(--black)",
  //   "var(--neutral-900)",
  // ];
  // const linearGradients = [
  //   "linear-gradient(to bottom right, var(--sky-500), var(--emerald-500))",
  //   "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
  //   "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  // ];
  return (
    <motion.div
      // animate={{
      //   backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      // }}
      className=" w-full max-w-7xl h-[30rem] overflow-y-auto flex justify-center relative rounded-xl"
      ref={ref}
      style={{ scrollbarWidth: 'thin', scrollbarColor: '#04A4EC transparent' }}
    >
      <div className="div relative w-full max-w-3xl flex items-start ">
        <div className="max-w-4xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-xl font-ethnocentric text-sky-500"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-md text-gray-400 max-w-xl mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40"/>
        </div>
      </div>
      <motion.div
        // animate={{
        //   background: linearGradients[activeCard % linearGradients.length],
        // }}
        className={cn(
          "lg:block h-80 w-120 rounded-md flex-col md:flex-row sticky top-10",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
