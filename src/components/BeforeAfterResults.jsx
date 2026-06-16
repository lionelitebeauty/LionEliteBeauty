export default function BeforeAfterResults() {
  return (
    <section id="results" style={{ backgroundColor: '#F5F0E8', padding: '100px 0' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#8A9E85', letterSpacing: '0.3em', fontSize: '10px' }}
            className="uppercase mb-4">Real Results</p>
          <h2 style={{ fontFamily: 'Georgia, serif', color: '#2A2A2A', fontSize: '2.5rem', lineHeight: '1.15', letterSpacing: '-0.01em' }}
            className="font-normal mb-6">
            What Our Clients Achieve.
          </h2>
          <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#6A6A6A', fontSize: '14px', lineHeight: '1.8', maxWidth: '480px', margin: '0 auto' }}>
            These are real clients using Lion Elite Beauty skincare and wellness programs. Results speak for themselves.
          </p>
          <div style={{ width: '48px', height: '1px', backgroundColor: '#C9A96E', margin: '24px auto 0' }}></div>
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px" style={{ backgroundColor: '#E0D5C5' }}>

          {/* Miranda — side-by-side split */}
          <div style={{ backgroundColor: '#FAF7F2', padding: '32px' }}>
            <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#8A9E85', letterSpacing: '0.2em', fontSize: '10px' }}
              className="uppercase mb-6">Miranda · Skincare Results</p>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <div style={{ backgroundColor: '#EDE5D8', marginBottom: '10px', overflow: 'hidden' }}>
                  <img
                    src="/results/miranda-before.jpeg"
                    alt="Miranda before"
                    style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top', display: 'block', filter: 'grayscale(20%)' }}
                  />
                </div>
                <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#6A6A6A', fontSize: '10px', letterSpacing: '0.2em' }} className="uppercase text-center">Before</p>
              </div>
              <div>
                <div style={{ backgroundColor: '#EDE5D8', marginBottom: '10px', overflow: 'hidden' }}>
                  <img
                    src="/results/miranda-after.jpeg"
                    alt="Miranda after"
                    style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                  />
                </div>
                <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#C9A96E', fontSize: '10px', letterSpacing: '0.2em' }} className="uppercase text-center">After</p>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #E0D5C5', marginTop: '24px', paddingTop: '20px' }}>
              <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#6A6A6A', fontSize: '12px', lineHeight: '1.7' }}>
                Visible improvement in skin tone, texture, and clarity using the Lion Elite Beauty peptide skincare line.
              </p>
            </div>
          </div>

          {/* Daylen — combined image */}
          <div style={{ backgroundColor: '#FAF7F2', padding: '32px' }}>
            <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#8A9E85', letterSpacing: '0.2em', fontSize: '10px' }}
              className="uppercase mb-6">Daylen · Skincare Results</p>

            <div style={{ backgroundColor: '#EDE5D8', overflow: 'hidden', position: 'relative' }}>
              <img
                src="/results/daylen-beforeafter.jpeg"
                alt="Daylen before and after"
                style={{ width: '100%', display: 'block', objectFit: 'cover' }}
              />
              {/* Before / After labels overlay */}
              <div style={{ position: 'absolute', bottom: '12px', left: 0, right: 0, display: 'flex', justifyContent: 'space-around', pointerEvents: 'none' }}>
                <span style={{
                  fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '9px', letterSpacing: '0.2em',
                  color: '#FAFAF8', backgroundColor: 'rgba(0,0,0,0.55)', padding: '4px 10px',
                }} className="uppercase">Before</span>
                <span style={{
                  fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '9px', letterSpacing: '0.2em',
                  color: '#C9A96E', backgroundColor: 'rgba(0,0,0,0.55)', padding: '4px 10px',
                }} className="uppercase">After</span>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #E0D5C5', marginTop: '24px', paddingTop: '20px' }}>
              <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#6A6A6A', fontSize: '12px', lineHeight: '1.7' }}>
                Significant reduction in redness and uneven skin tone. Results achieved using the peptide protocol.
              </p>
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#8A8A8A', fontSize: '11px', lineHeight: '1.7', textAlign: 'center', marginTop: '24px' }}>
          Individual results vary. These clients used Lion Elite Beauty products consistently as directed.
        </p>

      </div>
    </section>
  )
}