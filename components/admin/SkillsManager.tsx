"use client";

import { useState } from "react";
import { Plus, Save, Trash2 } from "lucide-react";
import {
  buttonClass,
  cardClass,
  dangerButtonClass,
  fieldClass,
  ghostButtonClass,
  labelClass,
} from "@/lib/admin-styles";
import { SKILL_ICON_NAMES, getSkillIcon } from "@/lib/skill-icons";

interface Skill {
  id: string;
  label: string;
  icon: string;
  order: number;
}

type RowStatus = "idle" | "saving" | "saved" | "error";

function SkillRow({
  skill,
  onSaved,
  onDeleted,
}: {
  skill: Skill;
  onSaved: (skill: Skill) => void;
  onDeleted: (id: string) => void;
}) {
  const [label, setLabel] = useState(skill.label);
  const [icon, setIcon] = useState(skill.icon);
  const [order, setOrder] = useState(skill.order);
  const [status, setStatus] = useState<RowStatus>("idle");
  const Icon = getSkillIcon(icon);

  async function handleSave() {
    setStatus("saving");
    try {
      const res = await fetch(`/api/content/skills/${skill.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label, icon, order }),
      });
      if (!res.ok) {
        setStatus("error");
        return;
      }
      const updated = (await res.json()) as Skill;
      onSaved(updated);
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  }

  async function handleDelete() {
    if (!confirm(`Delete skill "${skill.label}"?`)) return;
    setStatus("saving");
    try {
      const res = await fetch(`/api/content/skills/${skill.id}`, { method: "DELETE" });
      if (!res.ok) {
        setStatus("error");
        return;
      }
      onDeleted(skill.id);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="grid items-end gap-3 border-b border-white/5 py-4 last:border-none sm:grid-cols-[1fr_1fr_5rem_auto_auto]">
      <div>
        <label className={labelClass}>Label</label>
        <input value={label} onChange={(e) => setLabel(e.target.value)} className={fieldClass} />
      </div>
      <div>
        <label className={labelClass}>Icon</label>
        <select value={icon} onChange={(e) => setIcon(e.target.value)} className={fieldClass}>
          {SKILL_ICON_NAMES.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass}>Order</label>
        <input
          type="number"
          value={order}
          onChange={(e) => setOrder(Number(e.target.value))}
          className={fieldClass}
        />
      </div>
      <div className="flex items-center gap-2">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan">
          <Icon size={20} />
        </span>
        <button type="button" onClick={handleSave} disabled={status === "saving"} className={buttonClass}>
          <Save size={16} />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button type="button" onClick={handleDelete} disabled={status === "saving"} className={dangerButtonClass}>
          <Trash2 size={16} />
        </button>
        {status === "saved" && <span className="text-xs text-cyan">Saved</span>}
        {status === "error" && <span className="text-xs text-red-400">Error</span>}
      </div>
    </div>
  );
}

export default function SkillsManager({ initial }: { initial: Skill[] }) {
  const [skills, setSkills] = useState<Skill[]>(initial);
  const [newLabel, setNewLabel] = useState("");
  const [newIcon, setNewIcon] = useState(SKILL_ICON_NAMES[0]);
  const [adding, setAdding] = useState(false);

  async function handleAdd() {
    if (!newLabel.trim()) return;
    setAdding(true);
    try {
      const res = await fetch("/api/content/skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label: newLabel, icon: newIcon, order: skills.length }),
      });
      if (!res.ok) return;
      const created = (await res.json()) as Skill;
      setSkills((prev) => [...prev, created]);
      setNewLabel("");
      setNewIcon(SKILL_ICON_NAMES[0]);
    } finally {
      setAdding(false);
    }
  }

  return (
    <div className={`${cardClass} space-y-2`}>
      <h2 className="font-heading text-lg font-bold">Skills &amp; Tech</h2>
      <p className="text-sm text-white/50">
        Manage the technologies shown in the Skills grid. Lower order numbers appear first.
      </p>

      <div>
        {skills.map((skill) => (
          <SkillRow
            key={skill.id}
            skill={skill}
            onSaved={(updated) =>
              setSkills((prev) => prev.map((s) => (s.id === updated.id ? updated : s)))
            }
            onDeleted={(id) => setSkills((prev) => prev.filter((s) => s.id !== id))}
          />
        ))}
      </div>

      <div className="grid items-end gap-3 border-t border-white/10 pt-4 sm:grid-cols-[1fr_1fr_auto]">
        <div>
          <label className={labelClass}>New skill label</label>
          <input
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            placeholder="e.g. Node.js"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass}>Icon</label>
          <select value={newIcon} onChange={(e) => setNewIcon(e.target.value)} className={fieldClass}>
            {SKILL_ICON_NAMES.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <button type="button" onClick={handleAdd} disabled={adding} className={ghostButtonClass}>
          <Plus size={16} />
          Add skill
        </button>
      </div>
    </div>
  );
}
