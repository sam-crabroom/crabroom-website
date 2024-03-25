'use client'
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '@/components/ui/footer'

const TermsAndConditions = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1500 }); 
    setShowContent(true); 
  }, []);

  return (
    <div>
    <div className="mx-auto w-10/12 lg:w-9/12 mt-6 mb-16">
      <h1 className="text-2xl font-ethnocentric text-sky-500 mb-4 text-left" data-aos="fade-up">Terms and Conditions</h1>
      <h2 className="text-md text-gray-200 font-ethnocentric mt-4 mb-2" data-aos="fade-up"> 1. Introduction</h2>
      <p data-aos="fade-up" className='text-slate-400'>
        These Website Standard Terms And Conditions (these 'Terms' or these 'Website Standard Terms And Conditions') contained herein on this webpage, shall govern your use of this website, including all pages within this website (collectively referred to herein below as this 'Website'). These Terms apply in full force and effect to your use of this Website, and by using this Website, you expressly accept all terms and conditions contained herein in full. You must not use this Website if you have any objection to any of these Website Standard Terms And Conditions. This Website is not for use by any minors (defined as those who are not at least 18 years of age), and you must not use this Website if you are not a major.
      </p>

      <h2 className="text-md text-gray-200 font-ethnocentric mt-4 mb-2" data-aos="fade-up">2. Intellectual Property Rights</h2>
      <p data-aos="fade-up" className='text-slate-400'>
        Other than the content you own, which you may have opted to include on this Website, under these Terms, Crabroom PayInt LLC and/or its licensors own all rights to the intellectual property and material contained in this Website, and all such rights are reserved. You are granted a limited license only, subject to the restrictions provided in these Terms, for purposes of viewing the material contained on this Website.
      </p>

      <h2 className="text-md text-gray-200 font-ethnocentric mt-4 mb-2" data-aos="fade-up">3. Restrictions</h2>
      <p data-aos="fade-up" className='text-slate-400'>
        You are restricted from all of the following expressly and emphatically:
      </p>
      <ul className="list-disc ml-6 mt-2 text-slate-400" data-aos="fade-up" >
        <li >Publishing any Website material in any media;</li>
        <li >Selling, sublicensing and/or otherwise commercializing any Website material;</li>
        <li >Publicly performing and/or showing any Website material;</li>
        <li >Using this Website in any way that is, or may be, damaging to this Website;</li>
        <li >Using this Website in any way that impacts user access to this Website;</li>
        <li >Using this Website contrary to applicable laws and regulations, or in a way that causes, or may cause, harm to the Website, or to any person or business entity;</li>
        <li >Engaging in any data mining, data harvesting, data extracting or any other similar activity with this Website, or while using this Website;</li>
        <li >Using this Website to engage in any advertising or marketing;</li>
      </ul>
      <p data-aos="fade-up" className='text-slate-400'>
        Certain areas of this Website are restricted from access by you and Crabroom PayInt LLC may further restrict access by you to any areas of this Website, at any time, in its sole and absolute discretion. Any user ID and password you may have for this Website are confidential, and you must maintain the confidentiality of such information.
      </p>

      <h2 className="text-md text-gray-200 font-ethnocentric mt-4 mb-2" data-aos="fade-up">4. Your Content</h2>
      <p data-aos="fade-up" className='text-slate-400'>
        In these Website Standard Terms And Conditions, 'Your Content' shall mean any audio, video, text, images or other material you choose to display on this Website. With respect to Your Content, by displaying it, you grant Crabroom PayInt LLC a non-exclusive, worldwide, irrevocable, royalty-free, sublicensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media. Your Content must be your own and must not be infringing on any third party's rights. Crabroom PayInt LLC reserves the right to remove any of Your Content from this Website at any time, and for any reason, without notice.
      </p>
      <h2 className="text-md text-gray-200 font-ethnocentric mt-4 mb-2" data-aos="fade-up">5. No warranties</h2>
      <p data-aos="fade-up" className='text-slate-400'>
      This Website is provided 'as is,' with all faults, and Crabroom PayInt LLC makes no express or implied representations or warranties, of any kind related to this Website or the materials contained on this Website. Additionally, nothing contained on this Website shall be construed as providing consult or advice to you.
      </p>
      <h2 className="text-md text-gray-200 font-ethnocentric mt-4 mb-2" data-aos="fade-up">6. Limitation of liability</h2>
      <p data-aos="fade-up" className='text-slate-400'>
      In no event shall Crabroom PayInt LLC, nor any of its officers, directors and employees, be liable to you for anything arising out of or in any way connected with your use of this Website, whether such liability is under contract, tort or otherwise, and Crabroom PayInt LLC, including its officers, directors, and employees shall not be liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
      </p>
      <h2 className="text-md text-gray-200 font-ethnocentric mt-4 mb-2" data-aos="fade-up">7. Indemnification</h2>
      <p data-aos="fade-up" className='text-slate-400'>
      You hereby indemnify to the fullest extent Crabroom PayInt LLC from and against any and all liabilities, costs, demands, causes of action, damages and expenses (including reasonable attorney�s fees) arising out of or in any way related to your breach of any of the provisions of these Terms.
      </p>
      <h2 className="text-md text-gray-200 font-ethnocentric mt-4 mb-2" data-aos="fade-up">8. Severability</h2>
      <p data-aos="fade-up" className='text-slate-400'>
      If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole, and such provisions shall be deleted without affecting the remaining provisions herein.
      </p>
      <h2 className="text-md text-gray-200 font-ethnocentric mt-4 mb-2" data-aos="fade-up">9. Variation of Terms</h2>
      <p data-aos="fade-up" className='text-slate-400'>
      Crabroom PayInt LLC is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review such Terms on a regular basis to ensure you understand all terms and conditions governing the use of this Website.
      </p>
      <h2 className="text-md text-gray-200 font-ethnocentric mt-4 mb-2" data-aos="fade-up">10. Assignment</h2>
      <p data-aos="fade-up" className='text-slate-400'>
      Crabroom PayInt LLC shall be permitted to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification or consent required. However, .you shall not be permitted to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
      </p>
      <h2 className="text-md text-gray-200 font-ethnocentric mt-4 mb-2" data-aos="fade-up">11. Entire Agreement</h2>
      <p data-aos="fade-up" className='text-slate-400'>
      These Terms, including any legal notices and disclaimers contained on this Website, constitute the entire agreement between Crabroom PayInt LLC and you in relation to your use of this Website, and supersede all prior agreements and understandings with respect to the same.
      </p>
      <h2 className="text-md text-gray-200 font-ethnocentric mt-4 mb-2" data-aos="fade-up">12. Governing Law & Jurisdiction</h2>
      <p data-aos="fade-up" className='text-slate-400'>
        These Terms will be governed by and construed in accordance with the laws of the State of Massachusetts, and you submit to the non-exclusive jurisdiction of the state and federal courts located in the State of Massachusetts.
      </p>
    </div>
    <div>
    <Footer/>
    </div>
    </div>
  );
};

export default TermsAndConditions;
