"use client";

export default function StripeButton() {
  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/stripe-checkout", {
        method: "POST",
      });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url; // redirect to Stripe Checkout
      } else {
        console.error("No URL returned:", data);
      }
    } catch (err) {
      console.error("Checkout error:", err);
    }
  };

  return (
    <button onClick={handleCheckout}>
      Checkout
    </button>
  );
}
