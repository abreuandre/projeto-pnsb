import { NewsItem } from "../types";

// Apenas os dados que NÃO mudam com o idioma ficam aqui
export const newsData: Pick<
  NewsItem,
  "id" | "slug" | "date" | "imageUrl" | "tags"
>[] = [
  {
    id: 1,
    slug: "circulo-biblico",
    date: "",
    imageUrl:
      "/circulo_biblico.jpeg",
    tags: ["BibliaSagrada", "PalavraDeDeus", "Espiritualidade", "Católicos"],
  },
  {
    id: 2,
    slug: "confissao",
    date: "",
    imageUrl:
      "/confissao.jpeg",
    tags: ["Confissão", "Reconciliação", "Espiritualidade", "VidaCristã"],
  },
  {
    id: 3,
    slug: "terco-homens",
    date: "",
    imageUrl:
      "/terco-dos-homens.jpeg",
    tags: ["Oração", "Terço", "FéCatólica", "VidaCristã"],
  },
  {
    id: 4,
    slug: "adoracao",
    date: "",
    imageUrl:
      "/adoracao.jpeg",
    tags: ["Oração", "Adoração", "FéCatólica", "Conversão"],
  },
  {
    id: 5,
    slug: "dizimista",
    date: "",
    imageUrl:
      "/dizimista.jpeg",
    tags: ["Dízimo", "Comunidade", "FéCatólica", "VidaCristã"],
  },
  {
    id: 6,
    slug: "terco-mulheres",
    date: "",
    imageUrl:
      "/terco-das-mulheres.jpeg",
    tags: ["Oração", "Terço", "FéCatólica", "VidaCristã"],
  },
  {
    id: 7,
    slug: "festa-padroeira-2025",
    date: "",
    imageUrl:
      "https://images.unsplash.com/photo-1548625149-720754874919?w=800&q=80",
    tags: ["Festa", "Padroeira", "Quermesse", "Procissão"],
  },
  {
    id: 8,
    slug: "catequese-2025-inscricoes",
    date: "",
    imageUrl:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
    tags: ["Catequese", "Primeira Eucaristia", "Crisma", "Inscrições"],
  },
  {
    id: 9,
    slug: "retiro-quaresma-2025",
    date: "",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    tags: ["Quaresma", "Retiro", "Espiritualidade", "Jovens"],
  }
];
