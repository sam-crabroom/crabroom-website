import React from "react";
import Typewriter from "typewriter-effect";
//import styles from '@/components/Typewriter.module.css';
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export default function TypingEffect() {
  const typedString =
    "Experience the game-changing expertise of our Stripe payment gateway experts who will architect, integrate, and deploy a tailor-made Stripe solution to meet your unique business requirements. Partner with us today and unlock the potential of an optimized payment solution that maximizes revenue and customer satisfaction. Contact us now and let's embark on this exciting journey together!";

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 5.0,
          ease: "easeInOut",
        }}
        className="mt-40 bg-gradient-to-br from-slate-100 to-slate-900 pt-40 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl "
      >
        <div
          className="typing-effect-container sm:w-full lg:px-80 md:px-16"
          style={{ lineHeight: "0.7" }}
        >
          <Typewriter
            options={{
              //strings: [typedString],
              autoStart: true,
              wrapperClassName: "typing-effect-wrapper",
              cursorClassName: "typing-cursor",
              delay: 20,

              //typeSpeed: 100, // Adjust the value to control the typing speed
              // Add more options as needed
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(typedString)
                .callFunction(() => {
                  console.log("String typed out!");
                })
                // .pauseFor(2500)
                // .deleteAll()
                // .callFunction(() => {
                //   console.log('All strings were deleted');
                // })
                .start();
            }}
          />
        </div>
      </motion.h1>
    </LampContainer>
  );
}
