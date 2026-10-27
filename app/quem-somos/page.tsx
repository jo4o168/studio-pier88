import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import Reveal from "@/components/Reveal";
import { capas } from "@/lib/content";

export const metadata: Metadata = { title: "Quem Somos · Studio Pier 88" };

const diferenciais = [
  ["Inspiração nova-iorquina", "Estrutura pensada a partir dos grandes estúdios de Nova York."],
  ["Luz natural", "Um estúdio ecologicamente correto, que prioriza a luz do dia."],
  ["Moda, publicidade e HD", "Preparado para fotografia e filmagem de alta performance."],
  ["Localização", "Na Vila Leopoldina, com fácil acesso para quem vem de outras cidades."],
];

export default function QuemSomosPage() {
  return (
    <>
      <PageHero
        kicker="Quem somos"
        title="Nascemos"
        italic="no mundo da moda."
        image={capas.quemSomos}
      />
      <SubNav
        items={[
          { id: "historia", label: "História" },
          { id: "diferenciais", label: "Diferenciais" },
          { id: "proposito", label: "Missão e valores" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <section id="historia" className="anchor grid gap-10 border-b border-line py-24 md:grid-cols-12 md:py-32">
          <Reveal className="md:col-span-4">
            <h2 className="font-display text-5xl italic">História</h2>
          </Reveal>
          <Reveal className="space-y-6 text-lg leading-relaxed text-paper/75 md:col-span-8" delay={120}>
            <p>
              O Studio Pier 88 surgiu quando seus fundadores perceberam que muitos profissionais da moda estavam
              insatisfeitos com os estúdios disponíveis: era difícil conseguir horário e as condições dos espaços
              deixavam a desejar.
            </p>
            <p>
              A resposta foi investir em um estúdio moderno e bem estruturado. O nome carrega o 8, símbolo do
              infinito, como as possibilidades que cada espaço oferece para fotos e filmagens.
            </p>
          </Reveal>
        </section>

        <section id="diferenciais" className="anchor border-b border-line py-24 md:py-32">
          <Reveal>
            <h2 className="mb-14 font-display text-5xl italic">Diferenciais</h2>
          </Reveal>
          <div className="grid gap-px bg-line sm:grid-cols-2">
            {diferenciais.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 2) * 120} className="bg-ink p-8 md:p-12">
                <p className="font-display text-xl italic text-brass">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-display text-3xl md:text-4xl">{t}</h3>
                <p className="mt-4 leading-relaxed text-paper/70">{d}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="proposito" className="anchor grid gap-10 py-24 md:grid-cols-3 md:py-32">
          {[
            ["Missão", "Oferecer atendimento de excelência em locação de estúdio para trabalhos de alta performance."],
            ["Visão", "Ser a primeira opção do cliente na hora de locar um estúdio."],
            ["Valores", "Pontualidade, organização, respeito, honestidade e ética."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 120}>
              <p className="text-[12px] tracking-[0.35em] uppercase text-brass">{t}</p>
              <p className="mt-5 font-display text-3xl leading-snug">{d}</p>
            </Reveal>
          ))}
        </section>
      </div>
    </>
  );
}
