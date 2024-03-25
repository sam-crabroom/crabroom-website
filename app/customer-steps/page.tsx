"use client"
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState, ReactNode } from 'react';

interface StepProps {
  title: string;
  description: ReactNode; // You can adjust the type based on the actual content
}

const Step: React.FC<StepProps> = ({ title, description }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-4">
      <div
        className="cursor-pointer bg-gray-600 p-2 flex justify-between items-center text-black"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className='font-bold'>{title}</h3>
        <span>{expanded ? '▼' : '▶'}</span>
      </div>
      {expanded && <p className="p-2 bg-gray-400 text-gray-700">{description}</p>}
    </div>
  );
};
const Instructions = () => {
  const router = useRouter();
  const [customerId, setCustomerId] = useState('');
  

  const handleGoToBillingPortal = async () => {
    try {
      // Create a customer and get the customer ID
      //const createCustomerResponse = await axios.post('http://localhost:3001/create-customer-subscriptions');
      //const createdCustomerId = createCustomerResponse.data.customerId;
     // setCustomerId(createdCustomerId);

      // Open the billing portal using the customer ID
      const billingPortalResponse = await axios.get(`https://wzuderpzvb.execute-api.us-east-1.amazonaws.com/default/billingportal-fordemomo`);
      window.location.href = billingPortalResponse.data.redirectUrl;
    } catch (error) {
      console.error('Error opening Billing Portal:', error);
    }
  };
  return (
    <div className="container mx-auto mt-20 p-10 bg-gray-700  shadow-lg rounded-md">
      <h1 className="text-2xl font-bold mb-6 text-black text-center">customer portal</h1>
      
      <Step
        title="Step 1: Explore Subscription Management"
        description={
          <>
            Explore the options for managing subscriptions.In the demo environment, you can simulate actions such as modifying or pausing subscription plans.it simulate updating payment information. This showcases how users can manage and ensure accurate billing details.
          </>
        }
      />
      <Step
        title="Step 2:Accessing to customer portal"
        description={
          <>
            Click for <Link href="#" onClick={handleGoToBillingPortal} style={{ fontWeight: 'bold', textDecoration: 'underline' }}>demo</Link> to go for managing subscription plans, payment method,billing information.
          
          </>
        }
      />
    </div>
  );
};
export default Instructions; 