"use client";

import { useState, type FormEvent } from "react";
import { Save } from "lucide-react";
import { buttonClass, cardClass, fieldClass, labelClass } from "@/lib/admin-styles";

interface ContactInfo {
  brand: string;
  name: string;
  role: string;
  location: string;
  email: string;
  phoneDisplay: string;
  phoneTel: string;
  whatsappNumber: string;
  tagline: string;
}

const FIELDS: { key: keyof ContactInfo; label: string; help?: string }[] = [
  { key: "brand", label: "Brand name" },
  { key: "name", label: "Full name" },
  { key: "role", label: "Role / title" },
  { key: "location", label: "Location" },
  { key: "email", label: "Email address" },
  { key: "phoneDisplay", label: "Phone (display)", help: "e.g. +91 72042 15343" },
  { key: "phoneTel", label: "Phone (tel: link)", help: "Digits only with country code, e.g. +917204215343" },
  { key: "whatsappNumber", label: "WhatsApp number", help: "Digits only with country code, e.g. 917204215343" },
  { key: "tagline", label: "Tagline" },
];

export default function ContactForm({ initial }: { initial: ContactInfo }) {
  const [values, setValues] = useState<ContactInfo>(initial);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  function update(key: keyof ContactInfo, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus("saving");

    try {
      const res = await fetch("/api/content/contact", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      setStatus(res.ok ? "saved" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`${cardClass} space-y-4`}>
      <h2 className="font-heading text-lg font-bold">Contact &amp; Site Details</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {FIELDS.map((field) => (
          <div key={field.key}>
            <label htmlFor={`contact-${field.key}`} className={labelClass}>
              {field.label}
            </label>
            <input
              id={`contact-${field.key}`}
              value={values[field.key]}
              onChange={(e) => update(field.key, e.target.value)}
              className={fieldClass}
              required
            />
            {field.help && <p className="mt-1 text-xs text-white/40">{field.help}</p>}
          </div>
        ))}
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
