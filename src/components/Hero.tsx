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
            <span className="eyebrow" style={{ color: 'var(--accent)' }}>Asesora Inmobiliaria de Confianza · Norte de Madrid</span>
          </div>
          <h1 className="headline" style={{
            fontSize: 'clamp(38px, 5vw, 72px)', lineHeight: 1.05,
            margin: '0 0 40px', letterSpacing: '-0.005em',
          }}>
            En una operación inmobiliaria, lo más <span style={{ fontStyle: 'italic', fontFamily: "'Fraunces', serif", fontWeight: 300 }}>importante</span><br/>
            no es el precio.<br/>
            <span style={{ fontStyle: 'italic', fontFamily: "'Fraunces', serif", fontWeight: 300, color: 'var(--accent)' }}>Es tener a la persona correcta de tu lado.</span>
          </h1>
          <p style={{
            fontSize: 19, lineHeight: 1.6, maxWidth: 520,
            color: 'var(--muted)', margin: '0 0 48px', fontWeight: 400,
          }}>
            Más de 20 años acompañando operaciones de compra, venta e inversión en el norte de Madrid. Con criterio técnico, discreción absoluta y una persona real al otro lado.
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
              ['Norte de Madrid', 'corredor A-1, La Moraleja, Ciudalcampo'],
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
            {/* TODO: Reemplazar con foto real de Laura o de las zonas cuando estén disponibles */}
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
              alt="Arquitectura residencial premium en el norte de Madrid"
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
              &ldquo;Encontrar la propiedad perfecta es mucho más que una transacción: es un proceso de escucha, confianza y dedicación absoluta a tus necesidades.&rdquo;
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
