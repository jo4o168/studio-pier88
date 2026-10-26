/* eslint-disable @next/next/no-img-element */
import Reveal from "./Reveal";

export default function PageHero({
  kicker,
  title,
  italic,
  text,
  image,
}: {
  kicker: string;
  title: string;
  italic?: string;
  text?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[72vh] items-end overflow-hidden pt-[var(--header-h)]">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 md:px-10 md:pb-20">
        <Reveal>
          <p className="mb-5 text-[12px] tracking-[0.35em] uppercase text-brass">{kicker}</p>
          <h1 className="font-display text-6xl leading-[0.95] md:text-8xl lg:text-9xl">
            {title} {italic && <em className="text-paper/80">{italic}</em>}
          </h1>
          {text && <p className="mt-8 max-w-xl text-base leading-relaxed text-paper/70 md:text-lg">{text}</p>}
        </Reveal>
      </div>
    </section>
  );
}
