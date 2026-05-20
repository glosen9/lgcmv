import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  const port = Number(process.env.SMTP_PORT ?? 465);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port == 465,
    authMethod: 'LOGIN',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  try {
    await transporter.sendMail({
      from: `"GCMV Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO ?? 'info@lgcmv.org',
      replyTo: `"${name}" <${email}>`,
      subject: `[GCMV Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#1c3b1c;padding:24px 32px">
            <h2 style="color:#c9a227;margin:0;font-size:18px;letter-spacing:0.05em">GCMV — New Contact Message</h2>
          </div>
          <div style="padding:32px;background:#fff;border:1px solid #e8e8e8">
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
              <tr><td style="padding:8px 0;color:#888;font-size:13px;width:80px">Name</td><td style="padding:8px 0;color:#1c3b1c;font-size:14px;font-weight:600">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#888;font-size:13px">Email</td><td style="padding:8px 0;color:#1c3b1c;font-size:14px"><a href="mailto:${email}" style="color:#c9a227">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#888;font-size:13px">Subject</td><td style="padding:8px 0;color:#1c3b1c;font-size:14px">${subject}</td></tr>
            </table>
            <div style="border-top:1px solid #e8e8e8;padding-top:20px">
              <p style="color:#888;font-size:12px;margin:0 0 10px;text-transform:uppercase;letter-spacing:0.1em">Message</p>
              <p style="color:#333;font-size:14px;line-height:1.8;white-space:pre-wrap">${message}</p>
            </div>
          </div>
          <div style="padding:16px 32px;background:#f8f8f8;text-align:center">
            <p style="color:#aaa;font-size:11px;margin:0">Ghanaian Community of Merrimack Valley · info@lgcmv.org</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[SMTP error]', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email us directly at info@lgcmv.org.' },
      { status: 500 },
    );
  }
}
