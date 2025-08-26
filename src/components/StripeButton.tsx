"use client";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51Rzagu7dAAEAifuPfZH65l6o27cmX1RfUlNfnGw60DbqE5XQGuYi6TvJxuZ7SsEuKxDVgXHGQm3GhV7JFZFxqLBU00hvPM4yaK"); // YOUR publishable key

export default function StripeButton() {
  const handleCheckout = async () => {
    const product = {
      productId: "price_1S08Lc7dAAEAifuPV2C4QrZs", // Stripe price ID
      quantity: 1,
    };

    try {
      const res = await fetch("/api/stripe-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      const data = await res.json();

      if (data.id) {
        const stripe = await stripePromise;
        if (stripe) await stripe.redirectToCheckout({ sessionId: data.id });
      } else {
        console.error(data.error);
      }
    } catch (err) {
      console.error("Checkout error:", err);
    }
  };

  return <button onClick={handleCheckout}>Buy Now</button>;
}
