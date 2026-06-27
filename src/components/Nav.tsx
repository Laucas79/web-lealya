'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Icon } from './Icons'

const links = [
  { href: '#filosofia', label: 'Filosofía', num: '01' },
  { href: '#laura', label: 'Laura Castellano', num: '02' },
  { href: '#servicios', label: 'Servicios', num: '03' },
  { href: '#proceso', label: 'Proceso', num: '04' },
  { href: '#testimonios', label: 'Testimonios', num: '05' },
  { href: '#contacto', label: 'Contacto', num: '06' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: scrolled ? '16px 32px' : '28px 32px',
        background: scrolled ? 'color-mix(in oklch, var(--bg) 85%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px) saturate(1.2)' : 'none',
        borderBottom: scrolled ? '1px solid color-mix(in oklch, var(--line) 50%, transparent)' : '1px solid transparent',
        transition: 'all .4s cubic-bezier(.2,.7,.2,1)',
      }}>
        <a href="#top" style={{
          color: 'var(--fg)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <Image
            src="/assets/logos/logo-lealya-bronze.png"
            alt="Lealya"
            width={120}
            height={22}
            priority
            className="h-5 w-auto"
            style={{ height: 20, width: 'auto' }}
          />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, letterSpacing: '0.3em', color: 'var(--muted)', textTransform: 'uppercase' }}>
            Asesora Inmobiliaria · Norte de Madrid
          </span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div className="desktop-only" style={{ display: 'flex', gap: 28 }}>
            {links.slice(0, 4).map(l => (
              <a key={l.href} href={l.href} style={{
                fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--fg)', textDecoration: 'none', opacity: .75, fontWeight: 400,
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '.75')}
              >{l.label}</a>
            ))}
          </div>
          <a href="#contacto" className="desktop-only" style={{
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--accent)', textDecoration: 'none', fontWeight: 600,
            borderBottom: '1px solid var(--accent)', paddingBottom: 2,
          }}>Hablemos</a>
          <button onClick={() => setOpen(true)} aria-label="Abrir menú" style={{
            background: 'transparent', border: 0, color: 'var(--fg)', cursor: 'pointer', padding: 8, display: 'flex', alignItems: 'center',
          }}>
            <Icon.Menu />
          </button>
        </div>
      </nav>

      {/* Overlay menu */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 200, background: 'var(--bg)',
        transform: open ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform .6s cubic-bezier(.7,0,.3,1)',
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '28px 32px' }}>
          <Image
            src="/assets/logos/logo-lealya-bronze.png"
            alt="Lealya"
            width={120}
            height={22}
            className="h-5 w-auto"
            style={{ height: 20, width: 'auto' }}
          />
          <button onClick={() => setOpen(false)} aria-label="Cerrar" style={{
            background: 'transparent', border: 0, color: 'var(--fg)', cursor: 'pointer', padding: 8, display: 'flex', alignItems: 'center',
          }}><Icon.Close /></button>
        </div>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 48, padding: '0 8vw' }} className="menu-grid">
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {links.map((l, i) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                style={{
                  display: 'flex', alignItems: 'baseline', gap: 20,
                  padding: '18px 0',
                  borderTop: i === 0 ? '1px solid var(--line)' : 'none',
                  borderBottom: '1px solid var(--line)',
                  textDecoration: 'none', color: 'var(--fg)',
                  fontFamily: "'Tenor Sans', serif",
                  fontSize: 'clamp(28px, 4vw, 44px)',
                  transition: 'color .25s, padding-left .25s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; (e.currentTarget as HTMLElement).style.paddingLeft = '16px'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg)'; (e.currentTarget as HTMLElement).style.paddingLeft = '0'; }}
              >
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: '0.2em', color: 'var(--muted)', width: 36 }}>{l.num}</span>
                {l.label}
              </a>
            ))}
          </nav>
          <aside className="menu-side" style={{ display: 'flex', flexDirection: 'column', gap: 32, color: 'var(--muted)' }}>
            <div>
              <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 10 }}>Contacto directo</div>
              <div style={{ fontFamily: "'Tenor Sans', serif", fontSize: 22, color: 'var(--fg)' }}>laura@lealya.es</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, marginTop: 6 }}>+34 681 804 103</div>
            </div>
            <div>
              <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 10 }}>Dónde</div>
              <div style={{ fontSize: 14, lineHeight: 1.7 }}>Madrid y alrededores<br/>Atención en tu hogar<br/>Lunes a viernes · 10—19h</div>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .desktop-only { display: none !important; }
          .menu-grid { grid-template-columns: 1fr !important; align-items: start !important; padding-top: 40px !important; }
          .menu-side { margin-top: 40px; }
        }
      `}</style>
    </>
  )
}
