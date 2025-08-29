import { NextRequest, NextResponse } from "next/server";
import supabase from "../../../../supabase/supabase";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, amount } = await req.json();

    if (!name || !phone || !amount) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const token = uuidv4(); // unique token for confirmation

    // Save donation to Supabase
    const { error } = await supabase.from("donations").insert([
      { name, phone, amount, verified: false, token },
    ]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const confirmLink = `${req.nextUrl.origin}/api/confirm?token=${token}`;

    // Send email to admin
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: Number(process.env.EMAIL_PORT) === 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    try {
      await transporter.sendMail({
        from: `"Donation App" <${process.env.EMAIL_USER}>`,
        to: "developerrazack@gmail.com",
        subject: "New Donation Pending Confirmation",
        html: `
          <p>New donation from <b>${name}</b> (${phone}) of <b>MK${amount}</b></p>
          <p>Click to mark as paid: <a href="${confirmLink}">Confirm Payment</a></p>
        `,
      });
      console.log("✅ Email sent to admin.");
    } catch (emailError) {
      console.error("❌ Failed to send email:", emailError);
    }

    return NextResponse.json({
      message: "Donation submitted! Admin will receive an email to confirm.",
    });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
