"use client"
import React from "react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '@/components/CheckoutForm';

const stripePromise = loadStripe('pk_test_51JemJrDRZK0BHB8ae67Q6FvlG82YqV1U6PZUuHNqAGge6mW6Zv2wtMqCYHucJ8gVlT6YEvxK8lix6X4KozI7hIdP00lAOlwOZa');

export default function App() {
  const [clientSecret, setClientSecret] = React.useState("");

  React.useEffect(() => {
    fetch("http://localhost:3001/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "shoes", amount: 4500 }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

 // const appearance = {
   // theme: 'stripe',
  //};

  const options = {
    clientSecret,
   
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
