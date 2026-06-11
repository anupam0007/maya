"use client";

import { useState, type ReactNode } from "react";

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

export default function AdminTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.id);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2 border-b border-white/10 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === tab.id
                ? "bg-gradient-brand text-white shadow-glow"
                : "border border-white/10 text-white/60 hover:border-white/30 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <div key={tab.id} className={tab.id === active ? "block" : "hidden"}>
          {tab.content}
        </div>
      ))}
    </div>
  );
}
