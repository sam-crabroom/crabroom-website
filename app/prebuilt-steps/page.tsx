"use client"
import Link from 'next/link';
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

const Instructions: React.FC = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto mt-20 p-10 bg-gray-700 shadow-lg rounded-md">
      <h1 className="text-2xl font-bold mb-6 text-black text-center">Prebuilt Checkout</h1>

      <Step
        title="Step 1: Select a Subscription"
        description={
          <>
            Choose the subscription plan that aligns. Click the buy the product button to proceed with the selected plan in the demo part.
          </>
        }
      />
      <Step
        title="Step 2: Payment Information"
        description={
          <>
            Enter your payment details securely. Our prebuilt checkout ensures a safe and encrypted payment process. You can choose from various payment methods for your convenience.
          </>
        }
      />
      <Step
        title="Step 3: Accessing to prebuilt checkout"
        description={
          <>
            Click for{' '}
            {/* Use the Link component for client-side navigation */}
            <Link href="/product-details">
              <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                demo
              </span>
            </Link>{' '}
            to go for the prebuilt checkout of the subscription.
          </>
        }
      />
    </div>
  );
};

export default Instructions;
