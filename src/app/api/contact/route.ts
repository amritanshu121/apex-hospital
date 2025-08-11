import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

const contacts: any[] = []

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Name, email, subject, and message are required" }, { status: 400 })
    }

    // Create contact object
    const contact = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || "",
      subject,
      message,
      status: "new",
      createdAt: new Date().toISOString(),
    }

    // Save to "database"
    contacts.push(contact)

    // Send email to admin
    try {
      await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: process.env.ADMIN_EMAIL || "admin@apexhospital.com",
  subject: `Contact Form: ${subject}`,
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; padding: 20px; border-radius: 8px;">
      <h2 style="color: #007b5e;">New Contact Form Submission</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <div style="background-color: #f9f9f9; padding: 10px 15px; border-left: 3px solid #007b5e; margin: 10px 0;">
        <p style="margin: 0;">${message.replace(/\n/g, "<br>")}</p>
      </div>

      <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
    </div>
  `,
})

     await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: email,
  subject: "Thank you for contacting Apex Hospital",
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; padding: 20px; border-radius: 8px;">
      <h2 style="color: #007b5e;">Thank you for contacting us!</h2>
      <p>Dear <strong>${name}</strong>,</p>
      <p>We have received your message and our team will get back to you within 24 hours.</p>

      <p><strong>Your Message:</strong></p>
      <div style="background-color: #f9f9f9; padding: 10px 15px; border-left: 3px solid #007b5e; margin: 10px 0;">
        <p style="margin: 0;">${message.replace(/\n/g, "<br>")}</p>
      </div>

      <p>Best regards,<br><strong>Apex Hospital Team</strong></p>

      <hr style="margin: 30px 0; border: none; border-top: 1px solid #ccc;" />

      <footer style="font-size: 0.9rem; color: #555;">
        <p style="margin: 5px 0;"><strong>Note:</strong> This is an automated confirmation email. Please do not reply to this message.</p>
        <p style="margin: 5px 0;">For any queries, feel free to call us at <strong>0217 260 0603</strong>.</p>
        <p style="margin: 5px 0;">Apex Hospital, Solapur India</p>
      </footer>
    </div>
  `,
})
    } catch (emailError) {
      console.error("Email sending failed:", emailError)
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
      contactId: contact.id,
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}