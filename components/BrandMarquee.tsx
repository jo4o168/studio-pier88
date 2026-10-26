import { clientes } from "@/lib/content";

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex items-center" aria-hidden={hidden || undefined}>
      {clientes.map((nome) => (
        <li key={nome} className="flex shrink-0 items-center">
          <span className="px-6 font-display text-4xl italic text-paper/80 md:px-10 md:text-6xl">
            {nome}
          </span>
          <span className="text-xl text-brass md:text-2xl" aria-hidden>
            ·
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Faixa infinita com as marcas — sem título, a lista fala por si. */
export default function BrandMarquee() {
  return (
    <section
      aria-label="Marcas que já passaram pelo estúdio"
      className="group border-b border-line py-10 md:py-14"
    >
      <div className="brand-marquee-fade overflow-hidden">
        <div className="brand-marquee-track flex w-max">
          <Track />
          <Track hidden />
        </div>
      </div>
    </section>
  );
}
