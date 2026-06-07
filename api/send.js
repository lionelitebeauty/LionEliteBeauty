import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

function generateOrderNumber() {
  const date = new Date()
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `LE-${y}${m}${d}-${rand}`
}

// ── Shared B&G email wrapper ────────────────────────────────────────────────
const wrap = (content) => `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0; padding:0; background-color:#0A0A0A; font-family:Georgia, 'Times New Roman', serif;">
  <table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:40px 20px;">
    <table width="560" cellpadding="0" cellspacing="0" style="background-color:#080808; border:1px solid #1A1A1A;">
      <tr><td style="height:4px; background-color:#C9A96E; padding:0;"></td></tr>
      <tr><td style="padding:40px 40px 20px; text-align:center; border-bottom:1px solid #1A1A1A;">
        <p style="font-family:Georgia, serif; color:#C9A96E; font-size:18px; letter-spacing:0.25em; margin:0; text-transform:uppercase;">Lion Elite</p>
        <p style="font-family:Georgia, serif; color:#8A8A8A; font-size:11px; letter-spacing:0.15em; margin:4px 0 0; text-transform:uppercase;">Beauty &amp; Wellness</p>
      </td></tr>
      <tr><td style="padding:40px 40px; color:#FAFAF8; font-size:15px; line-height:1.8;">
        ${content}
      </td></tr>
      <tr><td style="padding:24px 40px; border-top:1px solid #1A1A1A; text-align:center;">
        <p style="font-family:'Helvetica Neue',Arial,sans-serif; color:#8A8A8A; font-size:11px; margin:0;">Lion Elite Beauty &amp; Wellness</p>
        <p style="font-family:'Helvetica Neue',Arial,sans-serif; color:#6A6A6A; font-size:10px; margin:8px 0 0;">orders@lionelitebeauty.com</p>
      </td></tr>
    </table>
  </td></tr></table>
</body>
</html>`

function tableRow(label, value, isLast = false) {
  return `<tr><td style="padding:12px 16px; border-bottom:${isLast ? 'none' : '1px solid #1A1A1A'}; color:#CACACA; font-family:'Helvetica Neue',Arial,sans-serif; font-size:13px; white-space:nowrap; vertical-align:top;"><strong style="color:#C9A96E;">${label}</strong></td><td style="padding:12px 16px; border-bottom:${isLast ? 'none' : '1px solid #1A1A1A'}; color:#FAFAF8; font-family:'Helvetica Neue',Arial,sans-serif; font-size:13px;">${value}</td></tr>`
}

// ── Admin notification ──────────────────────────────────────────────────────
function adminBody({ name, email, phone, program, experience, struggle, timeline, investment, commitment, health, products, address, discountCode, orderNumber }) {
  let rows = ''
  if (orderNumber) rows += tableRow('Order #', `<strong style="color:#C9A96E;">${orderNumber}</strong>`)
  rows += tableRow('Name', name)
  rows += tableRow('Email', email)
  if (phone && phone !== 'Not provided') rows += tableRow('Phone', phone)
  if (program) rows += tableRow('Program', program)
  if (experience) rows += tableRow('Experience', experience)
  if (struggle && struggle !== 'Not provided') rows += tableRow('Struggle', struggle)
  if (timeline) rows += tableRow('Timeline', timeline)
  if (investment) rows += tableRow('Investment', investment)
  if (commitment) rows += tableRow('Commitment', commitment)
  if (health && health !== 'Not provided') rows += tableRow('Health Notes', health)
  if (products && products.length) rows += tableRow('Products Ordered', products.join('<br>'))
  if (address) rows += tableRow('Shipping Address', address)
  if (discountCode && discountCode !== 'None') rows += tableRow('Discount Code', discountCode, true)

  return `
    <h2 style="color:#C9A96E; font-family:Georgia,serif; font-size:20px; margin:0 0 24px;">${products ? 'New Order Received' : 'New Application Received'}</h2>
    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      ${rows}
    </table>
  `
}

// ── Client confirmation ─────────────────────────────────────────────────────
function clientConfirmation({ name, program, products, orderNumber, address }) {
  const isOrder = !!products
  const title = isOrder ? 'Your order is confirmed.' : 'We&rsquo;ve received your application.'

  let bodyHtml = ''
  if (isOrder) {
    bodyHtml = `
    <p style="margin:0 0 20px; color:#FAF8F0; font-size:15px; line-height:1.8;">Hi ${name},</p>
    <p style="margin:0 0 24px; color:#CACACA; font-size:15px; line-height:1.8;">Thank you for your order! Here&rsquo;s your confirmation:</p>

    <div style="background-color:#0C0A08; border:1px solid #C9A96E33; padding:24px; margin-bottom:24px;">
      <p style="font-family:'Helvetica Neue',Arial,sans-serif; color:#C9A96E; font-size:11px; letter-spacing:0.15em; margin:0 0 12px; text-transform:uppercase;">Order Summary</p>
      <p style="font-family:'Helvetica Neue',Arial,sans-serif; color:#8A8A8A; font-size:12px; margin:0 0 4px;">Order #: <strong style="color:#FAFAF8;">${orderNumber}</strong></p>
      ${products.map(p => `<p style="font-family:'Helvetica Neue',Arial,sans-serif; color:#FAFAF8; font-size:13px; margin:0 0 2px;">• ${p}</p>`).join('')}
      ${address ? `<p style="font-family:'Helvetica Neue',Arial,sans-serif; color:#8A8A8A; font-size:12px; margin-top:12px;">Shipping to: <strong style="color:#FAFAF8;">${address}</strong></p>` : ''}
      <p style="font-family:'Helvetica Neue',Arial,sans-serif; color:#8A8A8A; font-size:12px; margin-top:12px;">Payment: <strong style="color:#C9A96E;">Zelle</strong> (orders@lionelitebeauty.com) or <strong style="color:#C9A96E;">CashApp</strong> (\$LionElite)</p>
    </div>

    <p style="margin:0 0 8px; color:#CACACA; font-size:15px; line-height:1.8;">We&rsquo;ll confirm shipping details within 24 hours after payment is received.</p>
    <p style="margin:0 0 24px; color:#CACACA; font-size:15px; line-height:1.8;">Reply to this email with any questions — we&rsquo;re here to help.</p>
    `
  } else {
    bodyHtml = `
    <p style="margin:0 0 20px; color:#FAFAF8; font-size:15px; line-height:1.8;">Hi ${name},</p>
    <p style="margin:0 0 20px; color:#CACACA; font-size:15px; line-height:1.8;">Your application for the <strong style="color:#C9A96E;">${program}</strong> program has been received. We personally review every application and will reach out within 24&ndash;48 hours with your tailored next steps.</p>
    <p style="margin:0 0 24px; color:#CACACA; font-size:15px; line-height:1.8;">Want to move faster? Book a consultation call directly:</p>
    <table cellpadding="0" cellspacing="0"><tr><td style="background-color:#C9A96E; padding:14px 32px;">
      <a href="https://calendly.com/a-ringfield-trustetc" style="color:#000; font-family:'Helvetica Neue',Arial,sans-serif; font-size:12px; letter-spacing:0.1em; text-decoration:none; text-transform:uppercase;">Book Your Call &rarr;</a>
    </td></tr></table>
    `
  }

  return `
    <h2 style="color:#C9A96E; font-family:Georgia,serif; font-size:22px; margin:0 0 16px;">${title}</h2>
    ${bodyHtml}
  `
}

// ── Main handler ────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = req.body
  const isOrder = body.type === 'order'
  const orderNumber = generateOrderNumber()

  try {
    if (isOrder) {
      const [adminRes, clientRes] = await Promise.all([
        resend.emails.send({
          from: 'Lion Elite <orders@lionelitebeauty.com>',
          to: ['orders@lionelitebeauty.com'],
          subject: `New Order #${orderNumber}: ${body.products?.join(', ')} — ${body.name}`,
          html: wrap(adminBody({
            name: body.name, email: body.email,
            phone: body.phone, products: body.products,
            address: body.address, discountCode: body.discountCode,
            orderNumber,
          })),
          replyTo: body.email,
        }),
        resend.emails.send({
          from: 'Lion Elite <orders@lionelitebeauty.com>',
          to: [body.email],
          subject: `Order Confirmed — #${orderNumber}`,
          html: wrap(clientConfirmation({
            name: body.name,
            products: body.products,
            orderNumber,
            address: body.address,
          })),
        }),
      ])
      console.log('Order emails sent:', orderNumber, adminRes.id, clientRes.id)
    } else {
      const [adminRes, clientRes] = await Promise.all([
        resend.emails.send({
          from: 'Lion Elite <orders@lionelitebeauty.com>',
          to: ['orders@lionelitebeauty.com'],
          subject: `New Application: ${body.program} — ${body.name}`,
          html: wrap(adminBody({
            name: body.name, email: body.email,
            phone: body.phone || 'Not provided',
            program: body.program,
            experience: body.experience,
            struggle: body.struggle || 'Not provided',
            timeline: body.timeline,
            investment: body.investment,
            commitment: body.commitment,
            health: body.health || 'Not provided',
          })),
          replyTo: body.email,
        }),
        resend.emails.send({
          from: 'Lion Elite <orders@lionelitebeauty.com>',
          to: [body.email],
          subject: 'We received your application — Lion Elite',
          html: wrap(clientConfirmation({
            name: body.name,
            program: body.program,
          })),
        }),
      ])
      console.log('Application emails:', adminRes.id, clientRes.id)
    }

    return res.status(200).json({ success: true, orderNumber })
  } catch (err) {
    console.error('Resend error:', err)
    return res.status(500).json({ error: 'Failed to send emails' })
  }
}