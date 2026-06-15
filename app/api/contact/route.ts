import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Only send if we actually have an API key configured
    if (process.env.RESEND_API_KEY) {
      const { data: resendData, error } = await resend.emails.send({
        from: 'Praxis Initiative Website <onboarding@resend.dev>', // Use verified domain here in production
        to: ['admin@FAIRAZ2027.org'],
        replyTo: email,
        subject: `[Praxis Contact Form] ${subject} from ${name}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <br />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });

      if (error) {
        return NextResponse.json({ error }, { status: 500 });
      }

      return NextResponse.json({ success: true, data: resendData });
    } else {
      // For demo/development without an API key, fake a successful request
      console.log('Simulating email send (No RESEND_API_KEY):', data);
      return NextResponse.json({ success: true, simulated: true });
    }
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
