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

export const heroImages = [
  `${UP}/20189517418714.jpg`,
  `${UP}/20189517611608.jpg`,
  `${UP}/201895165718238.jpg`,
  `${UP}/201895165736649.jpg`,
  `${UP}/201895165855213.jpg`,
];

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
  { id: "naty-edenburg", nome: "Exposição Naty Edenburg", sub: "How do I feel today", img: `${UP}/Min/2016122181445521.jpg` },
  { id: "motorola", nome: "Motorola", sub: "Evento corporativo", img: `${UP}/Min/2016122182645192.jpg` },
  { id: "iodice", nome: "Iódice", sub: "Desfile", img: `${UP}/Min/2016122183013856.jpg` },
  { id: "google", nome: "Google", sub: "Partner Weekend", img: `${UP}/Min/2016122184135715.jpg` },
  { id: "ibm", nome: "IBM", sub: "Evento corporativo", img: `${UP}/Min/2017623154818896.JPG` },
  { id: "lg", nome: "LG", sub: "Lançamento de TV", img: `${UP}/Min/201762316011402.jpg` },
  { id: "youtube", nome: "YouTube", sub: "Evento", img: `${UP}/Min/20178417223439.jpg` },
  { id: "volvo", nome: "Volvo", sub: "Evento", img: `${UP}/Min/201792116919514.JPG` },
  { id: "atento", nome: "Atento", sub: "Evento corporativo", img: `${UP}/Min/201882917053883.JPG` },
  { id: "jequiti", nome: "Jequiti", sub: "Evento", img: `${UP}/Min/2018829171818560.jpg` },
];

export const equipamentos = [
  { id: "iluminacao", nome: "Iluminação", itens: ["A DEFINIR", "A DEFINIR", "A DEFINIR"] },
  { id: "fundos", nome: "Fundos e cenografia", itens: ["A DEFINIR", "A DEFINIR"] },
  { id: "grip", nome: "Tripés e grip", itens: ["A DEFINIR", "A DEFINIR"] },
  { id: "audio-video", nome: "Áudio e vídeo", itens: ["A DEFINIR", "A DEFINIR"] },
];
export const equipamentosImg = `${UP}/Min/202341016178630.jpg`;

export const clientes = ["Google", "YouTube", "Motorola", "IBM", "LG", "Volvo", "Jequiti", "Atento", "Iódice"];
