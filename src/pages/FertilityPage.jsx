import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FertilityProgram from '../components/FertilityProgram'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function FertilityPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div style={{ backgroundColor: '#080610', minHeight: '100vh' }}>
      <SEO title="Fertility & Hormonal Program" description="Data-driven peptide protocol for hormonal balance and reproductive optimization — for men and women who want precision over guesswork." />
      <Navbar />

      {/* Back */}
      <div style={{ paddingTop: '100px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/programs/optimization" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#8A8A8A', fontSize: '12px', letterSpacing: '0.15em', textDecoration: 'none' }}
            className="uppercase hover:text-[#B8A4D4] transition-colors flex items-center gap-2">
            ← All Programs
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section style={{ padding: '56px 0 72px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-60px', width: '350px', height: '350px', border: '1px solid #B8A4D408', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-120px', left: '-80px', width: '400px', height: '400px', border: '1px solid #B8A4D406', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', top: '35%', right: '10%', width: '2px', height: '100px', background: 'linear-gradient(to bottom, #B8A4D400, #B8A4D412, #B8A4D400)' }}></div>
        <div className="max-w-3xl mx-auto px-6 text-center" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: '#B8A4D4', fontFamily: 'Helvetica Neue, Arial, sans-serif', letterSpacing: '0.35em', fontSize: '10px', marginBottom: '20px' }} className="uppercase">
            Fertility & Hormonal Health
          </p>
          <h1 style={{ fontFamily: 'Georgia, serif', color: '#FAFAF8', fontSize: '3.2rem', lineHeight: '1.12', marginBottom: '24px' }} className="font-normal">
            Lion Elite<br /><span style={{ color: '#B8A4D4' }}>Fertility Program</span>
          </h1>
          <div style={{ width: '48px', height: '1px', backgroundColor: '#B8A4D4', margin: '0 auto 28px' }}></div>
          <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#CACACA', fontSize: '16px', lineHeight: '1.9', maxWidth: '540px', margin: '0 auto 36px' }}>
            A structured, data-driven approach to hormonal balance and reproductive optimization — for men and women who want precision over guesswork when it matters most.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            {['Biomarker-Tested', 'Personalized Protocol', 'Guided Implementation', 'Ongoing Support'].map(tag => (
              <span key={tag} style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#B8A4D4', fontSize: '10px', letterSpacing: '0.2em', border: '1px solid #B8A4D433', padding: '6px 14px' }} className="uppercase">
                {tag}
              </span>
            ))}
          </div>
          <Link to="/apply?program=fertility"
            style={{ display: 'inline-block', backgroundColor: '#B8A4D4', color: '#fff', fontFamily: 'Helvetica Neue, Arial, sans-serif', letterSpacing: '0.15em', fontSize: '12px', padding: '18px 52px', textDecoration: 'none' }}
            className="uppercase hover:opacity-90 transition-opacity">
            Apply for This Program →
          </Link>
        </div>
      </section>

      <FertilityProgram />

      <Footer />
    </div>
  )
}
