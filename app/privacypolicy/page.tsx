'use client'
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '@/components/ui/footer'

const PrivacyPolicy = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1500 }); 
    setShowContent(true); 
  }, []);

  return (
   
    <div >
     
    <div className="mx-auto w-10/12 lg:w-9/12 mt-6 mb-16" data-aos="fade-up">
      <h1 className="text-2xl font-ethnocentric text-sky-500 mb-4 text-left" data-aos="fade-up">Privacy Policy</h1>

      <p data-aos="fade-up" className='text-slate-400'>
        This privacy notice discloses the privacy practices for crabroom.com. This privacy notice applies solely to information collected by this website. It will notify you of the following:
      </p>

      <ol className="list-decimal ml-6 mt-4 text-slate-400" data-aos="fade-up" >
        <li>
          <p data-aos="fade-up">
            The site collects the following information from the visitor:
          </p>
          <ol className="list ml-6 mt-2 list-outside">
            <li>
              <p data-aos="fade-up">
                a. We installed Google tracking scripts on the site to analyze the site traffic. For more information, please visit,  https://www.google.com/analytics/terms/us.html
              </p>
            </li>
            <li>
              <p data-aos="fade-up">
                b. Payment Gateway Companies are requested to provide payment gateway information, which will be displayed on the search results page when the visitor uses our PayIntGo tool.
              </p>
            </li>
            <li>
              <p data-aos="fade-up">
                c. The contact details collected on the contact us page will be used to provide service to the customer.
              </p>
            </li>
            <li>
              <p data-aos="fade-up">
                d. The payment card information provided is never stored in our database unless specified on the checkout page.
              </p>
            </li>
          </ol>
        </li>
        <li>
          <p data-aos="fade-up">
            The information remains stored in our database on the cloud. We do not use this information to spam the customer with marketing emails unless the customer subscribes to our newsletter or other services. The information is sent in an encrypted format to the payment gateways to process the card. This information remains stored at the payment gateway.
          </p>
        </li>
        <li>
          <p data-aos="fade-up">
            We strive to make sure that the information provided on our website crabrom.com and its subdomains is accurate. However, the information related to Payment Gateways that are retrieved by using PayIntGo Search Tool is accurate to the date displayed against each gateway. Our team tries to update this information almost every quarter.
          </p>
        </li>
      </ol>

      <h2 className="text-lg text-gray-200 font-ethnocentric mt-4 mb-2" data-aos="fade-up">Information Collection, Use, and Sharing</h2>
      <p data-aos="fade-up" className='text-slate-400'>
        We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other sources like contact us web pages. We will not sell or rent this information to anyone.
      </p>
      <p data-aos="fade-up" className='text-slate-400'>
        We will use your information to respond to you regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g., to ship an order.
      </p>
      <p data-aos="fade-up" className='text-slate-400'>
        Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.
      </p>

      <h2 className="text-lg text-gray-200 font-ethnocentric mt-4 mb-2" data-aos="fade-up">Your Access to and Control Over Information</h2>
      <p data-aos="fade-up" className='text-slate-400'>
        You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:
      </p>
      <ul className="list-disc ml-6 mt-2 text-slate-400">
        <li data-aos="fade-up">See what data we have about you, if any.</li>
        <li data-aos="fade-up">Change/correct any data we have about you.</li>
        <li data-aos="fade-up">Have us delete any data we have about you.</li>
        <li data-aos="fade-up">Express any concern you have about our use of your data.</li>
      </ul>

      <h2 className="text-lg text-gray-200 font-ethnocentric mt-4 mb-2" data-aos="fade-up">Security</h2>
      <p data-aos="fade-up" className='text-slate-400'>
        We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.
      </p>
      <p data-aos="fade-up" className='text-slate-400'>
        Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us or payment gateway securely. You can verify this by looking for a lock icon in the address bar and looking for "https" at the beginning of the address of the Web page.
      </p>
      <p  data-aos="fade-up" className='text-slate-400'>
        While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.
      </p>

      
      <p className='mt-10 text-slate-400' data-aos="fade-up">
        If you feel that we are not abiding by this privacy policy, you should contact us immediately via email <span className='text-blue-500'>contact@crabroom.com</span>
      </p>
    </div>
    
    <div>
        <Footer/>
    </div>
   
    </div>
    
  );
 
};


export default PrivacyPolicy;