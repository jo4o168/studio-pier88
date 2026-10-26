# Contexto do projeto para o agente (Cursor)

Site institucional do **Studio Pier 88**, estúdio fotográfico para locação na Vila Leopoldina, São Paulo. Atende fotografia e filmagem de moda e publicidade, além de eventos corporativos. O site atual (studiopier88.com, ASP.NET antigo) está sendo refeito do zero.

## Stack
- Next.js (App Router) + React + TypeScript
- Tailwind CSS v4 (tokens de cor e fonte em `app/globals.css`, bloco `@theme`)
- Sem bibliotecas extras de UI ou animação. Manter assim, a menos que haja um bom motivo.

## Identidade visual
- Fundo escuro (`ink`), texto claro (`paper`), detalhes em dourado (`brass`), cinza `stone` para textos secundários.
- Títulos em Instrument Serif, com itálico para dar ênfase. Textos em Manrope.
- Rótulos pequenos em caixa alta com espaçamento largo (`tracking-[0.25em] uppercase`).
- Fotos grandes, muito espaço em branco e animações suaves de entrada (`<Reveal>`).
- A referência de estilo é o site da St. Boop, mas a identidade é própria. Não copiar layout nem textos de lá.

## Regras do projeto
- Menu fixo: HOME | EVENTOS | STUDIO | EQUIPAMENTOS | QUEM SOMOS | CONTATO.
- Toda página interna tem um `<SubNav>` com subabas. Cada subaba aponta para uma `<section id="..." className="anchor">`.
- Todo o conteúdo editável fica em `lib/content.ts`. Não espalhar textos soltos pelos componentes.
- Formulário de contato: campos nome, e-mail, telefone, como nos conheceu e mensagem. Se a origem for “Outro”, pedir um texto livre de como nos encontrou. Sem campo de interesse (isso entra no WhatsApp). Envia por e-mail e redireciona para o WhatsApp (5511998608886) com os dados preenchidos.
- Não há reservas online nem newsletter no escopo.
- Tudo precisa funcionar bem no celular. Testar em 390px de largura.
- Textos do site em português do Brasil.
