"use client";

import { useState, type FormEvent } from "react";
import { Save } from "lucide-react";
import { buttonClass, cardClass, fieldClass, labelClass } from "@/lib/admin-styles";

interface AboutFormProps {
  initial: { title: string; body: string };
}

export default function AboutForm({ initial }: AboutFormProps) {
  const [title, setTitle] = useState(initial.title);
  const [body, setBody] = useState(initial.body);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus("saving");

    try {
      const res = await fetch("/api/content/about", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body }),
      });

      setStatus(res.ok ? "saved" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`${cardClass} space-y-4`}>
      <h2 className="font-heading text-lg font-bold">About Section</h2>

      <div>
        <label htmlFor="about-title" className={labelClass}>
          Title
        </label>
        <input
          id="about-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={fieldClass}
          required
        />
      </div>

      <div>
        <label htmlFor="about-body" className={labelClass}>
          Body (use a blank line to separate paragraphs)
        </label>
        <textarea
          id="about-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className={`${fieldClass} min-h-40 resize-y`}
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
