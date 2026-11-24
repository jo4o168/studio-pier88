/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import SubNav from "@/components/SubNav";
import { eventos } from "@/lib/content";

export const metadata: Metadata = { title: "Eventos · Studio Pier 88" };

export default function EventosPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-20">
        <h1 className="font-serif text-3xl font-semibold md:text-4xl">Lançamentos, desfiles e exposições.</h1>
        <p className="mt-4 max-w-xl font-serif text-lg leading-relaxed">
          Nossos espaços já receberam eventos de algumas das maiores marcas do mundo. Conheça alguns deles.
        </p>
      </section>

      <SubNav
        items={eventos.map((e, i) => ({
          id: e.id,
          label: `${String(i + 1).padStart(2, "0")}. ${e.nome}`,
        }))}
      />

      <div className="mx-auto max-w-[1400px] px-6 pb-20 md:px-10">
        {eventos.map((ev, i) => {
          const fotos = ev.imagens.slice(0, 2);
          return (
            <section key={ev.id} id={ev.id} className="anchor py-14 md:py-20">
              <div className="grid items-end gap-6 md:grid-cols-12">
                <h2 className="font-serif text-5xl leading-none font-medium md:col-span-7 md:text-7xl lg:text-8xl">
                  <span className="mr-3 align-top text-3xl md:text-5xl">{String(i + 1).padStart(2, "0")}</span>
                  {ev.nome}
                </h2>
                <p className="font-serif text-lg leading-relaxed md:col-span-5">{ev.texto}</p>
              </div>
              {fotos.length > 0 && (
                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {fotos.map((src) => (
                    <img key={src} src={src} alt={ev.nome} className="aspect-[16/10] w-full object-cover" />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </>
  );
}
