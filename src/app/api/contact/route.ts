import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, company, stage, alternance, email, subject, message } = data;


    // Use sendmail transport (like PHP mail())
    const transporter = nodemailer.createTransport({
      sendmail: true,
      newline: 'unix',
      path: '/usr/sbin/sendmail',
    });

    const mailOptions = {
      from: email,
      to: 'mathis.frappin@etu.univ-smb.fr',
      subject: `[Contact Portfolio] ${subject}`,
      text: `Nom: ${name}\nEntreprise: ${company}\nStage: ${stage ? 'Oui' : 'Non'}\nAlternance: ${alternance ? 'Oui' : 'Non'}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
