// Server component — no 'use client'
// Sección: zonas de actuación

const ZONES = [
  {
    name: 'La Moraleja',
    place: 'Alcobendas',
    desc: 'La urbanización premium de referencia en Madrid. Chalets de alto standing, colegios internacionales y perfil de inversor nacional e internacional.',
    detail: 'Precio medio: desde 1.5M€',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Chalet de alto standing con jardín en La Moraleja',
  },
  {
    name: 'Ciudalcampo',
    place: 'San Sebastián de los Reyes',
    desc: 'Parcelas desde 2.500m² con vistas a la sierra. El Club RACE con golf, hípica y pádel dentro de la propia urbanización. Colegio SEK internacional.',
    detail: 'Precio medio: desde 800k€',
    image: 'https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Campo de golf y naturaleza en Ciudalcampo',
  },
  {
    name: 'Ciudad Santo Domingo',
    place: 'Algete',
    desc: 'Urbanización consolidada con ~1.000 chalets, seguridad 24h y zona comercial propia. Acceso directo desde la N-1 km 28. Comunidad de propietarios activa.',
    detail: 'Precio medio: desde 600k€',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Vivienda residencial con jardín en Ciudad Santo Domingo',
  },
  {
    name: 'Fuente del Fresno',
    place: 'Corredor A-1',
    desc: 'Zona más tranquila del corredor. Perfil familiar, más metros a menor precio que La Moraleja. Creciente demanda de primera residencia.',
    detail: 'Precio medio: desde 500k€',
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Encinar y naturaleza del norte de Madrid',
  },
]

export default function Zones() {
  return (
    <section id="zonas" className="section" style={{ background: 'var(--stone)' }}>
      <div className="wrap">
        <div className="zones-head" style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 64, marginBottom: 44, alignItems: 'start' }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 12 }}>Zona de actuación</div>
            <div style={{ fontFamily: "'Tenor Sans', serif", fontSize: 13, letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase' }}>Corredor A-1</div>
          </div>
          <div>
            <h2 className="headline" style={{ fontSize: 'clamp(26px, 3.4vw, 44px)', lineHeight: 1.1, margin: '0 0 20px', maxWidth: 800 }}>
              El norte de Madrid, <span style={{ fontStyle: 'italic', fontFamily: "'Fraunces', serif", fontWeight: 300, color: 'var(--accent)' }}>de cerca</span>.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--muted)', margin: 0, maxWidth: 620 }}>
              Trabajo principalmente en el corredor de la A-1 — las urbanizaciones privadas del norte de Madrid que conozco desde dentro.
            </p>
          </div>
        </div>

        <div className="zones-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {ZONES.map((z) => (
            <article key={z.name} style={{ background: 'var(--cream)', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <div style={{ aspectRatio: '16/9', width: '100%', backgroundImage: `url(${z.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} role="img" aria-label={z.imageAlt} />
              <div style={{ padding: '22px 22px 26px' }}>
                <div className="headline" style={{ fontSize: 20, marginBottom: 4 }}>{z.name}</div>
                <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 14 }}>{z.place}</div>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--muted)', margin: '0 0 18px' }}>{z.desc}</p>
                <div style={{ paddingTop: 16, borderTop: '1px solid var(--line)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg)', fontWeight: 600 }}>{z.detail}</div>
              </div>
            </article>
          ))}
        </div>

        <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--muted)', marginTop: 40, textAlign: 'center', fontStyle: 'italic', fontFamily: "'Fraunces', serif" }}>
          También trabajo con frecuencia en Valdebebas y Barajas, zonas colindantes al corredor A-1. ¿Tu zona no aparece aquí? Si la operación tiene sentido, lo valoramos.
        </p>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .zones-head { grid-template-columns: 1fr !important; gap: 24px !important; }
          .zones-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
