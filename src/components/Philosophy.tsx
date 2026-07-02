import Image from 'next/image'

export default function Philosophy() {
  return (
    <section id="filosofia" className="section" style={{ background: 'var(--panel)', minHeight: 'calc(100vh - 69px)', paddingTop: 48, paddingBottom: 72, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="wrap philosophy-wrap" style={{
        display: 'grid', gridTemplateColumns: '280px minmax(0, 1fr)', gap: 80, alignItems: 'start',
      }}>
        <div className="philosophy-index">
          <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 12 }}>01 · Filosofía</div>
          <div style={{ fontFamily: "'Tenor Sans', serif", fontSize: 13, letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: 32 }}>Por qué Lealya</div>
          <div style={{ width: '100%', aspectRatio: '1/1', position: 'relative' }} className="philosophy-img">
            <Image src="/assets/norte-madrid-aerea.png" alt="Vista aérea de urbanización residencial en el norte de Madrid con sierra al fondo" fill style={{ objectFit: 'cover' }}/>
          </div>
          <div style={{ marginTop: 14, fontFamily: "'DM Sans', sans-serif", fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            Criterio técnico · De principio a fin
          </div>
        </div>
        <div>
          <h2 className="headline" style={{ fontSize: 'clamp(22px, 2.8vw, 38px)', lineHeight: 1.1, margin: '0 0 16px', maxWidth: 1000 }}>
            No soy una agencia <span style={{ color: 'var(--muted)' }}>inmobiliaria</span>. <br/>
            Soy la persona que trabaja <span style={{ fontStyle: 'italic', fontFamily: "'Fraunces', serif", fontWeight: 300 }}>exclusivamente</span> para ti.
          </h2>
          <div className="philosophy-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginTop: 0 }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--fg)', margin: 0 }}>
              Trabajo para quien me contrata — comprador o vendedor — con todo mi criterio técnico y sin ningún conflicto de intereses. Busco siempre el acuerdo justo: mi compromiso es con quien me contrata, así que, si hay margen de mejora en una negociación, ese margen es para ti. Eso es lo que me permite darte un consejo honesto, aunque no sea el que quieras escuchar.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--muted)', margin: 0 }}>
              Llevo más de 20 años gestionando operaciones inmobiliarias en el norte de Madrid. Conozco cada urbanización, cada dinámica de mercado, cada trampa legal. Eso es lo que pones de tu lado cuando me contratas.
            </p>
          </div>
          <div className="principles-grid" style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid color-mix(in oklch, var(--fg) 20%, transparent)' }}>
            {[
              ['Tu lado', 'Trabajo exclusivamente para quien me contrata. Una sola parte por operación, siempre.'],
              ['Criterio técnico', 'Diagnóstico arquitectónico, legal y financiero en cada operación.'],
              ['Transparencia', 'Honorarios claros desde el primer día. Cero letra pequeña.'],
              ['Calma', 'Gestionamos tiempos para que decidas sin presión comercial.'],
            ].map(([t, d], i) => (
              <div key={i} style={{ padding: '28px 20px 28px 0', borderRight: i < 3 ? '1px solid color-mix(in oklch, var(--fg) 15%, transparent)' : 'none', paddingLeft: i === 0 ? 0 : 24 }}>
                <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>0{i + 1}</div>
                <div className="headline" style={{ fontSize: 20, marginBottom: 10 }}>{t}</div>
                <div style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--muted)' }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .philosophy-wrap { grid-template-columns: 1fr !important; gap: 32px !important; }
          .philosophy-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .principles-grid { grid-template-columns: 1fr 1fr !important; }
          .principles-grid > div { border-right: none !important; border-bottom: 1px solid color-mix(in oklch, var(--fg) 15%, transparent); padding-left: 0 !important; }
          .philosophy-img { max-width: 280px; }
        }
      `}</style>
    </section>
  )
}
