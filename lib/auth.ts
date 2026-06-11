import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

export const ADMIN_COOKIE = "maya_admin_token";
const SESSION_DURATION = "8h";

function getSecretKey() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET environment variable is not set");
  }
  return new TextEncoder().encode(secret);
}

/** Issues a signed session token for the admin user. */
export async function createSessionToken(email: string): Promise<string> {
  return new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(SESSION_DURATION)
    .sign(getSecretKey());
}

/** Verifies a session token, returning its payload or null if invalid/expired. */
export async function verifySessionToken(token: string): Promise<{ email: string } | null> {
  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    if (typeof payload.email !== "string") return null;
    return { email: payload.email };
  } catch {
    return null;
  }
}

/** Reads and verifies the admin session cookie for use in API route handlers. */
export async function getAdminSession(): Promise<{ email: string } | null> {
  const token = cookies().get(ADMIN_COOKIE)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}
