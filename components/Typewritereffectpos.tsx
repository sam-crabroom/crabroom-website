import React from "react";
import Typewriter from 'typewriter-effect';
//import styles from '@/components/Typewriter.module.css';


export default function TypingEffect() {
  const typedString = " Are you looking for the right payment gateway or POS solution to optimize your business operations? Your search ends here! Our PG/POS matchmaker streamlines the selection, ensuring the ideal fit for your unique needs. Get started now to streamline your payment processes!";
 
  return (
    
    <div className='typing-effect-container' style={{ width:'700px', height:'220px' }}>
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