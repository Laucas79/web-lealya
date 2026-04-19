import Image from 'next/image'

export default function Philosophy() {
  return (
    <section id="filosofia" className="section" style={{ background: 'var(--panel)' }}>
      <div className="wrap philosophy-wrap" style={{
        display: 'grid', gridTemplateColumns: '280px minmax(0, 1fr)', gap: 80, alignItems: 'start',
      }}>
        <div className="philosophy-index">
          <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 12 }}>01 · Filosofía</div>
          <div style={{ fontFamily: "'Tenor Sans', serif", fontSize: 13, letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: 32 }}>Por qué Lealya</div>
          <div style={{ width: '100%', aspectRatio: '1/1', position: 'relative' }} className="philosophy-img">
            <Image src="/assets/filosofia-puente.png" alt="El puente — Filosofía Lealya" fill style={{ objectFit: 'cover' }}/>
          </div>
          <div style={{ marginTop: 14, fontFamily: "'DM Sans', sans-serif", fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            El puente · De una orilla a la otra
          </div>
        </div>
        <div>
          <h2 className="headline" style={{ fontSize: 'clamp(32px, 4.6vw, 64px)', lineHeight: 1.08, margin: '0 0 40px', maxWidth: 1000 }}>
            No somos una agencia <span style={{ color: 'var(--muted)' }}>inmobiliaria</span>. <br/>
            Somos el <span style={{ fontStyle: 'italic', fontFamily: "'Fraunces', serif", fontWeight: 300 }}>puente</span> entre quien compra y quien vende.
          </h2>
          <div className="philosophy-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginTop: 48 }}>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--fg)', margin: 0 }}>
              Defiendo los intereses de <strong>ambas partes</strong>. Actúo como nexo entre comprador y vendedor: conecto, ordeno la información y traduzco expectativas. Una operación inmobiliaria solo funciona cuando las dos partes salen tranquilas.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--muted)', margin: 0 }}>
              Aplicamos una visión técnica y arquitectónica a la gestión inmobiliaria para eliminar fricciones, detectar riesgos y proteger tu patrimonio. Claridad absoluta, rigor técnico, cero atajos.
            </p>
          </div>
          <div className="principles-grid" style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid color-mix(in oklch, var(--fg) 20%, transparent)' }}>
            {[
              ['Equilibrio', 'Un único profesional mediando entre comprador y vendedor con criterio justo.'],
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
