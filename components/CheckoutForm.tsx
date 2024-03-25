import React from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  PaymentElementProps, // Import PaymentElementProps from @stripe/react-stripe-js
} from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (paymentIntent) {
        switch (paymentIntent.status) {
          case "succeeded":
            setMessage("Payment succeeded!");
            break;
          case "processing":
            setMessage("Your payment is processing.");
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            break;
          default:
            setMessage("Something went wrong.");
            break;
        }
      } else {
        setMessage("Payment intent not found.");
      }
    });
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3002/formpage",
      },
    });

    if (error?.type === "card_error" || error?.type === "validation_error") {
      setMessage(error.message || "An unexpected error occurred.");
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions: PaymentElementProps['options'] = {
    layout: "tabs",
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen">
      <div className="w-full md:w-1/2 pr-8">
        <h1 className="text-4xl font-bold mb-4 text-center md:text-left">
          Test Product
        </h1>
        <p className="text-xl mb-4 text-center md:text-left">$45.00</p>
      </div>

      <div className="max-w-md w-full md:w-1/2 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-1 text-black text-center md:text-left">
          Complete Payment
        </h2>
        <h3 className="text-lg text-gray-400 text-center mb-3 md:text-left">
          Amount: $45
        </h3>

        <form id="payment-form" onSubmit={handleSubmit}>
          <div className="mb-4">
            <PaymentElement
              id="payment-element"
              options={paymentElementOptions}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !stripe || !elements}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mx-auto md:ml-0 md:mr-0 block"
          >
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </button>

          {message && (
            <div className="text-red-500 mt-4 text-center md:text-left">
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
