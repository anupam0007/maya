import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_COOKIE, createSessionToken } from "@/lib/auth";
import { verifyPassword } from "@/lib/password";

export async function POST(request: NextRequest) {
  const { email, password } = (await request.json()) as {
    email?: string;
    password?: string;
  };

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminEmail || !adminPasswordHash) {
    return NextResponse.json(
      { error: "Admin credentials are not configured." },
      { status: 500 }
    );
  }

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  const emailMatches = email.trim().toLowerCase() === adminEmail.trim().toLowerCase();
  const passwordMatches = await verifyPassword(password, adminPasswordHash);

  if (!emailMatches || !passwordMatches) {
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  }

  const token = await createSessionToken(adminEmail);
  const response = NextResponse.json({ ok: true });

  response.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  });

  return response;
}
