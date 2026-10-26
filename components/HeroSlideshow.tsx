"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

/** Slideshow em tela cheia com crossfade e leve zoom (efeito Ken Burns). */
export default function HeroSlideshow({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 6000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="absolute inset-0">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] ease-out ${
            i === index ? "opacity-100 scale-105 duration-[6500ms]" : "opacity-0 scale-100 duration-[1500ms]"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/20 to-ink" />
      <div className="absolute bottom-8 right-5 flex gap-2 md:right-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Foto ${i + 1}`}
            className={`h-px w-8 transition-colors ${i === index ? "bg-paper" : "bg-paper/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
