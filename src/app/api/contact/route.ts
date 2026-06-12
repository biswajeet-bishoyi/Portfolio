import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, subject, message, _honey } = body

    // Honeypot check for spam prevention
    if (_honey) {
      return NextResponse.json({ success: true }) // Silent success for bots
    }

    // Forward the form data to Formspree
    const response = await fetch("https://formspree.io/f/xlgkordk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });

    if (response.ok) {
      console.log("Formspree submission successful");
      return NextResponse.json({ success: true });
    } else {
      console.error("Formspree submission failed", await response.text());
      return NextResponse.json(
        { error: "Failed to send message to Formspree" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("[Contact API Error]", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
