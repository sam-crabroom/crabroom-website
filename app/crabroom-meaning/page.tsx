'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import crab from "@/public/images/crabroom_image_crab.webp";
import room from "@/public/images/crabroom_image-room.webp";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Footer from '@/components/ui/footer'

const CrabroomMeaning = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS library with a duration of 1000ms
  }, []);

  return (
    <div>
    <div className="mx-auto w-10/12 lg:w-9/12 mt-6 mb-16">
      <h1 className="text-2xl text-sky-500 font-ethnocentric mb-4 text-left">Analogy</h1>

      <p data-aos="fade-up">
        Crabroom is a name that captures the essence of agility, adaptability, and a multifaceted approach- qualities intrinsic to both the crab and our approach to payment integration solutions. Just as a crab seamlessly navigates its surroundings, adept at moving in any direction with precision and efficiency, Crabroom embodies this same versatility in navigating the complexities of payment integration.
      </p>

      <div data-aos="fade-up">
        <div className="flex justify-center mt-4 mb-4">
          <Image
            src={crab}
            width={250}
            height={250}
            alt="Crab Logo"
            className='rounded-full border-4 border-sky-500'
          />
        </div>

        <p className="mt-3">
          The crab, a creature known for its hard shell, symbolizes the robust security and protection we offer in our payment solutions. It's also an expert in finding and utilizing various resources in its environment, akin to how we optimize and integrate diverse payment methods and technologies for our clients.
        </p>
      </div>

      <p data-aos="fade-up" className="mt-3">
        Moreover, the 'room' in Crabroom suggests a space or a hub – a place where ideas, solutions, and innovations converge. It represents our role as a central point where various aspects of digital payments come together to create cohesive, streamlined experiences for our clients.
      </p>

      <div data-aos="fade-up" className="flex justify-center mt-4 mb-4">
        <Image src={room} width={350} height={350} className='rounded-2xl border-4 border-sky-500' alt='Room Image'/>
      </div>

      <p data-aos="fade-up" className="mt-3">
        In essence, Crabroom stands for a company that is as adaptable, resourceful, and secure as the crab, coupled with the collaborative and innovative space suggested by 'room'. It's a unique name that sets us apart and embodies our commitment to providing versatile, secure, and innovative payment integration solutions.
      </p>
    </div>
    <div>
      <Footer/>
      </div>
    </div>
  );
};

export default CrabroomMeaning;
