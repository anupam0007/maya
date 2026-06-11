"use client";

import { useState, type FormEvent } from "react";
import { Save } from "lucide-react";
import { buttonClass, cardClass, fieldClass, labelClass } from "@/lib/admin-styles";

interface HeroFormProps {
  initial: { headline: string; subline: string };
}

export default function HeroForm({ initial }: HeroFormProps) {
  const [headline, setHeadline] = useState(initial.headline);
  const [subline, setSubline] = useState(initial.subline);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus("saving");

    try {
      const res = await fetch("/api/content/hero", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ headline, subline }),
      });

      setStatus(res.ok ? "saved" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`${cardClass} space-y-4`}>
      <h2 className="font-heading text-lg font-bold">Hero Section</h2>

      <div>
        <label htmlFor="hero-headline" className={labelClass}>
          Headline
        </label>
        <input
          id="hero-headline"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          className={fieldClass}
          required
        />
      </div>

      <div>
        <label htmlFor="hero-subline" className={labelClass}>
          Subline
        </label>
        <textarea
          id="hero-subline"
          value={subline}
          onChange={(e) => setSubline(e.target.value)}
          className={`${fieldClass} min-h-28 resize-y`}
          required
        />
      </div>

      <div className="flex items-center gap-4">
        <button type="submit" disabled={status === "saving"} className={buttonClass}>
          <Save size={16} />
          {status === "saving" ? "Saving..." : "Save changes"}
        </button>
        {status === "saved" && <span className="text-sm text-cyan">Saved.</span>}
        {status === "error" && <span className="text-sm text-red-400">Failed to save.</span>}
      </div>
    </form>
  );
}
