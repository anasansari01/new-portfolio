import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { z } from "zod";
import { renderSenderEmail, renderNotificationEmail } from "@/lib/emaleTemplates";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = schema.parse(body);

    const senderHTML = await renderSenderEmail(name);
    const notificationHTML = await renderNotificationEmail({ name, email, message });

    await transporter.sendMail({
      from: `"Anas" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thanks for contacting me!",
      html: senderHTML,
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: "anasansari056789@gmail.com",
      subject: "New portfolio submission",
      html: notificationHTML,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
