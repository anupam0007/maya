"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import Logo from "@/components/Logo";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        setError(data.error ?? "Login failed.");
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-4">
      <div className="glass w-full max-w-sm rounded-2xl p-8">
        <div className="mb-6 flex justify-center">
          <Logo />
        </div>

        <h1 className="mb-1 text-center font-heading text-xl font-bold">Admin Login</h1>
        <p className="mb-6 text-center text-sm text-white/60">
          Sign in to edit your site content.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-cyan focus:outline-none"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-white/80">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-cyan focus:outline-none"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105 disabled:opacity-60"
          >
            <Lock size={16} />
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}
