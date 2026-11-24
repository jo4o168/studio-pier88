"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Lightbox from "./Lightbox";

export type StudioCard = {
  id: string;
  nome: string;
  numero: string;
  imagens: string[];
  descricao: string;
  metragem?: string;
  destaques?: string[];
  itens?: string[];
};

function Card({
  item,
  align,
  onOpen,
  onMore,
}: {
  item: StudioCard;
  align: "left" | "right";
  onOpen: (index: number) => void;
  onMore: () => void;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (item.imagens.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % item.imagens.length), 4500);
    return () => clearInterval(t);
  }, [item.imagens.length]);

  return (
    <article id={item.id} className="anchor relative aspect-[16/10] overflow-hidden bg-[#8d8d8d]">
      <button type="button" onClick={() => onOpen(index)} className="absolute inset-0 z-0" aria-label={`Ampliar ${item.nome}`}>
        {item.imagens.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={i === index ? item.nome : ""}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </button>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/25" />
      <button
        type="button"
        onClick={onMore}
        className="absolute top-5 left-1/2 z-10 -translate-x-1/2 font-sans text-[12px] tracking-[0.2em] text-white uppercase"
      >
        Ver mais
      </button>
      <span
        className={`pointer-events-none absolute bottom-3 z-10 font-serif text-6xl text-white md:text-8xl ${
          align === "left" ? "left-4 md:left-6" : "right-4 md:right-6"
        }`}
      >
        {item.numero}
      </span>
    </article>
  );
}

export default function StudioGrid({
  items,
  equipamentosImagem,
}: {
  items: StudioCard[];
  equipamentosImagem: string;
}) {
  const [lightbox, setLightbox] = useState<{ id: string; index: number } | null>(null);
  const [more, setMore] = useState<string | null>(null);
  const close = useCallback(() => setLightbox(null), []);
  const choose = useCallback((i: number) => {
    setLightbox((atual) => (atual ? { ...atual, index: i } : atual));
  }, []);

  useEffect(() => {
    if (!more) return;
    document.getElementById(`${more}-galeria`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [more]);

  const aberto = items.find((item) => item.id === more);
  const fotoAberta = items.find((item) => item.id === lightbox?.id);

  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-16 md:px-8">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {items.map((item, i) => (
          <Card
            key={item.id}
            item={item}
            align={i % 2 === 0 ? "left" : "right"}
            onOpen={(index) => setLightbox({ id: item.id, index })}
            onMore={() => setMore(item.id)}
          />
        ))}

        <Link href="/equipamentos" className="group relative col-span-1 block min-h-[220px] overflow-hidden bg-[#8d8d8d] md:col-span-2 md:min-h-[280px]">
          <img src={equipamentosImagem} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/35 transition-colors group-hover:bg-black/45" />
          <span className="absolute top-5 right-6 font-sans text-[12px] tracking-[0.2em] text-white uppercase">
            Ver mais
          </span>
          <span className="absolute bottom-6 left-6 font-serif text-4xl text-white md:text-7xl">EQUIPAMENTOS</span>
        </Link>
      </div>

      {aberto && (
        <div id={`${aberto.id}-galeria`} className="anchor mt-8 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-serif text-4xl">{aberto.nome}</h2>
            <p className="mt-4 font-serif text-lg leading-relaxed">{aberto.descricao}</p>
            {aberto.metragem && (
              <p className="mt-6 font-sans text-[12px] tracking-[0.16em] uppercase">Metragem · {aberto.metragem}</p>
            )}
            {aberto.destaques && (
              <p className="mt-2 font-serif text-base">{aberto.destaques.join(" · ")}</p>
            )}
            {aberto.itens && (
              <ul className="mt-6 space-y-2 font-serif text-xl">
                {aberto.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
          <ul className="grid grid-cols-2 gap-3 md:col-span-8">
            {aberto.imagens.map((src, i) => (
              <li key={src}>
                <button type="button" onClick={() => setLightbox({ id: aberto.id, index: i })} className="block w-full" aria-label={`${aberto.nome}, miniatura ${i + 1}`}>
                  <img src={src} alt="" className="aspect-[4/3] w-full object-cover" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {lightbox && fotoAberta && (
        <Lightbox images={fotoAberta.imagens} index={lightbox.index} alt={fotoAberta.nome} onClose={close} onIndex={choose} />
      )}
    </div>
  );
}
