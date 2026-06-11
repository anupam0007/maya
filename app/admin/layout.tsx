import type { ReactNode } from "react";
import LogoutButton from "@/components/admin/LogoutButton";
import Logo from "@/components/Logo";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-ink">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-ink/80 backdrop-blur">
        <div className="section-container flex items-center justify-between py-4">
          <Logo />
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/60">Admin Dashboard</span>
            <LogoutButton />
          </div>
        </div>
      </header>
      <main className="section-container py-10">{children}</main>
    </div>
  );
}
