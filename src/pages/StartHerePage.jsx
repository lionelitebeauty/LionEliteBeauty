import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Step({ number, title, desc, accent = '#C9A96E' }) {
  return (
    <div className="flex items-start gap-5">
      <div style={{ width: '40px', height: '40px', border: `1px solid ${accent}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <span style={{ fontFamily: 'Georgia, serif', color: accent, fontSize: '13px' }}>{number}</span>
      </div>
      <div>
        <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#FAFAF8', fontSize: '14px', fontWeight: '500', marginBottom: '6px' }}>{title}</p>
        <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#4A4A4A', fontSize: '13px', lineHeight: '1.8' }}>{desc}</p>
      </div>
    </div>
  )
}

const ingredients = [
  {
    name: 'GHK-Cu',
    fullName: 'Glycyl-L-Histidyl-L-Lysine Copper',
    accent: '#C9A96E',
    badge: 'Core Peptide',
    tagline: 'The repair signal your skin stops making with age.',
    what: 'A naturally occurring copper peptide found in human blood and tissue. Your body produces it — but levels decline significantly after your 20s.',
    does: [
      'Activates over 4,000 genes involved in skin repair and regeneration',
      'Stimulates collagen and elastin production — the proteins that keep skin firm',
      'Reduces fine lines, improves skin texture and tone',
      'Accelerates wound healing and post-procedure recovery',
      'Anti-inflammatory — calms redness and skin stress',
    ],
    products: ['GHK-Cu Peptide Face Wash', 'Regenerating Peptide Serum', 'Peptide Anti-Aging Cream', 'Post-Procedure Recovery Kit'],
    slugs: ['ghk-cu-face-wash', 'peptide-serum', 'anti-aging-cream', 'recovery-kit'],
    why: 'GHK-Cu has been studied since the 1970s — one of the most researched peptides in dermatology. Unlike trendy ingredients, the evidence base here is deep. We formulate at concentrations that match what studies actually use, not trace marketing amounts.',
  },
  {
    name: 'KPV',
    fullName: 'Lysine-Proline-Valine',
    accent: '#8A7AB0',
    badge: 'Anti-Inflammatory Peptide',
    tagline: 'The calming signal for reactive, sensitive, and post-procedure skin.',
    what: 'KPV is a tripeptide fragment derived from alpha-MSH (a natural hormone involved in inflammation regulation). It\'s one of the most potent anti-inflammatory compounds available in topical skincare.',
    does: [
      'Reduces redness and inflammation at a biological level — not just surface soothing',
      'Calms skin reactions, flare-ups, and post-procedure irritation',
      'Strengthens the skin barrier so it becomes less reactive over time',
      'Supports faster healing after cosmetic procedures',
      'Safe for sensitive, rosacea-prone and allergy-prone skin',
    ],
    products: ['KPV Recovery Moisturizer', 'Post-Procedure Recovery Kit'],
    slugs: ['kpv-moisturizer', 'recovery-kit'],
    why: 'Most "calming" skincare uses botanical extracts that mask redness temporarily. KPV actually interrupts the inflammatory pathway — the same one that causes redness, swelling and skin sensitivity. It works at the source, not the symptom.',
  },
  {
    name: 'Matrixyl 3000',
    fullName: 'Palmitoyl Tripeptide-1 & Palmitoyl Tetrapeptide-7',
    accent: '#8A9E85',
    badge: 'Anti-Aging Peptide Complex',
    tagline: 'The most clinically studied peptide complex for reducing wrinkles.',
    what: 'Matrixyl 3000 is a combination of two peptides that work together to stimulate the skin\'s extracellular matrix — the structural framework underneath your skin that keeps it firm and smooth.',
    does: [
      'Visibly reduces the depth and appearance of fine lines and wrinkles',
      'Stimulates collagen I, III and fibronectin — key structural proteins',
      'Improves skin firmness and elasticity with consistent overnight use',
      'Shown in clinical studies to reduce wrinkle depth by up to 45% in 2 months',
      'Non-irritating — suitable for all skin types including sensitive skin',
    ],
    products: ['Peptide Anti-Aging Cream'],
    slugs: ['anti-aging-cream'],
    why: 'Matrixyl 3000 is one of the most researched anti-aging peptide complexes in cosmetic science. It\'s the anti-aging workhorse of the Lion Elite Beauty overnight routine — delivering structural skin repair while retinol alternatives would cause irritation.',
  },
  {
    name: 'Hyaluronic Acid',
    fullName: 'Sodium Hyaluronate (3 molecular weights)',
    accent: '#7A9FBF',
    badge: 'Hydration Molecule',
    tagline: 'The molecule your skin uses to hold water — at every depth.',
    what: 'Hyaluronic acid is a naturally occurring polysaccharide found throughout your body. A single molecule can hold up to 1,000 times its weight in water. Your skin contains large amounts of it naturally — but aging and environmental stress deplete it.',
    does: [
      'Draws and holds moisture in the skin from the inside out',
      'Plumps fine lines caused by dehydration almost immediately',
      'Three different molecular weights penetrate to different skin depths',
      'Improves skin suppleness and bounce',
      'Supports barrier function and reduces transepidermal water loss',
    ],
    products: ['Regenerating Peptide Serum'],
    slugs: ['peptide-serum'],
    why: 'Many brands use a single-weight hyaluronic acid that only hydrates the surface. We use three different molecular weights — small, medium and large — so hydration is delivered at every layer of the skin, not just the top.',
  },
  {
    name: 'Niacinamide',
    fullName: 'Vitamin B3 (Nicotinamide)',
    accent: '#C4A265',
    badge: 'Brightening + Barrier',
    tagline: 'The multi-tasker that improves tone, minimises pores, and strengthens skin.',
    what: 'Niacinamide is a form of Vitamin B3 and one of the most versatile and well-tolerated actives in skincare. It works on multiple pathways simultaneously — brightening, strengthening, and refining.',
    does: [
      'Visibly reduces hyperpigmentation and uneven skin tone',
      'Minimises the appearance of enlarged pores',
      'Strengthens the skin barrier and improves moisture retention',
      'Reduces the appearance of redness and blotchiness',
      'Pairs synergistically with peptides to amplify repair',
    ],
    products: ['Regenerating Peptide Serum'],
    slugs: ['peptide-serum'],
    why: 'Niacinamide is one of the rare skincare ingredients with broad clinical backing across multiple skin concerns. It amplifies what the peptides do — improving barrier function so the repair signals GHK-Cu sends can actually be acted on.',
  },
  {
    name: 'Ceramides',
    fullName: 'Ceramide NP, AP & EOP Complex',
    accent: '#B8A4D4',
    badge: 'Barrier Builders',
    tagline: 'The bricks in your skin\'s wall — rebuild them, and everything improves.',
    what: 'Ceramides are lipid molecules that make up roughly 50% of the skin\'s outer layer. They\'re the mortar between your skin cells — without enough of them, your barrier breaks down and moisture escapes.',
    does: [
      'Restores and strengthens a compromised skin barrier',
      'Reduces sensitivity, dryness and reactivity caused by barrier damage',
      'Locks in moisture and prevents transepidermal water loss',
      'Protects against environmental damage and pollution',
      'Supports recovery after procedures that disrupt the skin barrier',
    ],
    products: ['Peptide Anti-Aging Cream', 'Post-Procedure Recovery Kit'],
    slugs: ['anti-aging-cream', 'recovery-kit'],
    why: 'Ceramide levels drop significantly with age and are damaged by over-exfoliation, harsh cleansers, and environmental stress. If your skin feels tight, dry, or reactive — your barrier is likely compromised. Ceramides rebuild it from the inside out.',
  },
  {
    name: 'Centella Asiatica',
    fullName: 'Cica / Gotu Kola Extract',
    accent: '#5BA87A',
    badge: 'Healing Botanical',
    tagline: 'One of the most studied healing plants in clinical dermatology.',
    what: 'Centella Asiatica (also known as Cica or Gotu Kola) is a botanical extract with centuries of use in traditional medicine and decades of clinical research in dermatology. It works on both skin repair and anti-inflammatory pathways.',
    does: [
      'Stimulates collagen synthesis through its active compounds (madecassoside, asiaticoside)',
      'Reduces redness and inflammation — clinically studied for rosacea and irritation',
      'Accelerates wound healing and barrier recovery',
      'Soothes and calms skin without sedating other active ingredients',
      'Supports long-term skin resilience with consistent use',
    ],
    products: ['KPV Recovery Moisturizer'],
    slugs: ['kpv-moisturizer'],
    why: 'Centella Asiatica pairs with KPV to create a dual anti-inflammatory system in the Recovery Moisturizer — one that works from both a peptide pathway and a botanical pathway simultaneously. The combination is more effective than either alone.',
  },
  {
    name: 'Squalane',
    fullName: 'Plant-Derived Squalane (Olive)',
    accent: '#C9A96E',
    badge: 'Skin-Identical Lipid',
    tagline: 'The lightweight oil that mimics your skin\'s own sebum.',
    what: 'Squalane is a stable, plant-derived form of squalene — a lipid your skin produces naturally. Because it\'s structurally similar to your own sebum, it absorbs instantly and doesn\'t feel greasy, clog pores, or interfere with other actives.',
    does: [
      'Deep moisture without heaviness or oiliness',
      'Strengthens the skin barrier and prevents moisture loss',
      'Antioxidant — protects against oxidative damage',
      'Non-comedogenic — suitable for oily, acne-prone and combination skin',
      'Enhances the texture and absorption of every other ingredient it\'s combined with',
    ],
    products: ['Peptide Anti-Aging Cream'],
    slugs: ['anti-aging-cream'],
    why: 'Many rich creams use heavy occlusive oils that sit on the skin and block pores. Squalane is skin-identical — it works with your biology, not against it. It allows the Anti-Aging Cream to feel luxurious without any of the downsides of a heavy face oil.',
  },
]

export default function StartHerePage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ backgroundColor: '#080808', paddingTop: '140px', paddingBottom: '80px', borderBottom: '1px solid #141414' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#C9A96E', letterSpacing: '0.3em', fontSize: '10px' }}
            className="uppercase mb-5">New to Peptide Skincare?</p>
          <h1 style={{ fontFamily: 'Georgia, serif', color: '#FAFAF8', fontSize: '3rem', lineHeight: '1.12', letterSpacing: '-0.02em' }}
            className="font-normal mb-6">
            Understand what's in<br />your skincare. And why.
          </h1>
          <div style={{ width: '48px', height: '1px', backgroundColor: '#C9A96E', margin: '0 auto 28px' }}></div>
          <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#4A4A4A', fontSize: '16px', lineHeight: '1.9', maxWidth: '540px', margin: '0 auto' }}>
            Every ingredient in the Lion Elite Beauty range is here for a reason. This page explains what each one is, what it does to your skin, and which product it's in — so you can make informed decisions, not guesses.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <section style={{ backgroundColor: '#050505', borderBottom: '1px solid #111', padding: '24px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-3">
            <span style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#2A2A2A', fontSize: '10px', letterSpacing: '0.2em' }} className="uppercase">Jump to:</span>
            {ingredients.map(ing => (
              <a key={ing.name} href={`#${ing.name.toLowerCase().replace(/\s/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: ing.accent, fontSize: '11px', letterSpacing: '0.1em', textDecoration: 'none', border: `1px solid ${ing.accent}33`, padding: '5px 12px' }}
                className="uppercase hover:opacity-70 transition-opacity">
                {ing.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredient deep-dives */}
      {ingredients.map((ing, idx) => (
        <section key={ing.name} id={ing.name.toLowerCase().replace(/\s/g, '-').replace(/[^a-z0-9-]/g, '')}
          style={{ backgroundColor: idx % 2 === 0 ? '#080808' : '#050505', padding: '80px 0', borderBottom: '1px solid #111' }}>
          <div className="max-w-7xl mx-auto px-6">

            {/* Header */}
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div style={{ backgroundColor: ing.accent, padding: '4px 12px' }}>
                    <span style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#000', fontSize: '8px', letterSpacing: '0.2em' }} className="uppercase">{ing.badge}</span>
                  </div>
                </div>
                <h2 style={{ fontFamily: 'Georgia, serif', color: '#FAFAF8', fontSize: '2.2rem', lineHeight: '1.15', marginBottom: '6px' }}
                  className="font-normal">{ing.name}</h2>
                <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#2A2A2A', fontSize: '12px', letterSpacing: '0.1em', marginBottom: '20px' }}
                  className="uppercase">{ing.fullName}</p>
                <div style={{ width: '32px', height: '1px', backgroundColor: ing.accent, marginBottom: '20px' }}></div>
                <p style={{ fontFamily: 'Georgia, serif', color: ing.accent, fontSize: '1rem', fontStyle: 'italic', lineHeight: '1.7', marginBottom: '20px' }}>
                  "{ing.tagline}"
                </p>
                <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#5A5A5A', fontSize: '15px', lineHeight: '1.9' }}>
                  {ing.what}
                </p>
              </div>

              {/* What it does */}
              <div style={{ backgroundColor: '#0A0A0A', border: `1px solid ${ing.accent}18`, padding: '36px' }}>
                <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: ing.accent, letterSpacing: '0.25em', fontSize: '10px', marginBottom: '20px' }} className="uppercase">
                  What It Does to Your Skin
                </p>
                <ul className="space-y-4">
                  {ing.does.map(point => (
                    <li key={point} className="flex items-start gap-3">
                      <span style={{ color: ing.accent, fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>✔</span>
                      <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#5A5A5A', fontSize: '13px', lineHeight: '1.7' }}>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Why we use it + products */}
            <div className="grid md:grid-cols-2 gap-px mt-px" style={{ backgroundColor: '#141414' }}>
              <div style={{ backgroundColor: idx % 2 === 0 ? '#080808' : '#050505', padding: '32px 36px' }}>
                <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: ing.accent, letterSpacing: '0.25em', fontSize: '10px', marginBottom: '16px' }} className="uppercase">
                  Why We Use It
                </p>
                <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#4A4A4A', fontSize: '14px', lineHeight: '1.9' }}>
                  {ing.why}
                </p>
              </div>

              <div style={{ backgroundColor: idx % 2 === 0 ? '#080808' : '#050505', padding: '32px 36px' }}>
                <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: ing.accent, letterSpacing: '0.25em', fontSize: '10px', marginBottom: '16px' }} className="uppercase">
                  Found In
                </p>
                <div className="space-y-3">
                  {ing.products.map((prod, i) => (
                    <Link key={prod} to={`/skincare/${ing.slugs[i]}`}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', padding: '12px 16px', border: `1px solid ${ing.accent}22` }}
                      className="group hover:border-opacity-60 transition-all">
                      <div className="flex items-center gap-3">
                        <div style={{ width: '6px', height: '6px', backgroundColor: ing.accent, borderRadius: '50%', flexShrink: 0 }}></div>
                        <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#FAFAF8', fontSize: '12px', letterSpacing: '0.05em' }}>{prod}</p>
                      </div>
                      <span style={{ color: ing.accent, fontSize: '12px' }} className="opacity-40 group-hover:opacity-100 transition-opacity">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Your first routine */}
      <section style={{ backgroundColor: '#080808', padding: '80px 0', borderBottom: '1px solid #111' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#C9A96E', letterSpacing: '0.25em', fontSize: '10px', marginBottom: '20px' }}
                className="uppercase">Now That You Know — Start Here</p>
              <h2 style={{ fontFamily: 'Georgia, serif', color: '#FAFAF8', fontSize: '2rem', lineHeight: '1.2', marginBottom: '20px' }}
                className="font-normal">Your first routine.<br />Three products. Every day.</h2>
              <div style={{ width: '32px', height: '1px', backgroundColor: '#C9A96E', marginBottom: '24px' }}></div>
              <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#4A4A4A', fontSize: '15px', lineHeight: '1.9', marginBottom: '32px' }}>
                Start with the core three. Build the habit. Add more as needed.
              </p>
              <div className="space-y-6">
                <Step number="01" title="Cleanse — GHK-Cu Peptide Face Wash"
                  desc="Morning and evening. Activates GHK-Cu from the first step. Primes skin to absorb everything that follows." />
                <Step number="02" title="Treat — Regenerating Peptide Serum"
                  desc="The core product. GHK-Cu + Niacinamide + Hyaluronic Acid (3 weights) — visibly reduces fine lines, firms and brightens." />
                <Step number="03" title="Protect — KPV Recovery Moisturizer"
                  desc="Seal, calm and strengthen. KPV + Centella Asiatica build your barrier so your skin becomes less reactive over time." />
              </div>
              <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#3A3A3A', fontSize: '11px', letterSpacing: '0.15em', marginTop: '28px' }} className="uppercase">
                Visible difference expected in 2–4 weeks of consistent use.
              </p>
            </div>

            <div className="space-y-px" style={{ backgroundColor: '#141414' }}>
              {[
                { name: 'GHK-Cu Peptide Face Wash', price: '$69.99', size: '150ml', slug: 'ghk-cu-face-wash', accent: '#C9A96E', tag: 'Step 01 · Cleanse', key: 'GHK-Cu' },
                { name: 'Regenerating Peptide Serum', price: '$119.99', size: '30ml', slug: 'peptide-serum', accent: '#8A9E85', tag: 'Step 02 · Treat', key: 'GHK-Cu · Niacinamide · HA' },
                { name: 'KPV Recovery Moisturizer', price: '$79.99', size: '50ml', slug: 'kpv-moisturizer', accent: '#8A7AB0', tag: 'Step 03 · Protect', key: 'KPV · Cica · Beta-Glucan' },
              ].map(prod => (
                <div key={prod.slug} style={{ backgroundColor: '#080808', padding: '28px 32px' }}>
                  <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: prod.accent, fontSize: '9px', letterSpacing: '0.2em', marginBottom: '8px' }} className="uppercase">{prod.tag}</p>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p style={{ fontFamily: 'Georgia, serif', color: '#FAFAF8', fontSize: '15px', marginBottom: '4px' }}>{prod.name}</p>
                      <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#2A2A2A', fontSize: '11px', marginBottom: '4px' }}>{prod.key}</p>
                      <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#3A3A3A', fontSize: '11px' }}>{prod.price} · {prod.size}</p>
                    </div>
                    <Link to={`/skincare/${prod.slug}`}
                      style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: prod.accent, fontSize: '10px', letterSpacing: '0.15em', textDecoration: 'none', flexShrink: 0 }}
                      className="uppercase hover:opacity-70 transition-opacity">
                      View →
                    </Link>
                  </div>
                </div>
              ))}
              <div style={{ backgroundColor: '#0A0A0A', padding: '28px 32px' }}>
                <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#3A3A3A', fontSize: '9px', letterSpacing: '0.25em', marginBottom: '8px' }} className="uppercase">Best Value</p>
                <p style={{ fontFamily: 'Georgia, serif', color: '#FAFAF8', fontSize: '15px', marginBottom: '4px' }}>Daily Essentials Duo</p>
                <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#3A3A3A', fontSize: '12px', marginBottom: '16px' }}>
                  Face Wash + Serum · <span style={{ textDecoration: 'line-through' }}>$189.99</span> → <span style={{ color: '#C9A96E' }}>$159.99</span>
                </p>
                <Link to="/skincare"
                  style={{ display: 'inline-block', backgroundColor: '#C9A96E', color: '#000', fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '10px', letterSpacing: '0.18em', padding: '12px 24px', textDecoration: 'none' }}
                  className="uppercase hover:opacity-90 transition-opacity">
                  Shop the Bundle →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ backgroundColor: '#050505', padding: '80px 0' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#C9A96E', letterSpacing: '0.25em', fontSize: '10px', marginBottom: '20px' }}
            className="uppercase">Ready?</p>
          <h2 style={{ fontFamily: 'Georgia, serif', color: '#FAFAF8', fontSize: '2.2rem', lineHeight: '1.15', marginBottom: '20px' }}
            className="font-normal">You now know more about<br />your skincare than most people ever will.</h2>
          <div style={{ width: '32px', height: '1px', backgroundColor: '#C9A96E', margin: '0 auto 24px' }}></div>
          <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#4A4A4A', fontSize: '15px', lineHeight: '1.9', maxWidth: '440px', margin: '0 auto 36px' }}>
            Put it to work. Start with the core routine and see the difference in your skin within weeks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/skincare"
              style={{ backgroundColor: '#C9A96E', color: '#000', fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '12px', letterSpacing: '0.18em', padding: '18px 48px', textDecoration: 'none' }}
              className="uppercase hover:opacity-90 transition-opacity">
              Shop All Products →
            </Link>
            <Link to="/skincare/peptide-serum"
              style={{ border: '1px solid #2A2A2A', color: '#5A5A5A', fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '12px', letterSpacing: '0.18em', padding: '18px 36px', textDecoration: 'none' }}
              className="uppercase hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors">
              View Flagship Serum
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
