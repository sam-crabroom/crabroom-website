// Import necessary modules
'use client'
import React, { useState, ReactNode } from 'react';

// Define Link component
interface LinkProps {
  url: string;
  text: ReactNode;
}

const Link: React.FC<LinkProps> = ({ url, text }) => (
 
  <a href={url} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
    {text}
  </a>
  
);

// Define Step component
interface StepProps {
  title: string;
  description: ReactNode;
}

const Step: React.FC<StepProps> = ({ title, description }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-4">
      <div
        className="cursor-pointer bg-gray-600 p-2 flex justify-between items-center text-black"
        onClick={() => setExpanded(!expanded)}
      >
        <h3>{title}</h3>
        <span>{expanded ? '▼' : '▶'}</span>
      </div>
      {expanded && <div className="p-2 bg-gray-400 text-gray-700">{description}</div>}
    </div>
  );
};

// Define Instructions component
const Instructions = () => {
  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:3001/create-login-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      window.location.href = data.url;
    } catch (error) {
      console.error('Error generating account link:', error);
    }
  };

  return (
    <div className="container mx-auto mt-20 p-10 bg-gray-700 shadow-lg rounded-md">
      <h1 className="text-2xl font-bold mb-6 text-black text-center">Stripe Express Connect Instructions</h1>

      <Step
        title="Step 1: Generate an Onboarding Link for your Express Account"
        description={<Link url="/accountlink" text="Click here to generate Onboarding Link." />}
      />

      <Step
        title="Step 2: Log in to the Merchant Stripe Dashboard as a Third-Party Merchant"
        description={<Link url="#" text="Click here to generate login link and access your Express Dashboard." />}
      />

      {/* Add more steps as needed */}
    </div>
  );
};

export default Instructions;



