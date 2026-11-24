"use client";

import { usePathname } from "next/navigation";

/** Nas internas a faixa amarela é fixa, então o conteúdo começa abaixo dela. */
export default function Main({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <main className={pathname === "/" ? "" : "pt-[var(--header-h)]"}>{children}</main>;
}
