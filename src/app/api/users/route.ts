import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request : NextResponse) {
    try {
        const { to, subject, message } = await request.json();

        console.log(to, subject, message);

        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: process.env.SMTP_PORT,
          secure: process.env.SMTP_SECURE === 'true', // Convert string to boolean
          auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS
          }
      });

      const mailOption = {
          from: process.env.EMAIL_USER,
          to: to,
          subject: subject,
          html: `
              <h3>Hello</h3>
              <li>Title: ${subject}</li>
              <li>Message: ${message}</li>
          `
      };

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        console.error(error); // Log the error for debugging purposes

        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}