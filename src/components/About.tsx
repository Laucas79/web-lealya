import Image from 'next/image'

export default function About() {
  return (
    <section id="laura" className="section" style={{ background: 'var(--bg)' }}>
      <div className="wrap about-wrap" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: 80, alignItems: 'center' }}>
        <div className="about-portrait" style={{ position: 'relative' }}>
          <div style={{ aspectRatio: '4/5', width: '100%', position: 'relative' }}>
            {/* TODO: Reemplazar con foto real de Laura */}
            <Image src="/assets/laura-portrait.png" alt="Laura Castellano — Fundadora de Lealya" fill style={{ objectFit: 'cover', objectPosition: 'center top' }}/>
          </div>
          <div style={{ position: 'absolute', top: 24, left: 24, background: 'var(--bg)', padding: '8px 14px', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}>
            Fundadora · +20 años en el sector
          </div>
        </div>
        <div>
          <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 20 }}>02 · Sobre mí</div>
          <h2 className="headline" style={{ fontSize: 'clamp(36px, 4.8vw, 68px)', lineHeight: 1.05, margin: '0 0 32px' }}>
            Hola, soy <span style={{ fontStyle: 'italic', fontFamily: "'Fraunces', serif", fontWeight: 300 }}>Laura</span>.
          </h2>
          <p style={{ fontSize: 20, lineHeight: 1.65, color: 'var(--fg)', margin: '0 0 24px', maxWidth: 580 }}>
            Llevo toda mi vida profesional <strong>entre personas y decisiones importantes</strong>. Empecé en el mundo corporativo como secretaria de alta dirección, aprendiendo a ordenar el caos, anticipar y tratar cada asunto con la discreción que merece.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--muted)', margin: '0 0 24px', maxWidth: 580 }}>
            Hace más de <strong>20 años</strong> di el salto a la asesoría inmobiliaria y descubrí mi vocación: gestionar operaciones de principio a fin —búsqueda, negociación, notaría, post-venta— cuidando cada detalle como si la casa fuese mía.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--muted)', margin: '0 0 24px', maxWidth: 580 }}>
            Fundé Lealya para dar nombre a esa manera de trabajar: una asesora que trabaja <em>exclusivamente</em> para quien la contrata, con criterio técnico, calma y sin ningún conflicto de intereses.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--muted)', margin: '0 0 40px', maxWidth: 580 }}>
            Hoy trabajo principalmente en el corredor norte de Madrid — La Moraleja, Ciudalcampo, Ciudad Santo Domingo, Fuente del Fresno — donde llevo años construyendo relaciones de confianza con compradores, vendedores e inversores que valoran la discreción y el criterio por encima de cualquier otra cosa.
          </p>
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', marginBottom: 40 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 8, color: 'var(--muted)' }}>Trayectoria</div>
              <div style={{ fontSize: 14, lineHeight: 1.7 }}>Secretaria de alta dirección<br/>+20 años en asesoría inmobiliaria</div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 8, color: 'var(--muted)' }}>Especialidad</div>
              <div style={{ fontSize: 14, lineHeight: 1.7 }}>Gestión integral end-to-end<br/>Compra · Venta · Inversión</div>
            </div>
          </div>
          <div style={{ padding: '24px 0 0', borderTop: '1px solid var(--line)', fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontSize: 22, lineHeight: 1.45, color: 'var(--fg)', maxWidth: 560 }}>
            &ldquo;La mejor casa no siempre es la más bonita. Es la que sigue teniendo sentido cinco años después.&rdquo;
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontStyle: 'normal', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 16 }}>— Laura Castellano</div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .about-wrap { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
