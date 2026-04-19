'use client'
import { useState } from 'react'
import { Icon } from './Icons'

const FAQ = [
  ['¿En qué se diferencia un personal shopper inmobiliario de una agencia?', 'Una agencia tradicional representa al vendedor. En Lealya actúo como puente entre comprador y vendedor: defiendo los intereses de ambos y aporto criterio técnico en cada paso. El objetivo es que la operación sea justa y tranquila para las dos partes.'],
  ['¿Cuáles son los honorarios?', 'Trabajamos con un fee fijo inicial más un porcentaje sobre el ahorro negociado (solo para compra) o sobre el precio final (venta e inversión). Los comunicamos siempre por escrito antes de empezar — cero sorpresas.'],
  ['¿Trabajáis solo en Madrid?', 'Principalmente Madrid capital y alrededores. Para operaciones relevantes fuera de la Comunidad, lo valoramos caso por caso.'],
  ['¿Cuánto dura un proceso de compra?', 'En promedio entre 2 y 5 meses desde el briefing hasta las llaves, dependiendo de la zona, el tipo de inmueble y tu disponibilidad para visitas. El objetivo no es ir rápido: es acertar.'],
  ['¿Aceptáis cualquier presupuesto?', 'Trabajamos con operaciones desde 300.000 €. Por debajo de ese rango el coste del servicio no suele ser proporcional. Para consultas puntuales no hay mínimo.'],
  ['¿Qué pasa si no encontramos la vivienda adecuada?', 'El primer objetivo siempre es la decisión correcta — incluso si es no comprar. En ese caso, el fee fijo cubre el trabajo realizado y cerramos de forma transparente.'],
]

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: '1px solid var(--line)' }}>
      <button onClick={onToggle} style={{ width: '100%', padding: '28px 0', background: 'transparent', border: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', textAlign: 'left', color: 'var(--fg)', fontFamily: 'inherit', gap: 24 }}>
        <span className="headline" style={{ fontSize: 'clamp(18px, 2vw, 24px)', fontFamily: "'Tenor Sans', serif", transition: 'color .2s', color: open ? 'var(--accent)' : 'var(--fg)' }}>{q}</span>
        <span style={{ flex: '0 0 auto', width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--line)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: open ? 'var(--accent)' : 'var(--muted)', transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .3s, color .2s' }}>
          {open ? <Icon.Minus size={14}/> : <Icon.Plus size={14}/>}
        </span>
      </button>
      <div style={{ maxHeight: open ? 500 : 0, overflow: 'hidden', transition: 'max-height .5s cubic-bezier(.2,.7,.2,1)' }}>
        <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--muted)', margin: 0, padding: '0 0 32px', maxWidth: 720 }}>{a}</p>
      </div>
    </div>
  )
}

export default function Faq() {
  const [open, setOpen] = useState<number>(0)
  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="wrap faq-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80 }}>
        <div>
          <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 16 }}>Preguntas frecuentes</div>
          <h2 className="headline" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05, margin: 0, maxWidth: 360 }}>
            Dudas <span style={{ fontStyle: 'italic', fontFamily: "'Fraunces', serif", fontWeight: 300 }}>honestas</span>, respuestas claras.
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--muted)', marginTop: 28, maxWidth: 340 }}>
            ¿No encuentras tu pregunta? <a href="#contacto" style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: 4 }}>Escríbeme</a>.
          </p>
        </div>
        <div style={{ borderTop: '1px solid var(--line)' }}>
          {FAQ.map(([q, a], i) => (
            <FaqItem key={q as string} q={q as string} a={a as string} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)}/>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .faq-wrap { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  )
}
