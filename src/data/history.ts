import { TimelineEvent } from "../types";

// Apenas os dados que NÃO mudam com o idioma ficam aqui
export const timelineData: Pick<TimelineEvent, "year" | "imageUrl">[] = [
  {
    year: "1920",
    imageUrl:
      "/berco_paroquia.jpeg",
  },
  {
    year: "1930",
    imageUrl: "/construcao_paroquia.jpeg",
  },
  /*{
    year: "1972",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
  },
  {
    year: "1985",
    imageUrl: "",
  },
  {
    year: "1990",
    imageUrl:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&q=80",
  },
  {
    year: "2002",
    imageUrl: "",
  },
  {
    year: "2015",
    imageUrl:
      "https://images.unsplash.com/photo-1548625149-720754874919?w=600&q=80",
  },
  {
    year: "2025",
    imageUrl: "",
  },*/
];
