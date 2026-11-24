"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { marcas } from "@/lib/content";

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex items-center gap-3 pr-3" aria-hidden={hidden || undefined}>
      {marcas.map((marca) => (
        <li key={hidden ? `${marca.id}-copia` : marca.id} className="shrink-0">
          <Link
            href={marca.href}
            tabIndex={hidden ? -1 : undefined}
            className="flex h-24 w-40 items-center justify-center bg-[#b5b5b5] px-3 text-center font-serif text-lg leading-tight text-black transition-colors hover:bg-[#a3a3a3] md:h-28 md:w-48 md:text-xl"
          >
            {marca.nome}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/**
 * Faixa de logos. Passa sem parar.
 * O mouse na lateral acelera. Cada marca leva ao case.
 * Os arquivos de logo ainda não chegaram: o nome ocupa o lugar do logo.
 */
export default function BrandMarquee() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const speed = useRef(0.6);
  const target = useRef(0.6);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let x = 0;
    let frame = 0;
    const tick = () => {
      speed.current += (target.current - speed.current) * 0.08;
      x -= speed.current;
      const half = track.scrollWidth / 2;
      if (half > 0 && x <= -half) x += half;
      track.style.transform = `translate3d(${x}px,0,0)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    const fromEdge = Math.min(ratio, 1 - ratio);
    if (fromEdge < 0.2) {
      const boost = 1 - fromEdge / 0.2;
      target.current = 0.6 + boost * 2.4;
    } else {
      target.current = 0.6;
    }
  };

  return (
    <div
      ref={wrapRef}
      className="mt-12"
      onMouseMove={onMove}
      onMouseLeave={() => {
        target.current = 0.6;
      }}
    >
      <div className="overflow-hidden">
        <div ref={trackRef} className="flex w-max will-change-transform">
          <Track />
          <Track hidden />
        </div>
      </div>
    </div>
  );
}
