// Conteúdo do protótipo, tirado do site atual (studiopier88.com).
// Quando os textos e fotos definitivos chegarem, basta atualizar este arquivo.
// Itens marcados com "A DEFINIR" ainda dependem de informação do cliente.

const UP = "https://studiopier88.com/Uploads";

export const contato = {
  whatsapp: "5511998608886",
  whatsappLabel: "(11) 99860-8886",
  telefones: ["(11) 3647-4600", "(11) 3831-1799"],
  email: "contato@studiopier88.com",
  endereco: "Rua Hassib Mofarrej, 1101 B",
  bairro: "Vila Leopoldina · São Paulo · SP",
  cep: "05312-000",
  instagram: "https://www.instagram.com/studiopier88/",
  facebook: "https://www.facebook.com/studiopier88",
};

export const formularioContato = {
  origens: ["Instagram", "Google", "Indicação", "Já sou cliente", "Outro"] as const,
  origemOutro: "Outro",
  origemOutroLabel: "Por onde nos achou?",
  origemOutroPlaceholder: "Conte como nos encontrou",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/eventos", label: "Eventos" },
  { href: "/studio", label: "Studio" },
  { href: "/equipamentos", label: "Equipamentos" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/contato", label: "Contato" },
];

// Capas dos menus: só o estúdio vazio, sem marca nem evento.
export const capas = {
  home: [
    "/images/capas/mezanino.jpg",
    "/images/capas/producao.jpg",
    "/images/capas/ciclorama-largo.jpg",
    "/images/capas/camarim-entrada.jpg",
  ],
  eventos: "/images/capas/estudio-vazio.jpg",
  studio: "/images/capas/ciclorama.jpg",
  equipamentos: "/images/capas/iluminacao.jpg",
  quemSomos: "/images/capas/camarim.jpg",
};

export const heroImages = capas.home;

export const estudios = [
  { id: "estudio-01", nome: "Estúdio 01", img: `${UP}/Min/202341412921649.jpg` },
  { id: "estudio-02", nome: "Estúdio 02", img: `${UP}/Min/20234141217785.jpg` },
  { id: "estudio-03", nome: "Estúdio 03", img: `${UP}/Min/202341412236276.jpg` },
  { id: "estudio-04", nome: "Estúdio 04", img: `${UP}/Min/2023414122741550.jpg` },
  { id: "estudio-05", nome: "Estúdio 05", img: `${UP}/Min/202341412353330.jpg` },
  { id: "estudio-06", nome: "Estúdio 06", img: `${UP}/Min/2023414123954317.jpg` },
].map((e) => ({
  ...e,
  metragem: "A DEFINIR",
  descricao:
    "Espaço amplo com luz natural, pensado para fotografia e filmagem de moda, publicidade e conteúdo.",
  destaques: ["Luz natural", "Pé-direito alto", "A DEFINIR"],
}));

export const eventos = [
  { id: "motorola", nome: "Motorola", sub: "Lançamento do Moto G", img: "/images/eventos/motorola.jpg" },
  { id: "colgate", nome: "Colgate", sub: "Lançamento", img: "/images/eventos/colgate.jpg" },
  { id: "amazon", nome: "Amazon", sub: "Black Friday", img: "/images/eventos/amazon.jpg" },
  { id: "loreal", nome: "L'Oréal Paris", sub: "Ativação", img: "/images/eventos/loreal.jpg" },
  { id: "lacta", nome: "Lacta", sub: "Lacta Intense", img: "/images/eventos/lacta.jpg" },
  { id: "nivea", nome: "Nivea", sub: "Ativação", img: "/images/eventos/nivea.jpg" },
  { id: "volvo", nome: "Volvo", sub: "Exposição", img: "/images/eventos/volvo.jpg" },
  { id: "ibm", nome: "IBM", sub: "Watson Developer Summit", img: "/images/eventos/ibm.jpg" },
  { id: "atento", nome: "Atento", sub: "Atento + Digital", img: "/images/eventos/atento.jpg" },
  { id: "nudestix", nome: "Nudestix", sub: "Evento", img: "/images/eventos/nudestix.jpg" },
];

export const equipamentos = [
  { id: "iluminacao", nome: "Iluminação", itens: ["A DEFINIR", "A DEFINIR", "A DEFINIR"] },
  { id: "fundos", nome: "Fundos e cenografia", itens: ["A DEFINIR", "A DEFINIR"] },
  { id: "grip", nome: "Tripés e grip", itens: ["A DEFINIR", "A DEFINIR"] },
  { id: "audio-video", nome: "Áudio e vídeo", itens: ["A DEFINIR", "A DEFINIR"] },
];
export const equipamentosImg = capas.equipamentos;

export const clientes = ["Google", "YouTube", "Motorola", "IBM", "LG", "Volvo", "Jequiti", "Atento", "Iódice"];
