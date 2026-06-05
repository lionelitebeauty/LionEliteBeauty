import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, program, experience, struggle, timeline, investment, commitment, health } = req.body

  // ── Admin notification (to orders@lionelitebeauty.com) ──
  const adminHtml = [
    '<div style="font-family: Helvetica, Arial, sans-serif; max-width: 600px;">',
    '<h2 style="color: #C9A96E; border-bottom: 1px solid #eee; padding-bottom: 12px;">New Application Received</h2>',
    `<table style="width:100%; border-collapse: collapse;">`,
    ...[
      ['Name', name],
      ['Email', email],
      ['Phone', phone],
      ['Program', program],
      ['Experience', experience],
      ['Struggle', struggle],
      ['Timeline', timeline],
      ['Investment', investment],
      ['Commitment', commitment],
      ['Health Notes', health],
    ].map(([label, val]) =>
      `<tr><td style="padding: 8px 12px; border-bottom:1px solid #eee; color:#666; font-size:13px; white-space:nowrap; vertical-align:top;"><strong>${label}</strong></td><td style="padding: 8px 12px; border-bottom:1px solid #eee; font-size:13px;">${val}</td></tr>`
    ),
    '</table>',
    '</div>',
  ].join('\n')

  // ── Client confirmation ──
  const clientHtml = [
    '<div style="font-family: Helvetica, Arial, sans-serif; max-width: 600px;">',
    `<h2 style="color: #C9A96E;">Thank you, ${name}.</h2>`,
    `<p style="font-size: 16px; line-height: 1.7; color: #333;">We've received your application for the <strong>${program}</strong> program.</p>`,
    '<p style="font-size: 16px; line-height: 1.7; color: #333;">Every application is reviewed personally. You\'ll hear from us within <strong>24–48 hours</strong> with your tailored next steps.</p>',
    '<p style="font-size: 16px; line-height: 1.7; color: #333;">Want to move faster? Book a consultation call directly:</p>',
    '<p><a href="https://calendly.com/a-ringfield-trustetc" style="display: inline-block; background-color: #C9A96E; color: #000; padding: 14px 32px; text-decoration: none; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase;">Book Your Call →</a></p>',
    '<br/>',
    '<p style="font-size: 14px; color: #888;">— Lion Elite Team<br/>orders@lionelitebeauty.com</p>',
    '</div>',
  ].join('\n')

  try {
    // Send both emails in parallel
    const [adminRes, clientRes] = await Promise.all([
      resend.emails.send({
        from: 'Lion Elite <orders@lionelitebeauty.com>',
        to: ['orders@lionelitebeauty.com'],
        subject: `New Application: ${program} — ${name}`,
        html: adminHtml,
        replyTo: email,
      }),
      resend.emails.send({
        from: 'Lion Elite <orders@lionelitebeauty.com>',
        to: [email],
        subject: 'We received your application — Lion Elite',
        html: clientHtml,
      }),
    ])

    console.log('Admin email:', adminRes.id)
    console.log('Client email:', clientRes.id)

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return res.status(500).json({ error: 'Failed to send emails' })
  }
}