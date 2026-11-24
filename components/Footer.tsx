/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { contato, nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-[#8d8d8d] text-black">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-6 py-16 text-center">
        <img src="/brand/logo-header.png" alt="Studio Pier 88" className="h-16 w-auto md:h-20" />
        <p className="font-serif text-lg leading-relaxed">
          {contato.endereco}
          <br />
          {contato.bairro}
          <br />
          CEP {contato.cep}
        </p>
        <p className="font-serif text-lg">
          {contato.telefones.join(" · ")}
          <br />
          <a href={`https://wa.me/${contato.whatsapp}`} className="underline-offset-4 hover:underline">
            WhatsApp {contato.whatsappLabel}
          </a>
          <br />
          <a href={`mailto:${contato.email}`} className="underline-offset-4 hover:underline">
            {contato.email}
          </a>
        </p>
        <ul className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2 font-sans text-[12px] uppercase tracking-[0.14em]">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:opacity-60">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={contato.instagram} className="hover:opacity-60">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
