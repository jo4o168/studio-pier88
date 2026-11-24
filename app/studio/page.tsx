import type { Metadata } from "next";
import SubNav from "@/components/SubNav";
import StudioGrid, { type StudioCard } from "@/components/StudioGrid";
import { equipamentosImg, estrutura, estudios, manifesto } from "@/lib/content";

export const metadata: Metadata = { title: "Studios · Studio Pier 88" };

export default function StudioPage() {
  const vitrine = estudios.slice(0, 5);
  const cards: StudioCard[] = [
    ...vitrine.map((e, i) => ({
      id: e.id,
      nome: e.nome,
      numero: String(i + 1).padStart(2, "0"),
      imagens: e.imagens,
      descricao: e.descricao,
      metragem: e.metragem,
      destaques: e.destaques,
    })),
    {
      id: estrutura.id,
      nome: estrutura.nome,
      numero: "06",
      imagens: estrutura.imagens,
      descricao: estrutura.descricao,
      itens: estrutura.itens,
    },
  ];

  return (
    <>
      <section className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-20">
        <h1 className="font-serif text-3xl font-semibold md:text-4xl">Lançamentos, desfiles e exposições.</h1>
        <p className="mt-4 max-w-xl font-serif text-lg leading-relaxed">{manifesto}</p>
      </section>

      <SubNav
        items={[
          ...vitrine.map((e) => ({ id: e.id, label: e.nome })),
          { id: estrutura.id, label: estrutura.nome },
        ]}
      />

      <div className="pt-6">
        <StudioGrid items={cards} equipamentosImagem={equipamentosImg} />
      </div>
    </>
  );
}
