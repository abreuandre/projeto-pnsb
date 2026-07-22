import { TeamMember } from "../types";

// Apenas os dados que NÃO mudam com o idioma ficam aqui
export const teamData: Pick<
  TeamMember,
  "id" | "name" | "imageUrl" | "isMain"
>[] = [
  {
    id: 1,
    name: "Pe. Luís Gustavo Mendes de Lima",
    imageUrl: "",
    isMain: true,
  },
  {
    id: 2,
    name: "Pe. Márcio Queiroz",
    imageUrl: "",
    isMain: false,
  },
  {
    id: 3,
    name: "Dc. José Paulo",
    imageUrl: "",
    isMain: false,
  },
  {
    id: 4,
    name: "Maria da Conceição",
    imageUrl: "",
    isMain: false,
  },
  {
    id: 5,
    name: "Ana Cristina",
    imageUrl: "",
    isMain: false,
  },
  /*{
    id: 6,
    name: "Ana Paula Rodrigues",
    imageUrl:
      "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?w=400&q=80",
    isMain: false,
  },*/
];
