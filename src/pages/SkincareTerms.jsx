import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: `By accessing or purchasing from the Lion Elite Beauty skincare store, you agree to be bound by these Terms & Conditions. If you do not agree, do not use our site or purchase our products.

These terms apply to all visitors, users, and customers accessing the skincare portion of this website. We reserve the right to update these terms at any time. Continued use after changes constitutes acceptance.`,
  },
  {
    id: 'products',
    title: '2. Product Information',
    content: `All skincare products are formulated for topical, external use only. Product descriptions, ingredients, and usage instructions are provided for informational purposes and are not substitutes for professional medical advice.

We make every effort to display accurate product information, including ingredient lists and pricing. However, we do not warrant that product descriptions or other content are complete, reliable, or error-free. Formulations may be updated without notice.

Individual results vary. Test results and testimonials reflect individual experiences and are not guarantees of specific outcomes.`,
  },
  {
    id: 'ordering',
    title: '3. Ordering & Acceptance',
    content: `All orders placed through the Lion Elite Beauty website are offers to purchase. We reserve the right to accept or decline any order for any reason, including but not limited to product availability, pricing errors, or suspected fraud.

Order confirmation emails acknowledge receipt of your order, not acceptance. We may cancel orders after confirmation if issues arise. In such cases, a full refund will be issued.`,
  },
  {
    id: 'pricing',
    title: '4. Pricing & Payment',
    content: `All prices are listed in USD. Prices are subject to change without notice. Promotional codes and discounts cannot be combined unless explicitly stated.

Payment is processed securely through Stripe. By providing payment information, you represent that you are authorized to use the payment method. We reserve the right to refuse service if payment is not verified.

Sales tax may be applied based on shipping destination and applicable state laws.`,
  },
  {
    id: 'shipping',
    title: '5. Shipping & Delivery',
    content: `Orders are processed within 1–3 business days. Shipping timelines are estimates and not guaranteed. We are not liable for delays caused by carriers, weather, or customs.

Risk of loss passes to you upon delivery to the carrier. Claims for damaged or lost items must be directed to the carrier. We will assist with claims where possible.`,
  },
  {
    id: 'returns',
    title: '6. Returns & Refunds',
    content: `Due to health and safety regulations, all skincare sales are final. Opened or used products cannot be returned or exchanged.

If your product arrives damaged or defective, contact us within 7 days at orders@lionelitebeauty.com with your order number and photos. We will evaluate and may issue a replacement or refund at our discretion.

Refunds, if approved, are processed to the original payment method within 5–10 business days.`,
  },
  {
    id: 'intellectual',
    title: '7. Intellectual Property',
    content: `All content on this website — including text, images, logos, product names, and formulations — is the intellectual property of Lion Elite Beauty and is protected by applicable copyright and trademark laws.

You may not reproduce, distribute, modify, or republish any content without prior written consent. Product names and branding may not be used in connection with any third-party products or services.`,
  },
  {
    id: 'limitation',
    title: '8. Limitation of Liability',
    content: `Lion Elite Beauty shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our products or website. This includes, but is not limited to, allergic reactions, skin irritation, or other adverse effects.

Our total liability is limited to the purchase price paid for the product giving rise to the claim. Some jurisdictions do not allow limitations on implied warranties, so these limitations may not apply to you.`,
  },
  {
    id: 'contact',
    title: '9. Contact Information',
    content: `For questions about these Terms & Conditions, please contact us:

Email: orders@lionelitebeauty.com
Response time: within 24 hours on business days.`,
  },
]

export default function SkincareTerms() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ backgroundColor: '#FAF7F2', minHeight: '100vh' }}>
      <SEO title="Terms & Conditions — Skincare" description="Lion Elite Beauty skincare terms and conditions — product information, ordering, shipping, returns, and liability." />
      <Navbar />

      <section style={{ paddingTop: '140px', paddingBottom: '64px', borderBottom: '1px solid #E8DDD0' }}>
        <div className="max-w-3xl mx-auto px-6">
          <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#8A9E85', letterSpacing: '0.3em', fontSize: '10px', marginBottom: '16px' }}
            className="uppercase">Terms &amp; Conditions</p>
          <h1 style={{ fontFamily: 'Georgia, serif', color: '#2A2A2A', fontSize: '2.6rem', lineHeight: '1.1', letterSpacing: '-0.02em', marginBottom: '12px' }}
            className="font-normal">
            Skincare Terms &amp; Conditions
          </h1>
          <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#6A6A6A', fontSize: '15px', lineHeight: '1.7' }}>
            Legal terms governing the purchase and use of Lion Elite Beauty skincare products.
          </p>
          <div style={{ width: '48px', height: '1px', backgroundColor: '#C9A96E', marginTop: '24px' }}></div>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="max-w-3xl mx-auto px-6">
          {/* Quick nav */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '48px' }}>
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`}
                style={{
                  fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '11px', letterSpacing: '0.12em',
                  color: '#6A6A6A', textDecoration: 'none', padding: '10px 18px',
                  border: '1px solid #E0D5C5', backgroundColor: '#FFFFFF',
                }}
                className="uppercase hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors">
                {s.title.match(/\d+\.\s*(.*)/)?.[1] || s.title}
              </a>
            ))}
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map(s => (
              <div key={s.id} id={s.id}>
                <h2 style={{ fontFamily: 'Georgia, serif', color: '#2A2A2A', fontSize: '1.3rem', lineHeight: '1.2', marginBottom: '16px' }}>
                  {s.title}
                </h2>
                <div style={{ width: '32px', height: '1px', backgroundColor: '#C9A96E', marginBottom: '20px' }}></div>
                {s.content.split('\n\n').map((p, i) => (
                  <p key={i} style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#6A6A6A', fontSize: '14px', lineHeight: '1.9', marginBottom: '14px' }}>
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Last updated */}
          <div style={{ borderTop: '1px solid #E8DDD0', marginTop: '60px', paddingTop: '24px' }}>
            <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#8A8A8A', fontSize: '12px' }}>
              Last updated: June 2026
            </p>
            <Link to="/policies/skincare"
              style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#C9A96E', fontSize: '12px', letterSpacing: '0.12em', textDecoration: 'none', display: 'inline-block', marginTop: '12px' }}
              className="uppercase hover:opacity-80 transition-opacity">
              ← View Skincare Policies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}