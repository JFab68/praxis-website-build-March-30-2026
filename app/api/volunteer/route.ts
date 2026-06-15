import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, interests, message } = data;

    if (!name || !email || !interests) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (process.env.RESEND_API_KEY) {
      const { data: resendData, error } = await resend.emails.send({
        from: 'Praxis Initiative Website <onboarding@resend.dev>',
        to: ['admin@FAIRAZ2027.org'],
        replyTo: email,
        subject: `[Praxis Volunteer] New Interest from ${name}`,
        html: `
          <h3>New Volunteer Interest</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Areas of Interest:</strong> ${Array.isArray(interests) ? interests.join(', ') : interests}</p>
          <br />
          <p><strong>Message:</strong></p>
          <p>${message ? message.replace(/\n/g, '<br>') : 'None'}</p>
        `,
      });

      if (error) {
        return NextResponse.json({ error }, { status: 500 });
      }

      return NextResponse.json({ success: true, data: resendData });
    } else {
      console.log('Simulating volunteer email send (No RESEND_API_KEY):', data);
      return NextResponse.json({ success: true, simulated: true });
    }
  } catch (error) {
    console.error('Volunteer form error:', error);
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
}
