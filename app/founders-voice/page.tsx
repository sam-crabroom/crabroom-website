'use client'
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import Image from 'next/image';
import 'aos/dist/aos.css';
import Footer from '@/components/ui/footer'
import crab from '@/public/images/founders-voice.webp'
//import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
const FoundersVoice = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1500 }); 
    setShowContent(true); 
  }, []);

  return (
    <div>
      
    <div className="mx-auto w-10/12 lg:w-9/12 mt-6 pb-10 text-white">
      <h1 className="text-2xl font-ethnocentric text-sky-500 mb-4 text-left">Unwavering Dedication and Unyielding Resolve</h1>

      <div className='mt-6 text-gray-300'>
        <p data-aos="fade-up">
          In the crucible of modern existence, where aspirations converge with challenges, I stand unwavering, a sentinel of unwavering dedication and unyielding resolve. The relentless currents of progress surge around us, demanding an unrelenting pursuit of excellence. It is within this tempest that I forge my path, driven by an insatiable thirst for mastery.
        </p>
        <p className="mt-3" data-aos="fade-up">
          My journey, a tapestry woven with threads of audacity and diligence, has led me through the labyrinthine corridors of startups and corporate behemoths alike. A crucible of experience, where the alchemy of innovation fuses with the crucible of execution, has honed my mettle.
        </p>
        <p className="mt-3" data-aos="fade-up">
          From the embryonic stages of fledgling endeavors, I have orchestrated the symphony of creation, laying foundations that resonate with the symphonic resonance of accomplishment. As a harbinger of intricate yet harmonious development, I have orchestrated the convergence of multifarious disciplines, guiding them towards the crescendo of achievement.
        </p>
        <p className="mt-3" data-aos="fade-up">
          Certified by the crucible of challenges, I have emerged as a battle-hardened Project Manager. A maestro of payment integration and FinTech, I wield the baton of execution to orchestrate intricate maneuvers and harmonize disparate elements into a synchronized whole.
        </p>
        <div className="flex justify-center mt-4 mb-4" data-aos="fade-up">
          <Image
            src={crab}
            width={250}
            height={250}
            alt="Crab Logo"
            className='rounded-full border-2 border-sky-500'
          />
        </div>
        <p className="mt-3" data-aos="fade-up">
          I am no stranger to the crucible of knowledge, having quenched my thirst at the fountain of academic pursuit. A Master's degree from North Eastern University stands as a testament to my commitment to enlightenment, while a Certified Scrum Master designation underscores my mastery of modern project paradigms.
        </p>
        <p className="mt-3" data-aos="fade-up">
          In my current incarnation, I am vested in the realm of Crabroom, a vanguard of innovations in payment integration where my multifaceted expertise converges. Here, success is not a mere destination but an odyssey, a relentless pursuit of the ideal solution. As a stalwart architect of pragmatic resolutions, I collaborate with visionary clients to erect edifices of streamlined payment software, empowering them to navigate the digital expanse with unparalleled efficacy.
        </p>
        <p className="mt-3" data-aos="fade-up">
          My crucible-forged journey continues, an odyssey illuminated by the blazing crucible of technology, innovation, and unrelenting dedication. Let us traverse this path together, igniting beacons of progress amidst the crucible of transformation.
        </p>
        <p className="text-left mt-4 font-medium" data-aos="fade-up">
          Bhavesh Dasireddy <br />
          Founder <br />
          Crabroom PayInt LLC
        </p>
      </div>
    </div>
    
    <div>
      <Footer/>
      </div>
    </div>
  );
};

export default FoundersVoice;
