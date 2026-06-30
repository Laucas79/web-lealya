export default function Numbers() {
  const stats = [
    ['+500', 'Operaciones acompañadas', 'Compraventas e inversiones gestionadas en más de 20 años de trayectoria.'],
    ['97%', 'Clientes repiten o recomiendan', 'Nuestro principal canal sigue siendo el boca a boca.'],
    ['<15d', 'Tiempo medio hasta acuerdo', 'Desde la oferta inicial hasta el apretón de manos. Sin presión, sin atajos.'],
    ['Norte de Madrid', 'Especialización en el corredor A-1', 'La Moraleja, Ciudalcampo, Ciudad Santo Domingo y más.'],
  ]
  return (
    <section className="section" style={{ background: 'var(--bg)', paddingTop: 64, paddingBottom: 80 }}>
      <div className="wrap">
        <div className="numbers-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
          {stats.map(([big, t, d], i) => (
            <div key={i} style={{ padding: '36px 28px 36px 0', borderRight: i < 3 ? '1px solid var(--line)' : 'none', paddingLeft: i === 0 ? 0 : 28 }}>
              <div className="headline" style={{ fontSize: 'clamp(30px, 3.4vw, 50px)', lineHeight: 1, margin: '0 0 14px', letterSpacing: '-0.02em', color: 'var(--fg)' }}>{big}</div>
              <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 10 }}>{t}</div>
              <div style={{ fontSize: 12.5, lineHeight: 1.6, color: 'var(--muted)' }}>{d}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .numbers-grid { grid-template-columns: 1fr 1fr !important; }
          .numbers-grid > div { border-right: none !important; padding-left: 0 !important; padding-right: 16px !important; }
          .numbers-grid > div:nth-child(odd) { border-right: 1px solid var(--line) !important; }
          .numbers-grid > div:nth-child(n+3) { border-top: 1px solid var(--line); }
        }
      `}</style>
    </section>
  )
}
