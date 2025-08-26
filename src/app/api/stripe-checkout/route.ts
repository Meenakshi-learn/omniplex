import Stripe from "stripe";
import { NextResponse } from "next/server";

/* const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
}); */

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-07-30.basil",
}); /* updated to support latest version */

export async function POST(req: Request) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          // Product Price ID from Stripe Dashboard
          price: "price_1S08Lc7dAAEAifuPV2C4QrZs",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:3000/success`,
      cancel_url: `http://localhost:3000/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe checkout error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
