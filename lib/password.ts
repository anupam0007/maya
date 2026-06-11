import bcrypt from "bcryptjs";

/** Hashes a plaintext password for storage in an env var. */
export async function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, 12);
}

/** Compares a plaintext password against a bcrypt hash. */
export async function verifyPassword(plain: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}
