import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const res = await fetch("https://api-form.up.railway.app/form", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Error al enviar el formulario" }, { status: res.status });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
