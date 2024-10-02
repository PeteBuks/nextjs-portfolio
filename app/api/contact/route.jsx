import { NextResponse } from 'next/server'
// Import the Nodemailer library
const nodemailer = require('nodemailer');

// Handles POST requests to /api
export async function POST(request) {
  const username = process.env.SMTP_EMAIL;
  const password = process.env.SMTP_PASSWORD;

  console.log("dealing with request")
  const formData = await request.formData();
  const name = formData.get("fullname");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // create transporter object
  const transport = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    secure: false, // true for 465, false for other ports
    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    const mail = await transport.sendMail({
      from: username,
      to: "iam.peterbuks@gmail.com",
      replyTo: email,
      subject: `${subject}`,
      html: `<p>Name: ${name} </p>
             <p>Email: ${email} </p>
             <p>Phone: ${phone} </p>
             <p>Message: ${message} </p>`
    });
    return NextResponse.json({ status: 200 })
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500 })
  }
}
