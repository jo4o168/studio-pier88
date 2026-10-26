"use client";

import { useState } from "react";
import { contato, formularioContato } from "@/lib/content";

type Dados = {
  nome: string;
  email: string;
  telefone: string;
  origem: string;
  origemOutro: string;
  mensagem: string;
};

function origemWhatsApp(d: Dados) {
  if (d.origem === formularioContato.origemOutro && d.origemOutro.trim()) {
    return d.origemOutro.trim();
  }
  return d.origem;
}

function montarMensagem(d: Dados) {
  return [
    "Olá! Vim pelo site do Studio Pier 88.",
    "",
    `*Nome:* ${d.nome}`,
    `*E-mail:* ${d.email}`,
    d.telefone && `*Telefone:* ${d.telefone}`,
    `*Como nos conheceu:* ${origemWhatsApp(d)}`,
    d.mensagem && `*Mensagem:* ${d.mensagem}`,
  ]
    .filter(Boolean)
    .join("\n");
}

/**
 * Formulário de contato.
 * Protótipo: ao enviar, abre o WhatsApp com a mensagem já preenchida.
 * Próximo passo: rota /api/contato enviando também por e-mail (ex.: Resend) — ver README.
 */
export default function ContactForm() {
  const [d, setD] = useState<Dados>({
    nome: "",
    email: "",
    telefone: "",
    origem: formularioContato.origens[0],
    origemOutro: "",
    mensagem: "",
  });
  const [enviado, setEnviado] = useState(false);
  const outroSelecionado = d.origem === formularioContato.origemOutro;

  const set = (k: keyof Dados) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setD((s) => ({ ...s, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(montarMensagem(d))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setEnviado(true);
  };

  const field =
    "w-full border-0 border-b border-line bg-transparent py-3 text-paper placeholder:text-stone/70 focus:border-brass focus:outline-none focus:ring-0 transition-colors";
  const label = "block text-[11px] tracking-[0.3em] uppercase text-stone";

  return (
    <form onSubmit={onSubmit} className="grid gap-8 md:grid-cols-2">
      <div>
        <label className={label} htmlFor="nome">Nome</label>
        <input id="nome" required value={d.nome} onChange={set("nome")} className={field} placeholder="Seu nome" />
      </div>
      <div>
        <label className={label} htmlFor="email">E-mail</label>
        <input id="email" type="email" required value={d.email} onChange={set("email")} className={field} placeholder="voce@email.com" />
      </div>
      <div>
        <label className={label} htmlFor="telefone">Telefone</label>
        <input id="telefone" value={d.telefone} onChange={set("telefone")} className={field} placeholder="(11) 90000-0000" />
      </div>
      <div>
        <label className={label} htmlFor="origem">Como nos conheceu?</label>
        <select id="origem" value={d.origem} onChange={set("origem")} className={`${field} [&>option]:bg-ink`}>
          {formularioContato.origens.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      {outroSelecionado && (
        <div className="md:col-span-2">
          <label className={label} htmlFor="origemOutro">{formularioContato.origemOutroLabel}</label>
          <input
            id="origemOutro"
            required
            value={d.origemOutro}
            onChange={set("origemOutro")}
            className={field}
            placeholder={formularioContato.origemOutroPlaceholder}
          />
        </div>
      )}
      <div className="md:col-span-2">
        <label className={label} htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" rows={4} value={d.mensagem} onChange={set("mensagem")} className={`${field} resize-none`} placeholder="Conte sobre a sua produção: data, número de pessoas, tipo de trabalho…" />
      </div>
      <div className="md:col-span-2 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-stone">
          {enviado ? "Abrimos o WhatsApp com a sua mensagem. É só tocar em enviar." : "Ao enviar, você será direcionado ao nosso WhatsApp."}
        </p>
        <button type="submit" className="group inline-flex items-center gap-4 self-start rounded-full bg-brass px-8 py-4 text-[12px] font-medium tracking-[0.25em] uppercase text-ink transition-colors hover:bg-paper">
          Enviar
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </form>
  );
}
