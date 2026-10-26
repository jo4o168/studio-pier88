"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Na home o header começa transparente sobre o vídeo/slideshow
  const solid = scrolled || pathname !== "/" || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[var(--header-h)] transition-colors duration-500 ${
        solid ? "bg-ink/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 md:px-10">
        <Link href="/" className="flex items-center" aria-label="Studio Pier 88">
          <img src="/brand/logo.png" alt="" className="h-8 w-auto md:h-10" />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-[12px] font-medium tracking-[0.22em] uppercase transition-colors ${
                      active ? "text-brass" : "text-paper/70 hover:text-paper"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          className="lg:hidden text-[12px] tracking-[0.22em] uppercase text-paper"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Abrir menu"
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-line bg-ink h-[calc(100dvh-var(--header-h))]">
          <ul className="flex flex-col gap-2 px-5 pt-10">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-display text-5xl italic text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
