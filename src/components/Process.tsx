const PROCESS = [
  ['Escucha', 'Una primera conversación sin compromiso. Entendemos qué buscas, por qué, y qué restricciones reales tienes.'],
  ['Diagnóstico', 'Analizamos tu situación: patrimonio, fiscalidad, timing, criterios objetivos vs. emocionales. Traducimos el caos en requisitos.'],
  ['Búsqueda', 'Recorremos mercado visible y off-market. Filtramos sin piedad. Solo te enseñamos lo que merece tu tiempo.'],
  ['Decisión', 'Revisión técnica, legal y financiera de la opción final. Negociamos por ti. Tú decides desde la calma, no desde la urgencia.'],
  ['Acompañamiento', 'Notaría, registro, gestión post-venta. Seguimos a tu lado hasta que tienes las llaves — y después.'],
]

export default function Process() {
  return (
    <section id="proceso" className="section" style={{ background: 'var(--panel)' }}>
      <div className="wrap">
        <div className="process-head" style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 64, marginBottom: 64 }}>
          <div><div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 12 }}>04 · Proceso</div></div>
          <h2 className="headline" style={{ fontSize: 'clamp(32px, 4.4vw, 60px)', lineHeight: 1.08, margin: 0, maxWidth: 900 }}>
            De la primera llamada a las <span style={{ fontStyle: 'italic', fontFamily: "'Fraunces', serif", fontWeight: 300 }}>llaves</span>. Paso a paso.
          </h2>
        </div>
        <div style={{ position: 'relative' }}>
          <div className="process-line" style={{ position: 'absolute', left: 0, right: 0, top: 56, height: 1, background: 'color-mix(in oklch, var(--fg) 18%, transparent)' }}/>
          <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${PROCESS.length}, 1fr)`, gap: 0, position: 'relative' }}>
            {PROCESS.map(([t, d], i) => (
              <div key={t as string} style={{ padding: '0 18px 0 0', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
                  <span style={{ fontFamily: "'Tenor Sans', serif", fontSize: 40, color: 'var(--accent)', lineHeight: 1 }}>0{i + 1}</span>
                  <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--bg)', border: '1px solid color-mix(in oklch, var(--fg) 25%, transparent)', position: 'relative', zIndex: 1, display: 'inline-block' }}/>
                </div>
                <div className="headline" style={{ fontSize: 22, marginBottom: 12, color: 'var(--fg)' }}>{t}</div>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--muted)', margin: 0, paddingRight: 16 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .process-head { grid-template-columns: 1fr !important; gap: 16px !important; }
          .process-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .process-line { display: none; }
        }
      `}</style>
    </section>
  )
}
