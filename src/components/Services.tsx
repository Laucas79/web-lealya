'use client'
import { useState } from 'react'
import { Icon } from './Icons'

const SERVICES = [
  {
    key: 'venta', num: '01', title: 'Venta', tag: 'Seller side',
    lede: 'Estrategia, staging y presentación impecable para atraer al comprador correcto.',
    body: 'Trabajo exclusivamente para ti como vendedor. Valoración realista, plan de marketing inmobiliario, fotografía profesional y filtrado riguroso de interesados. Precio adecuado, tiempos controlados.',
    includes: ['Valoración técnica', 'Plan de staging', 'Fotografía y vídeo', 'Marketing dirigido', 'Gestión legal'],
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80&auto=format',
    imageAlt: 'Fachada residencial', icon: 'Home' as const,
  },
  {
    key: 'compra', num: '02', title: 'Compra', tag: 'Buyer side',
    lede: 'Búsqueda objetiva y acompañamiento al comprador con criterio técnico.',
    body: 'Trabajo exclusivamente para ti como comprador. Filtrado exhaustivo de mercado, visitas preselección, análisis técnico y negociación para que la operación fluya sin sorpresas.',
    includes: ['Briefing detallado', 'Búsqueda off-market', 'Due diligence técnica', 'Negociación', 'Acompañamiento a notaría'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format',
    imageAlt: 'Interior cálido con luz natural', icon: 'Search' as const,
  },
  {
    key: 'alquiler', num: '03', title: 'Alquiler', tag: 'Rental',
    lede: 'Alquilar con la tranquilidad de estar bien acompañado.',
    body: 'Trabajo exclusivamente para ti, seas propietario o inquilino — nunca para ambas partes del mismo alquiler. Tanto si quieres alquilar tu propiedad como si buscas el alquiler adecuado, estoy siempre del lado de quien me contrata, con el mismo cuidado y la misma dedicación.',
    includes: ['Fijación de condiciones y precio de mercado', 'Búsqueda o publicación según el caso', 'Verificación y selección de la contraparte', 'Revisión de condiciones contractuales', 'Acompañamiento hasta la firma'],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80&auto=format',
    imageAlt: 'Salón luminoso de una vivienda en alquiler', icon: 'Building' as const,
  },
  {
    key: 'inversion', num: '04', title: 'Inversión', tag: 'Invest',
    lede: 'Análisis de rentabilidad, riesgo y viabilidad para decisiones patrimoniales.',
    body: 'Análisis independiente, sin cartera propia que colocar. Estudio de rentabilidad por zona, proyección a 5/10 años, diagnóstico técnico y fiscal. Para inversores que priorizan criterio frente a impulso.',
    includes: ['Análisis de rentabilidad', 'Estudio de zona', 'Proyección fiscal', 'Plan de obra', 'Gestión de alquiler'],
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80&auto=format',
    imageAlt: 'Interior minimalista', icon: 'Compass' as const,
  },
  {
    key: 'asesoria', num: '05', title: 'Asesoría puntual', tag: 'One-shot',
    lede: 'Una hora de claridad para un problema concreto.',
    body: 'Tasaciones, dudas legales, segundas opiniones sobre una oferta. Sesiones monográficas sin compromiso posterior.',
    includes: ['Revisión de oferta', 'Tasación de mercado', 'Diagnóstico estructural', 'Opinión técnica'],
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=1200&q=80&auto=format',
    imageAlt: 'Libreta y pluma sobre mesa', icon: 'Key' as const,
  },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const s = SERVICES[active]

  return (
    <section id="servicios" className="section" style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)', paddingTop: 90 }}>
      <div className="wrap">
        <div className="services-head" style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 64, marginBottom: 28 }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 12 }}>03 · Servicios</div>
            <div style={{ fontFamily: "'Tenor Sans', serif", fontSize: 13, letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase' }}>Metodología</div>
          </div>
          <div>
            <h2 className="headline" style={{ fontSize: 'clamp(26px, 3.4vw, 44px)', lineHeight: 1.1, margin: 0, maxWidth: 900 }}>
              Cinco formas de trabajar contigo. Una sola obsesión: <span style={{ fontStyle: 'italic', fontFamily: "'Fraunces', serif", fontWeight: 300, color: 'var(--accent)' }}>que aciertes</span>.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--muted)', margin: '20px 0 0', maxWidth: 620 }}>
              No hay dos casos iguales: mi servicio se moldea a tu situación concreta, con la misma dedicación y transparencia en cada uno.
            </p>
          </div>
        </div>
        <div className="services-tabs" style={{ display: 'grid', gridTemplateColumns: `repeat(${SERVICES.length}, 1fr)`, borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', marginBottom: 32 }}>
          {SERVICES.map((sv, i) => (
            <button key={sv.key} onClick={() => setActive(i)} style={{
              background: 'transparent', border: 0,
              borderRight: i < SERVICES.length - 1 ? '1px solid var(--line)' : 'none',
              padding: '18px 16px', textAlign: 'left', cursor: 'pointer',
              color: active === i ? 'var(--fg)' : 'var(--muted)', fontFamily: 'inherit', transition: 'all .3s', position: 'relative',
            }}>
              <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: active === i ? 'var(--accent)' : 'var(--muted)', marginBottom: 8 }}>{sv.num} · {sv.tag}</div>
              <div className="headline" style={{ fontSize: 18 }}>{sv.title}</div>
              {active === i && <span style={{ position: 'absolute', bottom: -1, left: 0, right: 0, height: 2, background: 'var(--accent)' }}/>}
            </button>
          ))}
        </div>
        <div key={s.key} className="services-detail" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: 48, animation: 'fadeIn .5s ease' }}>
          <div>
            <div style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(22px, 2.8vw, 34px)', lineHeight: 1.2, color: 'var(--fg)', margin: '0 0 20px', maxWidth: 620 }}>{s.lede}</div>
            <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--muted)', maxWidth: 540, margin: '0 0 28px' }}>{s.body}</p>
            <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 12 }}>Incluye</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
              {s.includes.map((it, i) => (
                <li key={it} style={{ padding: '11px 0', borderTop: '1px solid var(--line)', borderBottom: i === s.includes.length - 1 ? '1px solid var(--line)' : 'none', fontSize: 13.5, display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ fontFamily: 'monospace', fontSize: 11, color: 'var(--accent)' }}>/{String(i + 1).padStart(2, '0')}</span>
                  {it}
                </li>
              ))}
            </ul>
            <a href="#contacto" className="link-arrow">Empezar con {s.title} <Icon.Arrow /></a>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ aspectRatio: '4/5', width: '100%', backgroundImage: `url(${s.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
            <div style={{ position: 'absolute', top: 20, right: 20, width: 56, height: 56, borderRadius: '50%', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
              {s.icon === 'Search' && <Icon.Search size={24}/>}
              {s.icon === 'Home' && <Icon.Home size={24}/>}
              {s.icon === 'Building' && <Icon.Building size={24}/>}
              {s.icon === 'Compass' && <Icon.Compass size={24}/>}
              {s.icon === 'Key' && <Icon.Key size={24}/>}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .services-head { grid-template-columns: 1fr !important; gap: 16px !important; }
          .services-tabs { grid-template-columns: 1fr 1fr !important; }
          .services-tabs button { border-right: 1px solid var(--line) !important; border-bottom: 1px solid var(--line); }
          .services-detail { grid-template-columns: 1fr !important; }
          .services-detail ul { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
