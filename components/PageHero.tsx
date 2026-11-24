import Reveal from "./Reveal";

/** Abertura das páginas que o material não desenhou: mesmo fundo claro e a mesma serif. */
export default function PageHero({
  title,
  italic,
  text,
}: {
  kicker?: string;
  title: string;
  italic?: string;
  text?: string;
  image?: string;
}) {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-14 pb-4 md:px-10 md:pt-20">
      <Reveal>
        <h1 className="font-serif text-5xl leading-none font-medium md:text-7xl">
          {title} {italic && <em>{italic}</em>}
        </h1>
        {text && <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed">{text}</p>}
      </Reveal>
    </section>
  );
}
