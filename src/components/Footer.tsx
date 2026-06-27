'use client'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--fg)', color: 'var(--bg)', padding: '96px 48px 32px' }}>
      <div className="wrap footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, paddingBottom: 80, borderBottom: '1px solid color-mix(in oklch, var(--bg) 15%, transparent)' }}>
        <div>
          <div style={{ fontFamily: "'Tenor Sans', serif", fontSize: 36, letterSpacing: '0.28em', marginBottom: 24 }}>LEALYA</div>
          <p style={{ fontSize: 16, lineHeight: 1.7, maxWidth: 360, opacity: .75, margin: '0 0 32px' }}>Asesora inmobiliaria de confianza en el norte de Madrid.<br/>Compra, venta e inversión con criterio técnico y discreción.</p>
          <p style={{ fontSize: 13, opacity: .55, lineHeight: 1.6, maxWidth: 340, margin: 0, fontStyle: 'italic', fontFamily: "'Fraunces', serif" }}>&ldquo;Menos fricción. Más claridad.&rdquo;</p>
        </div>
        {[
          ['Servicios', ['Compra', 'Venta', 'Inversión', 'Asesoría puntual']],
          ['Lealya', ['Filosofía', 'Laura Castellano', 'Proceso', 'Testimonios']],
          ['Contacto', ['laura@lealya.es', '+34 681 804 103', 'Madrid y alrededores', 'Lun—Vie · 10—19h']],
        ].map(([t, items]) => (
          <div key={t as string}>
            <div className="eyebrow" style={{ opacity: .6, marginBottom: 20 }}>{t}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {(items as string[]).map(item => (
                <li key={item}><a href="#" style={{ fontSize: 14, color: 'var(--bg)', opacity: .8, textDecoration: 'none', borderBottom: '1px solid transparent', paddingBottom: 2, transition: 'all .2s' }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.borderBottomColor = 'var(--accent-light)'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '.8'; (e.currentTarget as HTMLElement).style.borderBottomColor = 'transparent'; }}>{item}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 32, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: .5, gap: 24, flexWrap: 'wrap' }}>
        <div>© 2026 Lealya · Laura Castellano</div>
        <div style={{ display: 'flex', gap: 32 }}>
          <a href="/privacidad" style={{ color: 'inherit', textDecoration: 'none' }}>Privacidad</a>
          <a href="/aviso-legal" style={{ color: 'inherit', textDecoration: 'none' }}>Aviso legal</a>
          <a href="/cookies" style={{ color: 'inherit', textDecoration: 'none' }}>Cookies</a>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
