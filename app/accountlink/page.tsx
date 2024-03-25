"use client"

import React, { useState } from 'react';

const GenerateLink = () => {

  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:3001/generate-account-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      window.open(data.url, '_blank');
    } catch (error) {
      console.error('Error generating Account Link: ', error);
    }
  };  

  return (

    <div className="container mx-auto mt-20 mb-28 p-4 bg-gray-600 shadow-lg rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-black text-center mt-4">Onboard On Stripe</h1>
      <p className="text-blue-800 text-center mb-4">Click the 'Onboard' button to initiate the creation of a connected Express account and seamlessly navigate through the onboarding flow.</p>
      <div className="flex items-center justify-center">
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Onboard
        </button>
      </div>
      
      <div className="mt-6 text-black flex flex-col justify-center items-center mb-4">
        <>
          <p className='font-bold text-lg'>During the Onboarding Session, Use the Test Data below for Successful Onboarding:</p>
          <br />
          <br />
          <p className='font-bold'>Page 1:</p>
          <br />
          <div className='items-start'>
          <p>Type of entity: Individual.</p>
          <p>Mobile number: 0000000000</p>
          <p>Email: demo@crabroom.com</p>
          </div>
          <br />
          <br />
          <p className='font-bold'>Page 2:</p>
          <br />
          <p>Test Code: 0000000</p>
          <br />
          <br />
          <p className='font-bold'>Page 3:</p>
          <br />
          <p>Legal name of person: Test Test</p>
          <p>Email address: demo@crabroom</p>
          <p>Business website: crabroom.com</p>
          <p>(or click on add a product description instead and enter test)</p>
          <br />
          <br />
          <p className='font-bold'>Page 4:</p>
          <br />
          <p>Address: line 1 of the address field(street address) should be address_full_match.</p>
          <p>DOB : 01/01/1901</p>
          <p>SSN : 0000</p>
          <br />
          <br />
          <p className='font-bold'>Page 5:</p>
          <br />
          <p>On payout details page, click on use test account button.</p>
          <br />
          <br />
          <p className='font-bold'>Page 6:</p>
          <br />
          <p>On the final summary page, click on Done button.</p>
        </>
      </div>
    </div>
  );
};

export default GenerateLink;
