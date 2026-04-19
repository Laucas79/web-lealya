import Image from 'next/image'

export default function Hero() {
  return (
    <section id="top" style={{
      minHeight: '100vh', padding: '140px 48px 80px',
      background: 'var(--bg)', position: 'relative',
    }}>
      <div className="wrap" style={{
        display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)',
        gap: 80, alignItems: 'center', minHeight: 'calc(100vh - 220px)',
      }}>
        <div className="hero-copy">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
            <span style={{ width: 40, height: 1, background: 'var(--accent)' }}/>
            <span className="eyebrow" style={{ color: 'var(--accent)' }}>Personal Shopper Inmobiliario · Madrid</span>
          </div>
          <h1 className="headline" style={{
            fontSize: 'clamp(44px, 6.2vw, 92px)', lineHeight: 1.02,
            margin: '0 0 40px', letterSpacing: '-0.005em',
          }}>
            Decisiones <span style={{ fontStyle: 'italic', fontFamily: "'Fraunces', serif", fontWeight: 300 }}>importantes</span>,<br/>
            tomadas con <span style={{ color: 'var(--accent)' }}>calma</span>.
          </h1>
          <p style={{
            fontSize: 19, lineHeight: 1.6, maxWidth: 520,
            color: 'var(--muted)', margin: '0 0 48px', fontWeight: 400,
          }}>
            Acompañamiento integral para alquilar, comprar, vender o invertir en vivienda. Un puente equilibrado entre las dos partes — para que la decisión correcta sea también la decisión tranquila.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#contacto" className="bronze-button">Hablemos de tu caso</a>
            <a href="#servicios" className="ghost-button">Ver servicios</a>
          </div>
          <div style={{
            marginTop: 72, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 28, paddingTop: 36, borderTop: '1px solid var(--line)',
          }}>
            {[
              ['+20 años', 'acompañando operaciones inmobiliarias'],
              ['+500', 'operaciones gestionadas end-to-end'],
              ['2 partes', 'atendidas con el mismo criterio y respeto'],
            ].map(([big, small], i) => (
              <div key={i}>
                <div className="headline" style={{ fontSize: 'clamp(28px, 3vw, 42px)', lineHeight: 1, marginBottom: 8 }}>{big}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5, letterSpacing: '0.04em' }}>{small}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-image" style={{ position: 'relative' }}>
          <div style={{
            aspectRatio: '4/5', width: '100%', position: 'relative', overflow: 'hidden',
          }}>
            <Image
              src="/assets/hero-calma.png"
              alt="Lealya — Asesoría inmobiliaria con calma"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
          <div style={{
            position: 'absolute', bottom: 32, left: -32,
            background: 'var(--bg)', padding: '20px 28px',
            borderTop: '2px solid var(--accent)',
            maxWidth: 280,
          }}>
            <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 8 }}>Metodología</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontSize: 16, lineHeight: 1.5, color: 'var(--fg)' }}>
              &ldquo;No vendemos casas. Acompañamos decisiones.&rdquo;
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          section#top > .wrap { grid-template-columns: 1fr !important; }
          .hero-image { display: none; }
        }
      `}</style>
    </section>
  )
}
