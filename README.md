# Studio Pier 88 · Protótipo do novo site

Protótipo inicial do novo site do Studio Pier 88 (studiopier88.com), feito em Next.js + Tailwind CSS.

## Rodar no seu computador

Precisa do Node.js 20 ou mais novo.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Mostrar para a cliente

O jeito mais rápido é publicar na Vercel (grátis):

1. Suba a pasta para um repositório no GitHub.
2. Em vercel.com, clique em "Add New → Project" e importe o repositório.
3. A Vercel gera um link (ex.: `studio-pier88.vercel.app`) para mandar para ela.

Cada `git push` atualiza o link automaticamente.

## Estrutura

```
app/
  page.tsx              Home (slideshow, manifesto, estúdios, eventos, clientes, CTA)
  eventos/page.tsx      Eventos, com subabas por evento
  studio/page.tsx       Estúdios 01 a 06 + Estrutura, com subabas
  equipamentos/page.tsx Categorias de equipamentos, com subabas
  quem-somos/page.tsx   História, diferenciais, missão e clientes, com subabas
  contato/page.tsx      Formulário + mapa
components/
  Header.tsx            Menu principal (transparente na home, sólido ao rolar)
  SubNav.tsx            Submenu de subabas fixo, com scrollspy e rolagem suave
  ContactForm.tsx       Formulário que abre o WhatsApp com os dados preenchidos
  HeroSlideshow.tsx     Slideshow em tela cheia da home
  Reveal.tsx            Animação de entrada ao rolar
  PageHero.tsx          Topo padrão das páginas internas
lib/content.ts          TODO o conteúdo (textos, eventos, estúdios, contatos)
```

## Como funcionam as subabas

Cada página passa uma lista de `{ id, label }` para o `<SubNav>`, e cada seção da página tem o mesmo `id` e a classe `anchor`. O componente cuida da rolagem suave, do destaque da subaba ativa e da rolagem horizontal no celular.

## Pendências antes da versão final

- [ ] Trocar as fotos (hoje vêm do site antigo, em baixa resolução) pelos originais em `public/images/`.
- [ ] Preencher tudo que está como "A DEFINIR" em `lib/content.ts` (metragens, equipamentos, textos dos eventos).
- [ ] Logo oficial em SVG no lugar do texto no `Header` e no `Footer`.
- [ ] Envio por e-mail do formulário: criar `app/api/contato/route.ts` usando Resend (ou similar) e chamar a rota no `onSubmit` do `ContactForm`, mantendo o redirecionamento para o WhatsApp.
- [ ] Logos dos clientes no lugar dos nomes em Quem Somos.
- [ ] Redirecionamentos 301 das URLs antigas (`/Eventos.aspx`, `/Estudios.aspx` etc.) em `next.config.ts`.
- [ ] Trocar `<img>` por `next/image` quando as fotos definitivas estiverem em `public/`.
- [ ] Revisar o layout com o designer, se ele for contratado.
