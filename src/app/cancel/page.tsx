"use client";

import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-red-600">Payment Cancelled ❌</h1>
      <p className="mt-4 text-lg">Your payment was not completed. You can try again anytime.</p>
      <Link href="/" className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg">
        Go back to Home
      </Link>
    </div>
  );
}
