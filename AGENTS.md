# Contexto do projeto para o agente (Cursor)

Site institucional do **Studio Pier 88**, estúdio fotográfico para locação na Vila Leopoldina, São Paulo. Atende fotografia e filmagem de moda e publicidade, além de eventos corporativos. O site atual (studiopier88.com, ASP.NET antigo) está sendo refeito do zero.

## Stack
- Next.js (App Router) + React + TypeScript
- Tailwind CSS v4 (tokens de cor e fonte em `app/globals.css`, bloco `@theme`)
- Sem bibliotecas extras de UI ou animação. Manter assim, a menos que haja um bom motivo.

## Identidade visual
- Visual do material do designer: fundo cinza claro, faixa amarela, texto preto, botões pretos retangulares, rodapé cinza. Cores, fontes e fotos finais ainda vão ser enviadas pelo designer.
- Títulos e textos em EB Garamond. Flowers of Nineties entra quando os arquivos `.ttf` chegarem. Menu em Manrope.
- Rótulos pequenos em caixa alta.
- Fotos grandes, muito espaço em branco e animações suaves de entrada (`<Reveal>`).
- A referência de estilo é o site da St. Boop, mas a identidade é própria. Não copiar layout nem textos de lá.

## Regras do projeto
- Menu: HOME | QUEM SOMOS | EVENTOS | STUDIOS | CONTATO. Na home, a faixa amarela só aparece depois do hero. Equipamentos fica no fim da página de estúdios.
- Toda página interna tem um `<SubNav>` com subabas. Cada subaba aponta para uma `<section id="..." className="anchor">`.
- Todo o conteúdo editável fica em `lib/content.ts`. Não espalhar textos soltos pelos componentes.
- Formulário de contato: campos nome, e-mail, telefone, como nos conheceu e mensagem. Se a origem for “Outro”, pedir um texto livre de como nos encontrou. Sem campo de interesse (isso entra no WhatsApp). Envia por e-mail e redireciona para o WhatsApp (5511998608886) com os dados preenchidos.
- Não há reservas online nem newsletter no escopo.
- Tudo precisa funcionar bem no celular. Testar em 390px de largura.
- Textos do site em português do Brasil.
