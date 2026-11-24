"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [pastHero, setPastHero] = useState(false);
  const [open, setOpen] = useState(false);
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY >= window.innerHeight - 1);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => setOpen(false), [pathname]);

  // Na home a faixa fica logo abaixo do hero e gruda no topo quando a rolagem chega nela.
  const stuck = !onHome || pastHero || open;

  return (
    <header
      className={`z-50 bg-[#f8c800] text-black ${
        stuck ? "fixed inset-x-0 top-0" : "absolute inset-x-0 top-[100dvh]"
      }`}
    >
      <div className="mx-auto flex h-[var(--header-h)] max-w-[1400px] items-center gap-6 px-5 md:px-10">
        <Link href="/" className="inline-flex shrink-0 items-center" aria-label="Studio Pier 88">
          <img src="/brand/logo-header.png" alt="" className="h-8 w-auto md:h-10" />
        </Link>

        <nav className="ml-auto hidden md:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`font-sans text-[13px] uppercase tracking-[0.08em] ${
                      active ? "font-bold" : "font-medium hover:opacity-60"
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
          className="ml-auto font-sans text-[12px] font-semibold tracking-[0.14em] uppercase md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Abrir menu"
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-black/10 bg-[#f8c800] md:hidden">
          <ul className="flex flex-col gap-1 px-5 py-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-2 font-serif text-4xl">
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
