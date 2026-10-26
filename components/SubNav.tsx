"use client";

import { useEffect, useRef, useState } from "react";

type Item = { id: string; label: string };

/**
 * Submenu de subabas fixo no topo da página.
 * - Clicar leva (com rolagem suave) até a seção com aquele id.
 * - A subaba da seção visível fica destacada (scrollspy).
 * - No celular as subabas rolam na horizontal e a ativa é trazida para a vista.
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
      // "Ativa" = seção que está na faixa superior da tela, logo abaixo do submenu
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
    <div className="sticky top-[var(--header-h)] z-40 h-[var(--subnav-h)] border-b border-line bg-ink/90 backdrop-blur-md">
      <div
        ref={barRef}
        className="no-scrollbar mx-auto flex h-full max-w-7xl items-center gap-7 overflow-x-auto px-5 md:px-10"
      >
        {items.map((item, i) => {
          const isActive = item.id === active;
          return (
            <button
              key={item.id}
              data-id={item.id}
              onClick={() => go(item.id)}
              className={`group relative flex shrink-0 items-baseline gap-2 py-4 text-[12px] tracking-[0.18em] uppercase transition-colors ${
                isActive ? "text-paper" : "text-stone hover:text-paper"
              }`}
            >
              <span className="font-display text-sm italic tracking-normal text-brass/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
              <span
                className={`absolute inset-x-0 -bottom-px h-px bg-brass transition-transform duration-500 origin-left ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
