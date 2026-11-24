import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SubNav from "@/components/SubNav";
import Reveal from "@/components/Reveal";
import { contato } from "@/lib/content";

export const metadata: Metadata = { title: "Contato · Studio Pier 88" };

export default function ContatoPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-10 md:px-10 md:pt-20">
        <Reveal>
          <h1 className="font-serif text-6xl leading-none font-medium md:text-8xl">Vamos conversar.</h1>
        </Reveal>
      </section>
      <SubNav items={[{ id: "formulario", label: "Formulário" }]} />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <section id="formulario" className="anchor grid gap-16 py-20 md:grid-cols-12 md:py-28">
          <Reveal className="md:col-span-4">
            <p className="font-serif text-3xl leading-snug">
              Conte sobre a sua produção e retornamos com disponibilidade e valores.
            </p>
            <div className="mt-10 space-y-2 font-serif text-lg">
              {contato.telefones.map((t) => <p key={t}>{t}</p>)}
              <p>WhatsApp {contato.whatsappLabel}</p>
              <p>{contato.email}</p>
            </div>
          </Reveal>
          <Reveal className="md:col-span-8" delay={120}>
            <ContactForm />
          </Reveal>
        </section>
      </div>
    </>
  );
}
