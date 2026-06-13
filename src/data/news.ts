import { NewsItem } from "../types";

// Apenas os dados que NÃO mudam com o idioma ficam aqui
export const newsData: Pick<
  NewsItem,
  "id" | "slug" | "date" | "imageUrl" | "tags"
>[] = [
  {
    id: 1,
    slug: "festa-padroeira-2025",
    date: "2025-08-14",
    imageUrl:
      "https://images.unsplash.com/photo-1548625149-720754874919?w=800&q=80",
    tags: ["Festa", "Padroeira", "Quermesse", "Procissão"],
  },
  {
    id: 2,
    slug: "catequese-2025-inscricoes",
    date: "2025-07-20",
    imageUrl:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
    tags: ["Catequese", "Primeira Eucaristia", "Crisma", "Inscrições"],
  },
  {
    id: 3,
    slug: "retiro-quaresma-2025",
    date: "2025-07-05",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    tags: ["Quaresma", "Retiro", "Espiritualidade", "Jovens"],
  },
];
