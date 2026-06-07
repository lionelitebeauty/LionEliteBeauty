import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import WeightProgram from '../components/WeightProgram'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function WeightPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div style={{ backgroundColor: '#060906', minHeight: '100vh' }}>
      <SEO title="Weight & Metabolic Program" description="Personalized peptide protocol for fat loss, appetite control, and metabolic reset — precision-based optimization, not dieting." />
      <Navbar />

      {/* Back */}
      <div style={{ paddingTop: '100px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/programs/optimization" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#8A8A8A', fontSize: '12px', letterSpacing: '0.15em', textDecoration: 'none' }}
            className="uppercase hover:text-[#5BA87A] transition-colors flex items-center gap-2">
            ← All Programs
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section style={{ padding: '56px 0 72px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-60px', width: '350px', height: '350px', border: '1px solid #5BA87A08', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-120px', left: '-80px', width: '400px', height: '400px', border: '1px solid #5BA87A06', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', top: '35%', right: '10%', width: '2px', height: '100px', background: 'linear-gradient(to bottom, #5BA87A00, #5BA87A12, #5BA87A00)' }}></div>
        <div className="max-w-3xl mx-auto px-6 text-center" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: '#5BA87A', fontFamily: 'Helvetica Neue, Arial, sans-serif', letterSpacing: '0.35em', fontSize: '10px', marginBottom: '20px' }} className="uppercase">
            Fat Loss & Metabolic Reset
          </p>
          <h1 style={{ fontFamily: 'Georgia, serif', color: '#FAFAF8', fontSize: '3.2rem', lineHeight: '1.12', marginBottom: '24px' }} className="font-normal">
            Lion Elite<br /><span style={{ color: '#5BA87A' }}>Weight Optimization Program</span>
          </h1>
          <div style={{ width: '48px', height: '1px', backgroundColor: '#5BA87A', margin: '0 auto 28px' }}></div>
          <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#CACACA', fontSize: '16px', lineHeight: '1.9', maxWidth: '540px', margin: '0 auto 36px' }}>
            A structured, personalized peptide protocol designed to reduce body fat, normalize appetite, and reset your metabolic function — not dieting, precision-based optimization.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            {['Biomarker-Tested', 'Personalized Protocol', 'Guided Implementation', 'Ongoing Support'].map(tag => (
              <span key={tag} style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#5BA87A', fontSize: '10px', letterSpacing: '0.2em', border: '1px solid #5BA87A33', padding: '6px 14px' }} className="uppercase">
                {tag}
              </span>
            ))}
          </div>
          <Link to="/apply?program=weight"
            style={{ display: 'inline-block', backgroundColor: '#5BA87A', color: '#fff', fontFamily: 'Helvetica Neue, Arial, sans-serif', letterSpacing: '0.15em', fontSize: '12px', padding: '18px 52px', textDecoration: 'none' }}
            className="uppercase hover:opacity-90 transition-opacity">
            Apply for This Program →
          </Link>
        </div>
      </section>

      <WeightProgram />

      <Footer />
    </div>
  )
}
