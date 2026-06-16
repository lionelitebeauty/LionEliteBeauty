import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: `By enrolling in any Lion Elite Beauty optimization program, you agree to be bound by these Terms & Conditions. These terms constitute a legally binding agreement between you and Lion Elite Beauty.

If you do not agree with any part of these terms, do not enroll. We reserve the right to modify these terms with reasonable notice to active participants. Continued participation after changes constitutes acceptance.`,
  },
  {
    id: 'enrollment',
    title: '2. Enrollment & Eligibility',
    content: `Program enrollment is open to individuals 18 years or older. By enrolling, you represent that you are at least 18 and that all information provided is accurate and complete.

Enrollment is for a fixed 6-month term at $2,400. The program begins on the start date communicated to you after payment is confirmed. Enrollment is personal and non-transferable.

We reserve the right to deny or cancel enrollment at our discretion, including if we determine the program is not suitable for your needs.`,
  },
  {
    id: 'payment',
    title: '3. Payment Terms',
    content: `The full program fee of $2,400 is due before the program start date. Accepted payment methods: Credit/Debit Card (via Stripe) and Zelle.

Invoiced installment plans may be approved on a case-by-case basis. If an installment plan is approved, payments must be made according to the agreed schedule. Late or missed payments may result in program suspension until the account is current.

All fees are in USD. No hidden fees or automatic renewals.`,
  },
  {
    id: 'services',
    title: '4. Program Services',
    content: `Program services include personalized protocol design, ongoing coaching check-ins, assessment reviews, and access to program materials as outlined in your specific program description.

Services are delivered virtually. Coaching and support are provided during business hours unless otherwise specified. Response times may vary.

Program materials and protocols are for your personal use only and may not be shared, reproduced, or distributed to any third party.`,
  },
  {
    id: 'health',
    title: '5. Health Disclaimer & Acknowledgment',
    content: `Our programs are educational and informational in nature. They are not medical treatment and do not replace the professional judgment of a qualified healthcare provider.

By enrolling, you acknowledge and agree that:
• You have consulted with your physician before beginning any new protocol
• You are participating voluntarily and assume all risks
• Results are not guaranteed and vary based on individual factors
• You will disclose any relevant medical conditions or medications
• Lion Elite Beauty is not liable for any adverse outcomes

If you have a known medical condition, are pregnant or nursing, or are under the care of a physician, you must obtain medical clearance before enrolling.`,
  },
  {
    id: 'cancellation',
    title: '6. Cancellation & Refunds',
    content: `You may cancel within 7 days of your program start date for a full refund, less any administrative fees (maximum $50).

After 7 days, refunds are prorated based on the portion of the program completed, less a $250 administrative fee. Example: if 25% of the program has elapsed, you receive 75% of the fee minus $250.

No refunds are issued after 50% or more of the program duration has elapsed (after approximately 3 months). Refund requests must be submitted in writing to orders@lionelitebeauty.com.

Lion Elite Beauty may cancel or reschedule a program due to insufficient enrollment or unforeseen circumstances. In such cases, a full refund will be issued.`,
  },
  {
    id: 'confidentiality',
    title: '7. Confidentiality',
    content: `All information shared during coaching sessions, assessments, and communications is treated as confidential. Lion Elite Beauty will not share your personal health information with third parties without your written consent, except as required by law.

You agree not to share program materials, protocols, or proprietary information with non-participants. Violation of this clause may result in immediate termination of program access without refund.`,
  },
  {
    id: 'intellectual',
    title: '8. Intellectual Property',
    content: `All program materials, protocols, assessments, and content are the exclusive intellectual property of Lion Elite Beauty. You are granted a limited, non-exclusive, non-transferable license to use these materials for your personal participation.

You may not copy, modify, distribute, sell, or create derivative works from program materials without prior written consent.`,
  },
  {
    id: 'limitation',
    title: '9. Limitation of Liability',
    content: `Lion Elite Beauty's liability is limited to the total fees paid by you for the program. We are not liable for any indirect, incidental, special, or consequential damages, including but not limited to health complications, lost profits, or personal injury.

Participants acknowledge that health and fitness programs carry inherent risks, and participation is entirely voluntary. Some jurisdictions do not allow limitation of liability for personal injury, so this limitation may not apply to you.`,
  },
  {
    id: 'termination',
    title: '10. Termination',
    content: `Lion Elite Beauty may terminate your program access immediately if you violate these terms, engage in harmful or disruptive behavior, or fail to make required payments. Termination does not waive our right to collect fees due.

Upon termination, your access to program materials and coaching ends. No refund is provided for terminations due to violations.`,
  },
  {
    id: 'contact',
    title: '11. Contact Information',
    content: `For questions about these Terms & Conditions, please contact us:

Email: orders@lionelitebeauty.com
Response time: within 24 hours on business days.`,
  },
]

export default function ProgramsTerms() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ backgroundColor: '#FAF7F2', minHeight: '100vh' }}>
      <SEO title="Terms & Conditions — Programs" description="Lion Elite Beauty programs terms and conditions — enrollment, payment, health disclaimer, cancellation, and liability." />
      <Navbar />

      <section style={{ paddingTop: '140px', paddingBottom: '64px', borderBottom: '1px solid #E8DDD0' }}>
        <div className="max-w-3xl mx-auto px-6">
          <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#8A9E85', letterSpacing: '0.3em', fontSize: '10px', marginBottom: '16px' }}
            className="uppercase">Terms &amp; Conditions</p>
          <h1 style={{ fontFamily: 'Georgia, serif', color: '#2A2A2A', fontSize: '2.6rem', lineHeight: '1.1', letterSpacing: '-0.02em', marginBottom: '12px' }}
            className="font-normal">
            Programs Terms &amp; Conditions
          </h1>
          <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#6A6A6A', fontSize: '15px', lineHeight: '1.7' }}>
            Legal terms governing enrollment in Lion Elite Beauty optimization programs.
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
            <Link to="/policies/programs"
              style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#C9A96E', fontSize: '12px', letterSpacing: '0.12em', textDecoration: 'none', display: 'inline-block', marginTop: '12px' }}
              className="uppercase hover:opacity-80 transition-opacity">
              ← View Programs Policies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}