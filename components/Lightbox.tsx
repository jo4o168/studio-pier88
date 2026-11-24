"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type MouseEvent } from "react";

const LEAVE_MS = 280;

/** Foto ampliada sobre a página. O fundo fica turvo e um clique fora fecha. */
export default function Lightbox({
  images,
  index,
  alt,
  onClose,
  onIndex,
}: {
  images: string[];
  index: number;
  alt: string;
  onClose: () => void;
  onIndex: (index: number) => void;
}) {
  const [shown, setShown] = useState(false);
  const closing = useRef(false);

  const requestClose = () => {
    if (closing.current) return;
    closing.current = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setShown(false);
    window.setTimeout(onClose, reduce ? 0 : LEAVE_MS);
  };

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(true);
      return;
    }
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") requestClose();
      if (e.key === "ArrowRight" && images.length > 1) onIndex((index + 1) % images.length);
      if (e.key === "ArrowLeft" && images.length > 1) onIndex((index - 1 + images.length) % images.length);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [images.length, index, onClose, onIndex]);

  const go = (next: number) => (e: MouseEvent) => {
    e.stopPropagation();
    onIndex(next);
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex cursor-zoom-out items-center justify-center p-5 md:p-14"
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} ampliada`}
      onClick={requestClose}
    >
      <div
        className={`absolute inset-0 bg-[#141414]/30 backdrop-blur-xl transition-opacity duration-300 ${
          shown ? "opacity-100" : "opacity-0"
        }`}
      />
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          requestClose();
        }}
        className={`absolute top-5 right-5 z-10 font-sans text-[12px] tracking-[0.22em] text-white uppercase drop-shadow transition-opacity duration-300 ${
          shown ? "opacity-100" : "opacity-0"
        }`}
      >
        Fechar
      </button>
      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={go((index - 1 + images.length) % images.length)}
            className="absolute top-1/2 left-2 z-10 -translate-y-1/2 px-3 py-8 text-2xl text-white drop-shadow md:left-6"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Próxima foto"
            onClick={go((index + 1) % images.length)}
            className="absolute top-1/2 right-2 z-10 -translate-y-1/2 px-3 py-8 text-2xl text-white drop-shadow md:right-6"
          >
            →
          </button>
        </>
      )}
      <img
        src={images[index]}
        alt={`${alt}, foto ${index + 1} de ${images.length}`}
        className={`relative z-10 max-h-[82vh] max-w-[92vw] cursor-default object-contain shadow-[0_24px_70px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out ${
          shown ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      />
      {images.length > 1 && (
        <p
          className={`absolute bottom-5 z-10 font-sans text-[11px] tracking-[0.25em] text-white uppercase drop-shadow transition-opacity duration-300 ${
            shown ? "opacity-100" : "opacity-0"
          }`}
        >
          {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </p>
      )}
    </div>
  );
}
