import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// In-memory storage (replace with DB in production)
const appointments: any[] = [];

// Setup transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      age,
      phone,
      gender,
      department,
      date,
      time,
      reason,
    } = body;

    // Validate
    if (!name || !email || !age || !gender || !phone || !department  || !date || !time) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Appointment object
    const appointment = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      age,
      gender,
      department,
     
      date,
      time,
      reason: reason || "",
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    appointments.push(appointment);

    const emailHeader = `
  <div style="background-color:#007BFF;padding:15px;text-align:center;color:white;font-size:20px;font-weight:bold;">
    Apex Hospital
  </div>
`;

// ✅ Send email to admin
await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: process.env.ADMIN_EMAIL,
  subject: "New Appointment Booking",
  html: `
    ${emailHeader}
    <div style="padding:20px;">
      <h2 style="color:#333;">New Appointment Booking</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Department:</strong> ${department}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Reason:</strong> ${reason}</p>
    </div>
   
  `,
});

// ✅ Send confirmation to patient
await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: email,
  subject: `Appointment Confirmation - ${department} Department`,
  html: `
    <div style="font-family:Arial, sans-serif; border:1px solid #ddd; max-width:600px; margin:0 auto;">
      <div style="background-color:#007BFF; color:white; padding:15px; text-align:center; font-size:20px;">
        Apex Hospital
      </div>
      <div style="padding:20px;">
        <h2 style="color:#333;">Appointment Confirmation</h2>
        <p>Dear <strong>${name}</strong>,</p>
        <p>Thank you for booking an appointment at <strong>Apex Hospital</strong>.</p>
        <p>Your appointment has been received and is currently pending confirmation. Below are your appointment details:</p>
        <ul style="line-height:1.6;">
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Time:</strong> ${time}</li>
          <li><strong>Department:</strong> ${department}</li>
        </ul>
        <p>If you have any queries, feel free to call us at <strong>0217 260 0603</strong>.</p>
        <p style="margin-top:20px;">We will contact you shortly to confirm your booking.</p>
        <p>Best regards,<br/>Team Apex Hospital</p>
      </div>
      <div style="background-color:#f9f9f9; padding:10px; font-size:12px; color:#777; text-align:center; border-top:1px solid #ddd;">
        This is an automated message. Please do not reply to this email.
      </div>
    </div>
  `,
});


    return NextResponse.json({
      success: true,
      message: "Appointment booked! Confirmation email sent.",
      appointmentId: appointment.id,
    });
  } catch (error) {
    console.error("Error booking appointment:", error);
    return NextResponse.json(
      { error: "Failed to book appointment. Try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    appointments: appointments.length,
    message: "Appointments API is working",
  });
}