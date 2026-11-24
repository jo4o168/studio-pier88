"use client";

import { useEffect, useRef, useState } from "react";

type Item = { id: string; label: string };

/**
 * Subabas do material do designer: texto preto, sublinhado amarelo na ativa.
 */
export default function SubNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-140px 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const btn = barRef.current?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    btn?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, [active]);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="sticky top-[var(--header-h)] z-40 bg-[#e6e6e6]">
      <div
        ref={barRef}
        className="no-scrollbar mx-auto flex max-w-[1400px] items-center justify-start gap-8 overflow-x-auto px-5 py-4 md:justify-center md:px-10"
      >
        {items.map((item) => {
          const isActive = item.id === active;
          return (
            <button
              key={item.id}
              data-id={item.id}
              onClick={() => go(item.id)}
              className={`shrink-0 border-b-2 pb-1 font-serif text-sm uppercase tracking-[0.04em] md:text-base ${
                isActive ? "border-[#f8c800] font-semibold" : "border-transparent hover:opacity-60"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
