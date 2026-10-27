/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import Reveal from "@/components/Reveal";
import { capas, eventos } from "@/lib/content";

export const metadata: Metadata = { title: "Eventos · Studio Pier 88" };

export default function EventosPage() {
  return (
    <>
      <PageHero
        kicker="Eventos"
        title="Lançamentos, desfiles"
        italic="e exposições."
        text="Nossos espaços já receberam eventos de algumas das maiores marcas do mundo. Conheça alguns deles."
        image={capas.eventos}
      />
      <SubNav items={eventos.map((e) => ({ id: e.id, label: e.nome }))} />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {eventos.map((ev, i) => (
          <section key={ev.id} id={ev.id} className="anchor grid gap-10 border-b border-line py-20 md:grid-cols-12 md:py-28">
            <Reveal className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
              <div className="aspect-[4/3] overflow-hidden bg-ink-2">
                <img src={ev.img} alt={ev.nome} className="h-full w-full object-cover" />
              </div>
            </Reveal>
            <Reveal className="flex flex-col justify-end md:col-span-5" delay={120}>
              <p className="font-display text-xl italic text-brass">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 font-display text-5xl leading-none md:text-6xl">{ev.nome}</h2>
              <p className="mt-4 text-[12px] tracking-[0.25em] uppercase text-stone">{ev.sub}</p>
              <p className="mt-6 max-w-md leading-relaxed text-paper/70">
                Texto do evento A DEFINIR: data, formato, estúdio utilizado e número de convidados.
              </p>
            </Reveal>
          </section>
        ))}
      </div>
    </>
  );
}
