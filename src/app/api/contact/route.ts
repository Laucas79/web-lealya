import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  console.log('Contact form submission:', body)
  // TODO: Prompt 2 — guardar en Supabase + enviar email con Resend
  return NextResponse.json({ ok: true })
}
