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

interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
  order: number;
}

type RowStatus = "idle" | "saving" | "saved" | "error";

function ProjectRow({
  project,
  onSaved,
  onDeleted,
}: {
  project: Project;
  onSaved: (project: Project) => void;
  onDeleted: (id: string) => void;
}) {
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);
  const [url, setUrl] = useState(project.url);
  const [image, setImage] = useState(project.image);
  const [tags, setTags] = useState(project.tags.join(", "));
  const [order, setOrder] = useState(project.order);
  const [status, setStatus] = useState<RowStatus>("idle");

  async function handleSave() {
    setStatus("saving");
    try {
      const res = await fetch(`/api/content/projects/${project.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          url,
          image,
          tags: tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),
          order,
        }),
      });
      if (!res.ok) {
        setStatus("error");
        return;
      }
      const updated = (await res.json()) as Project;
      onSaved(updated);
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  }

  async function handleDelete() {
    if (!confirm(`Delete project "${project.title}"?`)) return;
    setStatus("saving");
    try {
      const res = await fetch(`/api/content/projects/${project.id}`, { method: "DELETE" });
      if (!res.ok) {
        setStatus("error");
        return;
      }
      onDeleted(project.id);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="space-y-3 border-b border-white/5 py-4 last:border-none">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className={fieldClass} />
        </div>
        <div>
          <label className={labelClass}>Project URL</label>
          <input value={url} onChange={(e) => setUrl(e.target.value)} className={fieldClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={`${fieldClass} min-h-24 resize-y`}
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Image URL</label>
          <input value={image} onChange={(e) => setImage(e.target.value)} className={fieldClass} />
        </div>
        <div>
          <label className={labelClass}>Tags (comma-separated)</label>
          <input value={tags} onChange={(e) => setTags(e.target.value)} className={fieldClass} />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-28">
          <label className={labelClass}>Order</label>
          <input
            type="number"
            value={order}
            onChange={(e) => setOrder(Number(e.target.value))}
            className={fieldClass}
          />
        </div>
        <button type="button" onClick={handleSave} disabled={status === "saving"} className={`${buttonClass} mt-7`}>
          <Save size={16} />
          Save
        </button>
        <button
          type="button"
          onClick={handleDelete}
          disabled={status === "saving"}
          className={`${dangerButtonClass} mt-7`}
        >
          <Trash2 size={16} />
          Delete
        </button>
        {status === "saved" && <span className="mt-7 text-sm text-cyan">Saved.</span>}
        {status === "error" && <span className="mt-7 text-sm text-red-400">Failed.</span>}
      </div>
    </div>
  );
}

const emptyDraft = { title: "", description: "", url: "", image: "", tags: "" };

export default function ProjectsManager({ initial }: { initial: Project[] }) {
  const [projects, setProjects] = useState<Project[]>(initial);
  const [draft, setDraft] = useState(emptyDraft);
  const [adding, setAdding] = useState(false);

  async function handleAdd() {
    if (!draft.title.trim() || !draft.description.trim() || !draft.url.trim() || !draft.image.trim()) return;
    setAdding(true);
    try {
      const res = await fetch("/api/content/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...draft,
          tags: draft.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),
          order: projects.length,
        }),
      });
      if (!res.ok) return;
      const created = (await res.json()) as Project;
      setProjects((prev) => [...prev, created]);
      setDraft(emptyDraft);
    } finally {
      setAdding(false);
    }
  }

  return (
    <div className={`${cardClass} space-y-2`}>
      <h2 className="font-heading text-lg font-bold">Projects</h2>
      <p className="text-sm text-white/50">
        Manage the work shown in the Projects section. Lower order numbers appear first.
      </p>

      <div>
        {projects.map((project) => (
          <ProjectRow
            key={project.id}
            project={project}
            onSaved={(updated) =>
              setProjects((prev) => prev.map((p) => (p.id === updated.id ? updated : p)))
            }
            onDeleted={(id) => setProjects((prev) => prev.filter((p) => p.id !== id))}
          />
        ))}
      </div>

      <div className="space-y-3 border-t border-white/10 pt-4">
        <h3 className="text-sm font-semibold text-white/80">Add new project</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Title</label>
            <input
              value={draft.title}
              onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))}
              className={fieldClass}
            />
          </div>
          <div>
            <label className={labelClass}>Project URL</label>
            <input
              value={draft.url}
              onChange={(e) => setDraft((d) => ({ ...d, url: e.target.value }))}
              className={fieldClass}
            />
          </div>
        </div>
        <div>
          <label className={labelClass}>Description</label>
          <textarea
            value={draft.description}
            onChange={(e) => setDraft((d) => ({ ...d, description: e.target.value }))}
            className={`${fieldClass} min-h-24 resize-y`}
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Image URL</label>
            <input
              value={draft.image}
              onChange={(e) => setDraft((d) => ({ ...d, image: e.target.value }))}
              className={fieldClass}
            />
          </div>
          <div>
            <label className={labelClass}>Tags (comma-separated)</label>
            <input
              value={draft.tags}
              onChange={(e) => setDraft((d) => ({ ...d, tags: e.target.value }))}
              className={fieldClass}
            />
          </div>
        </div>
        <button type="button" onClick={handleAdd} disabled={adding} className={ghostButtonClass}>
          <Plus size={16} />
          Add project
        </button>
      </div>
    </div>
  );
}
