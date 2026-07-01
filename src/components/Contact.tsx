'use client'
import { useState } from 'react'

type FormState = { name: string; email: string; phone: string; tipo: string; presupuesto: string; msg: string }

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', tipo: 'compra', presupuesto: '500k-800k', msg: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const valid = form.name.length > 1 && /^\S+@\S+\.\S+$/.test(form.email) && form.msg.length > 10

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!valid) { setTouched({ name: true, email: true, msg: true }); return }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Error al enviar')
      setSent(true)
    } catch {
      setError('Algo falló. Por favor, escríbenos directamente a laura@lealya.es')
    } finally {
      setLoading(false)
    }
  }

  const Field = ({ label, id, type = 'text', multiline, value, onChange, hasError }: { label: string; id: string; type?: string; multiline?: boolean; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; hasError?: boolean }) => (
    <div>
      <label htmlFor={id} style={{ display: 'block', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: hasError ? '#c4513a' : 'var(--muted)', marginBottom: 10 }}>{label}</label>
      {multiline ? (
        <textarea id={id} value={value} onChange={onChange} rows={4} style={{ width: '100%', background: 'transparent', border: 0, borderBottom: `1px solid ${hasError ? '#c4513a' : 'var(--line)'}`, padding: '12px 0', fontFamily: 'inherit', fontSize: 16, color: 'var(--fg)', resize: 'vertical', outline: 'none', transition: 'border-color .2s' }} onFocus={e => (e.target.style.borderBottomColor = 'var(--accent)')} onBlur={e => (e.target.style.borderBottomColor = hasError ? '#c4513a' : 'var(--line)')}/>
      ) : (
        <input id={id} type={type} value={value} onChange={onChange} style={{ width: '100%', background: 'transparent', border: 0, borderBottom: `1px solid ${hasError ? '#c4513a' : 'var(--line)'}`, padding: '12px 0', fontFamily: 'inherit', fontSize: 16, color: 'var(--fg)', outline: 'none', transition: 'border-color .2s' }} onFocus={e => (e.target.style.borderBottomColor = 'var(--accent)')} onBlur={e => (e.target.style.borderBottomColor = hasError ? '#c4513a' : 'var(--line)')}/>
      )}
    </div>
  )

  return (
    <section id="contacto" className="section" style={{ background: 'var(--bg)', minHeight: 'calc(100vh - 69px)', borderTop: '1px solid var(--line)', paddingTop: 48, paddingBottom: 80 }}>
      <div className="wrap contact-wrap" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)', gap: 96, alignItems: 'start' }}>
        <div>
          <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 20 }}>06 · Contacto</div>
          <h2 className="headline" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', lineHeight: 1.06, margin: '0 0 28px' }}>
            ¿Empezamos por una <span style={{ fontStyle: 'italic', fontFamily: "'Fraunces', serif", fontWeight: 300, color: 'var(--accent)' }}>conversación</span>?
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--muted)', maxWidth: 460, margin: '0 0 40px' }}>
            30 minutos sin compromiso. Te escucho, analizo tu caso y te digo con honestidad si puedo ayudarte — o a quién derivarte si no.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              ['Email', 'laura@lealya.es'],
              ['Teléfono', '+34 681 804 103'],
              ['Zona', 'Madrid y alrededores · Atención en tu hogar'],
              ['Horario', 'Lunes a viernes · 10—19h'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: 24, paddingBottom: 16, borderBottom: '1px solid var(--line)' }}>
                <span className="eyebrow" style={{ color: 'var(--muted)' }}>{k}</span>
                <span style={{ fontFamily: "'Tenor Sans', serif", fontSize: 15, letterSpacing: '0.02em' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: 'var(--panel)', padding: 'clamp(32px, 4vw, 56px)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--accent)', color: 'var(--bg)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12l5 5L20 7"/></svg>
              </div>
              <h3 className="headline" style={{ fontSize: 28, margin: '0 0 12px' }}>Mensaje recibido.</h3>
              <p style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 360, margin: '0 auto', lineHeight: 1.6 }}>Te respondo personalmente en menos de 24 horas con los siguientes pasos.</p>
              <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', tipo: 'compra', presupuesto: '500k-800k', msg: '' }) }} className="ghost-button" style={{ marginTop: 32 }}>Enviar otro</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <Field label="Nombre" id="name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} hasError={touched.name && form.name.length < 2}/>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                <Field label="Email" id="email" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} hasError={touched.email && !/^\S+@\S+\.\S+$/.test(form.email)}/>
                <Field label="Teléfono (opcional)" id="phone" type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}/>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>Tipo de consulta</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                  {['compra', 'venta', 'inversión', 'otra'].map(t => (
                    <button key={t} type="button" onClick={() => setForm(f => ({ ...f, tipo: t }))} style={{ padding: '12px 4px', background: form.tipo === t ? 'var(--fg)' : 'transparent', color: form.tipo === t ? 'var(--bg)' : 'var(--fg)', border: `1px solid ${form.tipo === t ? 'var(--fg)' : 'var(--line)'}`, fontFamily: 'inherit', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all .2s' }}>{t}</button>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>Rango aproximado</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['< 500k', '500k-800k', '800k-1.2M', '1.2M-2M', '> 2M'].map(r => (
                    <button key={r} type="button" onClick={() => setForm(f => ({ ...f, presupuesto: r }))} style={{ padding: '10px 16px', background: form.presupuesto === r ? 'var(--accent)' : 'transparent', color: form.presupuesto === r ? 'var(--bg)' : 'var(--fg)', border: `1px solid ${form.presupuesto === r ? 'var(--accent)' : 'var(--line)'}`, fontFamily: 'inherit', fontSize: 12, cursor: 'pointer', transition: 'all .2s' }}>{r}</button>
                  ))}
                </div>
              </div>
              <Field label="Cuéntame tu caso" id="msg" multiline value={form.msg} onChange={e => setForm(f => ({ ...f, msg: e.target.value }))} hasError={touched.msg && form.msg.length < 10}/>
              {error && <p style={{ fontSize: 13, color: '#c4513a', margin: 0 }}>{error}</p>}
              <button type="submit" className="bronze-button" style={{ marginTop: 12, alignSelf: 'flex-start' }} disabled={loading}>
                {loading ? 'Enviando...' : 'Solicitar conversación →'}
              </button>
              <p style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>Al enviar aceptas nuestra política de privacidad. Nunca compartiremos tus datos.</p>
            </form>
          )}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .contact-wrap { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  )
}
