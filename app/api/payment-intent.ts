
// const stripe = require("stripe")("sk_test_51JemJrDRZK0BHB8aNDvimfdbD8bd0hliFa9ghP2XUbHMpak4pP03LteHCP1Igtz1k2VhQm3X0ygukYu7MMn8nX5L00yKfA5tnP");

// const calculateOrderAmount = (items) => {
//   return 1400;
// };

// export default async function handler(req, res) {
//   const { items } = req.body;

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: calculateOrderAmount(items),
//     currency: "usd",
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });

//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });

// };