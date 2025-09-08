// src/app/contact/actions.ts
'use server';

import * as z from 'zod';
import nodemailer from 'nodemailer';

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
  if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
    console.error('Missing email configuration environment variables');
    return {
      success: false,
      message: "Server configuration error. Please try again later.",
    };
  }


  try {
    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });
    console.log("EMAIL_USER:", process.env.EMAIL_USER ? "Set" : "Missing");
    console.log("EMAIL_APP_PASSWORD:", process.env.EMAIL_APP_PASSWORD ? "Set" : "Missing");

    await transporter.verify();


    // Email to you (receiving the contact form submission)
    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER || 'fahim123ehtesham@gmail.com'}>`,
      to: 'fahim123ehtesham@gmail.com', // Changed recipient
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #40E0D0; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 5px;">Contact Details:</h3>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #40E0D0;">${email}</a></p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #40E0D0; border-radius: 5px;">
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #888; font-size: 12px;">
            <p>This message was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
    };

    // Auto-reply email to the sender
    const autoReplyOptions = {
      from: `"MD. Ehtesamul Haque Fahim" <${process.env.EMAIL_USER || 'fahim123ehtesham@gmail.com'}>`,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #40E0D0; padding-bottom: 10px;">Thank You for Your Message!</h2>
          
          <p style="color: #555; line-height: 1.6;">Dear ${name},</p>
          
          <p style="color: #555; line-height: 1.6;">
            Thank you for reaching out to me through my portfolio website. I have received your message and will get back to you as soon as possible, typically within 24-48 hours.
          </p>
          
          <div style="background-color: #f0f8ff; padding: 15px; border-left: 4px solid #40E0D0; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0; color: #555;"><strong>Your message:</strong></p>
            <p style="margin: 10px 0 0 0; color: #666; font-style: italic; white-space: pre-wrap;">"${message}"</p>
          </div>
          
          <p style="color: #555; line-height: 1.6;">
            In the meantime, feel free to connect with me on:
          </p>
          
          <div style="margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/md-ehtesamul-haque-fahim-7354301a5" style="color: #40E0D0;">MD. Ehtesamul Haque Fahim</a></p>
            <p style="margin: 5px 0;"><strong>GitHub:</strong> <a href="https://github.com/FahimEhtesham73" style="color: #40E0D0;">FahimEhtesham73</a></p>
            <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:fahim123ehtesham@gmail.com" style="color: #40E0D0;">fahim123ehtesham@gmail.com</a></p>
          </div>
          
          <p style="color: #555; line-height: 1.6;">
            Best regards,<br>
            <strong>MD. Ehtesamul Haque Fahim</strong><br>
            <em>Full Stack Software Developer</em>
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #888; font-size: 12px;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    return {
      success: true,
      message: "Your message has been sent successfully! You should receive a confirmation email shortly.",
    };

  } catch (error: any) {
    console.error("Error sending email:", error);

    let errorMessage = "Failed to send message. Please try again later.";

    if (error.code === 'EAUTH') {
      errorMessage = "Authentication failed. Please check your Gmail App Password.";
    } else if (error.code === 'ECONNECTION') {
      errorMessage = "Connection failed. Gmail SMTP may be blocking Netlify.";
    }

    return {
      success: false,
      message: errorMessage,
    };
  }

}


