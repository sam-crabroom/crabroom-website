"use client"

import React from 'react';

const LoginLink = () => {
  
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
    <div className="container mx-auto mt-40 p-4 bg-blue-100 shadow-lg rounded-md max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-900 text-center">Access Express Dashboard</h1>
      <p className="text-blue-800 text-center mb-4">Click the View button to access the Express Dashboard.</p>
      <div className="flex items-center justify-center">
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default LoginLink;
