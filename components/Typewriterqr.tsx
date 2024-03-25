import React from "react";
import Typewriter from 'typewriter-effect';
//import styles from '@/components/Typewriter.module.css';


export default function TypingEffect() {
  const typedString = " Crabroom's latest initiative redefines the traditional business model for signage manufacturers. Through this strategic collaboration, manufacturers are now poised to unlock a continuous stream of revenue, moving beyond the limitations of one-time sales/profit. This partnership not only enhances the value of signage products but also opens up new avenues for manufacturers to innovate, offering end-users dynamic and versatile digital solutions! ";
 
  return (
    
    <div className='typing-effect-container' style={{ lineHeight: '1.9', width:'500px', height:'600px'}}>
      <Typewriter
         options={{
          // strings: [typedString],
          autoStart: true,
          wrapperClassName: "typing-effect-wrapper",
          cursorClassName: "typing-cursor",
          delay: 20,
          //typeSpeed: 100, // Adjust the value to control the typing speed
          // Add more options as needed
        }}
        onInit={(typewriter) => {
          typewriter.typeString(typedString)
            .callFunction(() => {
              console.log('String typed out!');
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

    
  );
  
}