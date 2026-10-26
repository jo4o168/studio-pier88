/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import BrandMarquee from "@/components/BrandMarquee";
import Reveal from "@/components/Reveal";
import { estudios, eventos, heroImages } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex h-[100dvh] min-h-[640px] items-end overflow-hidden">
        <HeroSlideshow images={heroImages} />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 md:px-10 md:pb-28">
          <Reveal>
            <p className="mb-6 text-[12px] tracking-[0.35em] uppercase text-brass">
              Vila Leopoldina · São Paulo
            </p>
            <h1 className="font-display text-[15vw] leading-[0.88] md:text-[9rem] lg:text-[11rem]">
              Espaço para
              <br />
              <em className="text-paper/85">criar sem limite.</em>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <p className="max-w-md text-base leading-relaxed text-paper/70">
                Estúdios para fotografia, filmagem e eventos, inspirados nos grandes estúdios de Nova York.
              </p>
              <Link
                href="/contato"
                className="inline-flex items-center gap-4 self-start rounded-full border border-paper/40 px-8 py-4 text-[12px] tracking-[0.25em] uppercase transition-colors hover:border-paper hover:bg-paper hover:text-ink"
              >
                Faça sua reserva <span>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <BrandMarquee />

      {/* MANIFESTO */}
      <section className="mx-auto max-w-7xl px-5 pb-28 pt-16 md:px-10 md:pb-40 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="text-[12px] tracking-[0.35em] uppercase text-brass">O estúdio</p>
          </Reveal>
          <Reveal className="md:col-span-8" delay={100}>
            <p className="font-display text-4xl leading-[1.1] md:text-6xl">
              Nascemos no mundo da moda para resolver um problema simples: faltavam estúdios{" "}
              <em className="text-stone">à altura</em> de quem produz imagem de verdade.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {[
                ["06", "estúdios"],
                ["∞", "possibilidades"],
                ["NY", "como inspiração"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-5xl italic text-brass md:text-6xl">{n}</p>
                  <p className="mt-2 text-[11px] tracking-[0.25em] uppercase text-stone">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* DESTAQUE FOTO */}
      <section className="relative h-[80vh] min-h-[480px] overflow-hidden">
        <img src="/images/escada.jpg" alt="Estrutura do Studio Pier 88" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-5 md:px-10">
          <Reveal className="max-w-lg">
            <p className="mb-5 text-[12px] tracking-[0.35em] uppercase text-brass">Estrutura</p>
            <h2 className="font-display text-5xl leading-none md:text-7xl">
              Luz natural, <em>pé-direito</em> e espaço de sobra.
            </h2>
            <Link href="/studio" className="mt-8 inline-block border-b border-paper/50 pb-1 text-[12px] tracking-[0.25em] uppercase hover:border-paper">
              Conheça os estúdios
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ESTÚDIOS */}
      <section className="mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-36">
        <Reveal className="mb-14 flex items-end justify-between gap-6">
          <h2 className="font-display text-5xl md:text-7xl">
            Nossos <em>estúdios</em>
          </h2>
          <Link href="/studio" className="hidden text-[12px] tracking-[0.25em] uppercase text-stone hover:text-paper md:block">
            Ver todos →
          </Link>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {estudios.map((e, i) => (
            <Reveal key={e.id} delay={(i % 3) * 120}>
              <Link href={`/studio#${e.id}`} className="group block">
                <div className="aspect-[4/5] overflow-hidden bg-ink-2">
                  <img src={e.img} alt={e.nome} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <p className="font-display text-3xl italic">{e.nome}</p>
                  <span className="text-stone transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EVENTOS - lista com hover */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-36">
          <Reveal className="mb-14">
            <p className="mb-5 text-[12px] tracking-[0.35em] uppercase text-brass">Eventos realizados</p>
            <h2 className="font-display text-5xl md:text-7xl">
              Marcas que já <em>passaram</em> por aqui.
            </h2>
          </Reveal>
          <ul>
            {eventos.slice(0, 6).map((ev) => (
              <li key={ev.id}>
                <Link
                  href={`/eventos#${ev.id}`}
                  className="group flex items-center justify-between gap-6 border-t border-line py-6 transition-colors hover:text-brass"
                >
                  <span className="font-display text-3xl md:text-5xl">{ev.nome}</span>
                  <span className="hidden text-[12px] tracking-[0.25em] uppercase text-stone md:block">{ev.sub}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/eventos" className="mt-10 inline-block border-b border-paper/50 pb-1 text-[12px] tracking-[0.25em] uppercase hover:border-paper">
            Todos os eventos
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-32 pt-10 text-center md:px-10">
        <Reveal>
          <h2 className="font-display text-6xl leading-none md:text-9xl">
            Vamos <em>criar</em> juntos?
          </h2>
          <Link
            href="/contato"
            className="mt-12 inline-flex items-center gap-4 rounded-full bg-brass px-10 py-5 text-[12px] font-medium tracking-[0.25em] uppercase text-ink transition-colors hover:bg-paper"
          >
            Entrar em contato <span>→</span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
