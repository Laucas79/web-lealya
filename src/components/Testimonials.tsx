'use client'
import { useState } from 'react'

const TESTIMONIALS = [
  { q: 'Encontrar la casa correcta es una cosa. Encontrarla sin miedo a equivocarte es otra. Laura nos dio la segunda.', who: 'Marta & Javier R.', role: 'Compra familiar · Retiro, Madrid', ctx: 'Piso de 140m² · 2024' },
  { q: 'Llevaba meses viendo propiedades con agencias. Con Lealya vi seis. La quinta era la buena y lo sabíamos desde la primera visita.', who: 'Carlos M.', role: 'Primer comprador · Chamberí', ctx: 'Piso de 85m² · 2023' },
  { q: 'Es la primera vez que alguien del sector me dice "esto no te interesa" en lugar de intentar venderlo. Eso vale oro.', who: 'Inés L.', role: 'Inversora · Salamanca', ctx: 'Portfolio de 3 inmuebles · 2022—2024' },
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  const t = TESTIMONIALS[i]
  return (
    <section id="testimonios" className="section" style={{ background: 'var(--panel-deep)', color: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1600&q=80&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15, mixBlendMode: 'luminosity', pointerEvents: 'none' }}/>
      <div className="wrap-narrow" style={{ textAlign: 'center', position: 'relative' }}>
        <div className="eyebrow" style={{ color: 'var(--bg)', opacity: .6, marginBottom: 32 }}>05 · Testimonios</div>
        <div key={i} style={{ animation: 'fadeInSoft .5s ease' }}>
          <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(28px, 3.6vw, 52px)', lineHeight: 1.25, letterSpacing: '-0.005em', color: 'var(--bg)', margin: '0 0 48px', textWrap: 'balance' } as React.CSSProperties}>
            <span style={{ opacity: .4, fontFamily: "'Tenor Sans', serif" }}>&ldquo;</span>{t.q}<span style={{ opacity: .4, fontFamily: "'Tenor Sans', serif" }}>&rdquo;</span>
          </div>
          <div style={{ fontFamily: "'Tenor Sans', serif", fontSize: 18, letterSpacing: '0.05em', marginBottom: 6 }}>{t.who}</div>
          <div style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: .7 }}>{t.role}</div>
          <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: .45, marginTop: 6 }}>{t.ctx}</div>
        </div>
        <div style={{ marginTop: 72, display: 'flex', justifyContent: 'center', gap: 12 }}>
          {TESTIMONIALS.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} aria-label={`Testimonio ${idx + 1}`} style={{ width: idx === i ? 40 : 20, height: 2, background: idx === i ? 'var(--accent-light)' : 'color-mix(in oklch, var(--bg) 30%, transparent)', border: 0, padding: 0, cursor: 'pointer', transition: 'all .3s' }}/>
          ))}
        </div>
      </div>
    </section>
  )
}
