/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { contato, nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <img src="/brand/logo.png" alt="Studio Pier 88" className="h-14 w-auto md:h-16" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone">
            Estúdios para fotografia, filmagem e eventos. Inspirado em Nova York, feito em São Paulo.
          </p>
        </div>
        <div className="text-sm leading-7 text-paper/70">
          <p className="mb-3 text-[11px] tracking-[0.3em] uppercase text-brass">Visite</p>
          <p>{contato.endereco}</p>
          <p>{contato.bairro}</p>
          <p>CEP {contato.cep}</p>
        </div>
        <div className="text-sm leading-7 text-paper/70">
          <p className="mb-3 text-[11px] tracking-[0.3em] uppercase text-brass">Fale com a gente</p>
          {contato.telefones.map((t) => (
            <p key={t}>{t}</p>
          ))}
          <a href={`https://wa.me/${contato.whatsapp}`} className="block hover:text-paper">
            WhatsApp {contato.whatsappLabel}
          </a>
          <a href={`mailto:${contato.email}`} className="block hover:text-paper">
            {contato.email}
          </a>
          <div className="mt-3 flex gap-5">
            <a href={contato.instagram} className="hover:text-paper">Instagram</a>
            <a href={contato.facebook} className="hover:text-paper">Facebook</a>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-[11px] tracking-[0.2em] uppercase text-stone md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {new Date().getFullYear()} Studio Pier 88</p>
          <ul className="flex flex-wrap gap-5">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-paper">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
