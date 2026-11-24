"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, type MouseEvent } from "react";

/** Foto em tela cheia. Fecha no fundo, no Esc ou em "Fechar". */
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
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
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
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black p-4 md:p-12"
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} em tela cheia`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 text-[12px] tracking-[0.22em] uppercase text-paper"
      >
        Fechar
      </button>
      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={go((index - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 px-3 py-8 text-2xl text-paper md:left-6"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Próxima foto"
            onClick={go((index + 1) % images.length)}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 px-3 py-8 text-2xl text-paper md:right-6"
          >
            →
          </button>
        </>
      )}
      <img
        src={images[index]}
        alt={`${alt}, foto ${index + 1} de ${images.length}`}
        className="max-h-full max-w-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <p className="absolute bottom-5 text-[11px] tracking-[0.25em] uppercase text-stone">
        {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </p>
    </div>
  );
}
