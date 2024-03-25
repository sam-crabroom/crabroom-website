'use client'
import stripe from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Import the Image component
import React from 'react';
import { ReactElement, useState } from 'react';

const ProductDetailsPage = () => {
  const router = useRouter();

  const handleCheckout = async () => {
    try {
      const response = await fetch('https://kaf3rk7vph.execute-api.us-east-1.amazonaws.com/default/PrebuitCheckeour-fordemo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      const { sessionId } = data; // Ensure that sessionId is properly extracted from the response

      if (!sessionId) {
        console.error('Error: No sessionId received from the server');
        return;
      }

      // Load Stripe.js with your publishable key
      const stripe = await loadStripe('pk_test_51JemJrDRZK0BHB8ae67Q6FvlG82YqV1U6PZUuHNqAGge6mW6Zv2wtMqCYHucJ8gVlT6YEvxK8lix6X4KozI7hIdP00lAOlwOZa');

      // Redirect to Checkout Session
      // Redirect to Checkout Session
      const result = await stripe?.redirectToCheckout({ sessionId });

      // Check if 'error' exists before accessing it
      if (result && result.error) {
        // Handle the error
        console.error('Error:', result.error);
      }
    } catch (error) {
      console.error('Error initiating checkout:', error);
    }
  };

  return (
    <div className="container mx-auto mt-20 p-10 bg-gray-700 shadow-lg rounded-md">
      <h1 className="text-2xl font-bold mb-6 text-black text-center">Product Details</h1>

      <div className="bg-gray-600 p-4 shadow-md rounded-md">
        {/* Example of adding an image */}
        <div className="flex mb-4">
          <Image
            src="data:image/jpeg;base64,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" // Path to your image
            alt="Laptop Image"
            width={100} // Set the width of the image
            height={100} // Set the height of the image
          />
          <div className="ml-4">
            <h3 className="text-lg text-black font-semibold mb-2">Laptop</h3>
            <p className="text-lg text-black mb-2">Description: High-performance laptop with cutting-edge features.</p>
            <p className="text-lg text-black mb-2">Price: $1200 per month</p>
          </div>
        </div>

        <button
          className="bg-gray-500 text-white px-4 py-2 mt-4 rounded-md"
          onClick={handleCheckout}
        >
          Buy the Product
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
