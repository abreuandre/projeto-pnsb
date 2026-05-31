import { TeamMember } from '../types'

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: 'Pe. Marcos Antônio Silva',
    role: 'Pároco',
    imageUrl: 'https://images.unsplash.com/photo-1553775927-a071d5a6a39a?w=600&q=80',
    isMain: true,
    bio: `Nascido em Belo Horizonte, MG, em 1972, o Padre Marcos Antônio Silva foi ordenado sacerdote em 1999 pela Diocese de Belo Horizonte. Possui graduação em Teologia pela PUC Minas e especialização em Pastoral Familiar pela Pontificia Universidade Salesiana, em Roma.

Antes de assumir a paróquia, atuou como vigário em duas comunidades de sua diocese natal e como diretor espiritual do seminário diocesano por cinco anos. Chegou à Paróquia Nossa Senhora do Bonsucesso em 2018, onde desde então exerce com dedicação e alegria o ministério pastoral.

É conhecido por sua homilia acolhedora, sua atenção especial aos jovens e às famílias em situação de vulnerabilidade. Coordena também a Pastoral da Sobriedade e é assessor da Renovação Carismática Católica na região.`,
  },
  {
    id: 2,
    name: 'Pe. João Batista Ferreira',
    role: 'Padre Cooperador',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&q=80',
    isMain: false,
    bio: 'Ordenado em 2010, o Padre João Batista atua na paróquia desde 2021. Graduado em Filosofia e Teologia, é responsável pela catequese e pela pastoral juvenil.',
  },
  {
    id: 3,
    name: 'Dc. Roberto Almeida',
    role: 'Diácono Permanente',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    isMain: false,
    bio: 'Ordenado diácono permanente em 2015, Roberto é casado e pai de três filhos. Coordena a Pastoral da Caridade e os ministérios de serviço da comunidade.',
  },
  {
    id: 4,
    name: 'Maria das Graças Oliveira',
    role: 'Secretária Paroquial',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    isMain: false,
    bio: 'Com mais de 15 anos dedicados à paróquia, Maria das Graças é o rosto acolhedor da secretaria. Cuida de toda a documentação e é a primeira referência para os fiéis.',
  },
  {
    id: 5,
    name: 'Carlos Henrique Santos',
    role: 'Coordenador de Pastoral',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    isMain: false,
    bio: 'Leigo comprometido, Carlos coordena as pastorais e movimentos da paróquia. É formado em Pedagogia e atua voluntariamente há 10 anos na comunidade.',
  },
  {
    id: 6,
    name: 'Ana Paula Rodrigues',
    role: 'Coordenadora de Liturgia',
    imageUrl: 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?w=400&q=80',
    isMain: false,
    bio: 'Responsável pela preparação das celebrações litúrgicas, Ana Paula coordena o coral, os ministros da Eucaristia e os leitores da paróquia há 8 anos.',
  },
]
