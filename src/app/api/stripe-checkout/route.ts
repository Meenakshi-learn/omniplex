// app/api/stripe-checkout/route.ts
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) throw new Error("STRIPE_SECRET_KEY is not defined");

/*const stripe = new Stripe(stripeSecretKey, { apiVersion: "2022-11-15" });*/
const stripe = new Stripe(stripeSecretKey, { apiVersion: "2025-07-30.basil" });

export async function POST(req: Request) {
  try {
    const { productId, quantity } = await req.json();

    if (!productId || !quantity)
      return new Response(
        JSON.stringify({ error: "Product ID or quantity missing" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{ price: productId, quantity }],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/cancel`,
    });

    return new Response(JSON.stringify({ id: session.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
