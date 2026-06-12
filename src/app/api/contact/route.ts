import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, subject, message, _honey } = body

    // Honeypot check for spam prevention
    if (_honey) {
      return NextResponse.json({ success: true }) // Silent success for bots
    }

    // In a real application, you would integrate Resend, Nodemailer, or another email service here.
    // Example:
    // await sendEmail({ to: "hello@biswajeetbishoyi.com", subject, html: `From: ${name} <${email}><br><br>${message}` })
    
    // For now, we simulate a successful email send.
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Form submission received:", { name, email, subject, message })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[Contact API Error]", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
