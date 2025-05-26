// src/app/contact/actions.ts
'use server';

import * as z from 'zod';
// import nodemailer from 'nodemailer'; // Uncomment when implementing email sending

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

interface SubmitContactFormResponse {
  success: boolean;
  message: string;
  errors?: { field: string; message: string }[];
}

export async function submitContactForm(data: ContactFormValues): Promise<SubmitContactFormResponse> {
  const validationResult = contactFormSchema.safeParse(data);

  if (!validationResult.success) {
    return {
      success: false,
      message: "Invalid form data.",
      errors: validationResult.error.errors.map(err => ({ field: err.path.join('.'), message: err.message })),
    };
  }

  const { name, email, message } = validationResult.data;

  console.log("Received contact form submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // TODO: Implement actual email sending logic with Nodemailer here
  // Example (conceptual - requires Nodemailer setup and .env variables):
  /*
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || "587"),
      secure: parseInt(process.env.EMAIL_SERVER_PORT || "587") === 465, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_FROM}>`, // sender address (can be your portfolio's email)
      replyTo: email, // Sets the reply-to to the submitter's email
      to: process.env.EMAIL_TO, // your receiving email address from .env
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, '<br>')}</p>`,
    };

    await transporter.sendMail(mailOptions);
    
    return {
      success: true,
      message: "Your message has been sent successfully!",
    };

  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
  */

  // For now, simulate success
  return {
    success: true,
    message: "Your message has been received (simulated). Email sending needs to be implemented.",
  };
}
