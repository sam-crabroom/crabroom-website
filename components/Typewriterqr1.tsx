import React from "react";
import Typewriter from 'typewriter-effect';


export default function TypingEffect() {
  const typedString = "Crabroom is excited to announce a strategic partnership with leading QR code signage manufacturers, aimed at offering an innovative payment solution to clientele. This collaboration is set to transform the revenue model for these manufacturers, shifting from a traditional one-time profit margin associated with each signage sold, to a dynamic, recurring revenue stream!";
  return (
    <div className="typing-effect-container">
      <Typewriter
        options={{
          // strings: [typedString],
          // autoStart: true,
          wrapperClassName: 'typing-effect-wrapper',
          cursorClassName: 'typing-cursor',
          delay: 10,
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