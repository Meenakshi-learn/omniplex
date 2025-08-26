"use client";

import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-green-600">Payment Successful 🎉</h1>
      <p className="mt-4 text-lg">Thank you for your purchase! Your Pro Plan is now active.</p>
      <Link href="/" className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg">
        Go back to Home
      </Link>
    </div>
  );
}
