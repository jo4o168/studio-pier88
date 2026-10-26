import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import Reveal from "@/components/Reveal";
import { equipamentos, equipamentosImg } from "@/lib/content";

export const metadata: Metadata = { title: "Equipamentos · Studio Pier 88" };

export default function EquipamentosPage() {
  return (
    <>
      <PageHero
        kicker="Equipamentos"
        title="Tudo o que a produção"
        italic="precisa."
        text="Iluminação, fundos e acessórios disponíveis para locação junto com o estúdio."
        image={equipamentosImg}
      />
      <SubNav items={equipamentos.map((c) => ({ id: c.id, label: c.nome }))} />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {equipamentos.map((cat, i) => (
          <section key={cat.id} id={cat.id} className="anchor grid gap-10 border-b border-line py-20 md:grid-cols-12 md:py-28">
            <Reveal className="md:col-span-5">
              <p className="font-display text-xl italic text-brass">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 font-display text-5xl leading-none md:text-6xl">{cat.nome}</h2>
            </Reveal>
            <Reveal className="md:col-span-7" delay={120}>
              <ul className="divide-y divide-line border-y border-line">
                {cat.itens.map((it, j) => (
                  <li key={j} className="flex items-center justify-between py-5">
                    <span className="text-lg">{it}</span>
                    <span className="text-[11px] tracking-[0.25em] uppercase text-stone">Disponível</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>
        ))}
        <div className="py-20 text-center">
          <Link href="/contato" className="inline-flex items-center gap-4 rounded-full bg-brass px-10 py-5 text-[12px] font-medium tracking-[0.25em] uppercase text-ink transition-colors hover:bg-paper">
            Consultar disponibilidade <span>→</span>
          </Link>
        </div>
      </div>
    </>
  );
}
