import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import BrandMarquee from "@/components/BrandMarquee";
import CyclingPhotos from "@/components/CyclingPhotos";
import { heroImages, manifesto } from "@/lib/content";

const btn = "inline-block bg-black px-7 py-3 font-sans text-[12px] font-medium tracking-[0.16em] uppercase text-white hover:bg-neutral-800";

export default function Home() {
  return (
    <>
      <section className="relative flex h-[100dvh] min-h-[560px] items-end justify-center overflow-hidden">
        <HeroSlideshow images={heroImages} />
        <div className="pointer-events-none relative z-10 w-full px-5 pb-16 text-center text-white md:pb-20">
          <h1 className="font-serif text-[12vw] leading-none font-medium tracking-[0.02em] md:text-8xl lg:text-9xl">
            STUDIO PIER 88
          </h1>
          <p className="mt-2 font-serif text-2xl italic md:text-4xl">Espaço para criar sem limites</p>
        </div>
      </section>

      {/* Espaço ocupado pela faixa amarela, que no hero fica logo abaixo da imagem. */}
      <div className="h-[var(--header-h)]" aria-hidden />

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
        <h2 className="font-serif text-3xl font-semibold md:text-4xl">Espaço para criar sem limites</h2>
        <p className="mt-4 max-w-xl font-serif text-lg leading-relaxed">{manifesto}</p>
      </section>

      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-[#8d8d8d]">
        <CyclingPhotos images={heroImages} alt="Espaços do Studio Pier 88" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 w-full px-6 pb-12 md:px-16 md:pb-16">
          <p className="max-w-4xl font-serif text-4xl leading-none text-white md:text-7xl">
            Luz natural, pé-direito e espaço de sobra.
          </p>
          <Link href="/studio" className={`${btn} mt-8`}>
            Conheça os estúdios
          </Link>
        </div>
      </section>

      <div className="h-8 bg-[#e6e6e6]" aria-hidden />

      <section className="relative min-h-[68vh] overflow-hidden bg-[#8d8d8d]">
        <CyclingPhotos images={[...heroImages].reverse()} alt="Ativações no Studio Pier 88" interval={6500} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex min-h-[68vh] w-full flex-col justify-between gap-16 px-6 py-10 md:px-16 md:py-14">
          <p className="max-w-xl font-serif text-base leading-relaxed text-white md:text-lg">{manifesto}</p>
          <div>
            <p className="max-w-4xl font-serif text-4xl leading-none text-white md:text-7xl">
              Lançamentos, desfiles e exposições.
            </p>
            <Link href="/eventos" className={`${btn} mt-8`}>
              Ver os eventos
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16 md:py-28" aria-label="Marcas que já confiaram">
        <div className="mx-auto grid max-w-[1400px] items-end gap-10 md:grid-cols-2">
          <h2 className="flex flex-wrap items-end gap-x-4 gap-y-1 font-serif leading-none">
            <span className="text-6xl font-medium md:text-8xl">MARCAS</span>
            <span className="pb-1 text-3xl italic md:text-5xl">
              que já
              <br />
              confiaram
            </span>
          </h2>
          <p className="max-w-md font-serif text-lg leading-relaxed">{manifesto}</p>
        </div>
        <BrandMarquee />
      </section>

      <section className="px-6 pb-28 pt-6 text-center md:pb-36">
        <h2 className="font-serif text-5xl leading-none font-medium md:text-7xl lg:text-8xl">VAMOS CRIAR JUNTOS?</h2>
        <Link href="/contato" className={`${btn} mt-10`}>
          Entrar em contato
        </Link>
      </section>
    </>
  );
}
