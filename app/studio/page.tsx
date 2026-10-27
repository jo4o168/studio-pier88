/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import Reveal from "@/components/Reveal";
import { capas, estudios } from "@/lib/content";

export const metadata: Metadata = { title: "Studio · Studio Pier 88" };

export default function StudioPage() {
  const items = [
    ...estudios.map((e) => ({ id: e.id, label: e.nome })),
    { id: "estrutura", label: "Estrutura" },
  ];

  return (
    <>
      <PageHero
        kicker="Studio"
        title="Seis estúdios,"
        italic="infinitas possibilidades."
        text="Espaços amplos e independentes, com luz natural e estrutura pensada para produções de moda, publicidade e conteúdo."
        image={capas.studio}
      />
      <SubNav items={items} />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {estudios.map((e, i) => (
          <section key={e.id} id={e.id} className="anchor grid gap-10 border-b border-line py-20 md:grid-cols-12 md:py-28">
            <Reveal className="md:col-span-7">
              <div className="aspect-[4/3] overflow-hidden bg-ink-2">
                <img src={e.img} alt={e.nome} className="h-full w-full object-cover" />
              </div>
            </Reveal>
            <Reveal className="flex flex-col justify-between gap-10 md:col-span-5" delay={120}>
              <div>
                <p className="font-display text-xl italic text-brass">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 font-display text-6xl leading-none md:text-7xl">{e.nome}</h2>
                <p className="mt-6 leading-relaxed text-paper/70">{e.descricao}</p>
              </div>
              <dl className="grid grid-cols-2 gap-6 border-t border-line pt-6 text-sm">
                <div>
                  <dt className="text-[11px] tracking-[0.25em] uppercase text-stone">Metragem</dt>
                  <dd className="mt-2">{e.metragem}</dd>
                </div>
                <div>
                  <dt className="text-[11px] tracking-[0.25em] uppercase text-stone">Destaques</dt>
                  <dd className="mt-2">{e.destaques.join(" · ")}</dd>
                </div>
              </dl>
              <Link href="/contato" className="self-start border-b border-paper/50 pb-1 text-[12px] tracking-[0.25em] uppercase hover:border-paper">
                Falar sobre este estúdio →
              </Link>
            </Reveal>
          </section>
        ))}

        <section id="estrutura" className="anchor py-20 md:py-28">
          <Reveal>
            <h2 className="font-display text-6xl leading-none md:text-7xl">
              <em>Estrutura</em> completa
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <img src="/images/escada.jpg" alt="Estrutura do estúdio" className="w-full object-cover" />
            </Reveal>
            <Reveal className="md:col-span-5" delay={120}>
              <ul className="divide-y divide-line border-y border-line">
                {["Camarins", "Copa e área de convivência", "Carga e descarga", "Estacionamento", "Wi-Fi", "A DEFINIR"].map((s) => (
                  <li key={s} className="py-4 font-display text-2xl">{s}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-stone">Lista de estrutura a confirmar com o estúdio.</p>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
