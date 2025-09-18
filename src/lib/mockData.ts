export type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  is_active: boolean;
  diagnoses: string[];
  personalities: string[];
  love_languages: string[];
  engagement_score: number;
  last_active: string;
};

export const mockUsers: User[] = [
  {
    id: 1,
    name: "João Silva",
    email: "joao.silva@email.com",
    age: 28,
    is_active: true,
    diagnoses: ["ansiedade", "depressão"],
    personalities: ["introvertido", "analítico"],
    love_languages: ["palavras", "tempo"],
    engagement_score: 82,
    last_active: "2025-09-16T10:30:00Z"
  },
  {
    id: 2,
    name: "Maria Souza",
    email: "maria.souza@email.com",
    age: 34,
    is_active: false,
    diagnoses: ["tdah"],
    personalities: ["extrovertido", "otimista"],
    love_languages: ["presentes", "atos", "tempo"],
    engagement_score: 65,
    last_active: "2025-09-15T14:20:00Z"
  },
  {
    id: 3,
    name: "Carlos Pereira",
    email: "carlos.pereira@email.com",
    age: 41,
    is_active: true,
    diagnoses: ["bipolaridade", "ansiedade", "toc"],
    personalities: ["sensível"],
    love_languages: ["toque", "palavras"],
    engagement_score: 58,
    last_active: "2025-09-17T08:10:00Z"
  },
  {
    id: 4,
    name: "Ana Costa",
    email: "ana.costa@email.com",
    age: 22,
    is_active: true,
    diagnoses: ["ansiedade"],
    personalities: ["introvertido", "sensível"],
    love_languages: ["tempo", "atos"],
    engagement_score: 90,
    last_active: "2025-09-17T09:45:00Z"
  }
];
export const mockDashboard = {
  totalUsers: 12450,
  activeUsers: 8450,
  inactiveUsers: 3990,
  newUsersThisMonth: 320,
  averageEngagement: 67.3,
  totalTips: 9500,
  tipsSentToday: 180,
  moodDistribution: [
    { mood: "feliz", percentage: 45 },
    { mood: "neutro", percentage: 30 },
    { mood: "triste", percentage: 15 }
  ],
  usersByPlan: [
    { plan: "Teste", active: 6000, total: 8000 },
    { plan: "PRO", active: 2000, total: 3000 },
    { plan: "PRO Max", active: 450, total: 1450 }
  ],
  usersByLocation: {
    countries: [
      { name: "Brasil", count: 7000 },
      { name: "Portugal", count: 2000 },
      { name: "Angola", count: 800 }
    ],
    states: [
      { name: "São Paulo", country: "Brasil", count: 3000 },
      { name: "Rio de Janeiro", country: "Brasil", count: 1800 },
      { name: "Lisboa", country: "Portugal", count: 1200 }
    ],
    cities: [
      { name: "São Paulo", state: "São Paulo", country: "Brasil", count: 1500 },
      { name: "Rio de Janeiro", state: "Rio de Janeiro", country: "Brasil", count: 900 },
      { name: "Lisboa", state: "Lisboa", country: "Portugal", count: 700 }
    ]
  },
  interactionPatterns: [
    { pattern: "diario", description: "Acessa diariamente", percentage: 60, count: 7500 },
    { pattern: "semanal", description: "Acessa semanalmente", percentage: 30, count: 3750 },
    { pattern: "mensal", description: "Acessa mensalmente", percentage: 10, count: 1250 }
  ],
  loveLanguageDistribution: [
    { language: "Palavras de Afirmação", count: 3200 },
    { language: "Tempo de Qualidade", count: 2900 },
    { language: "Presentes", count: 2100 },
    { language: "Atos de Serviço", count: 1800 },
    { language: "Toque Físico", count: 1450 }
  ],
  diagnosesDistribution: [
    { diagnosis: "Introvertido", count: 3400 },
    { diagnosis: "Extrovertido", count: 2800 },
    { diagnosis: "Analítico", count: 2200 },
    { diagnosis: "Criativo", count: 1700 },
    { diagnosis: "Pragmático", count: 1350 }
  ],
  topTips: [
    {
      id: 1,
      title: "Seja gentil todos os dias",
      content: "A gentileza transforma relacionamentos e cria conexões mais profundas.",
      type: "Relacionamento",
      mood: "feliz",
      engagement_rate: 82.5,
      likes: 1200,
      sends: 800
    },
    {
      id: 2,
      title: "Reserve tempo de qualidade",
      content: "Momentos juntos fortalecem vínculos e aumentam o engajamento.",
      type: "Tempo de Qualidade",
      mood: "neutro",
      engagement_rate: 76.2,
      likes: 950,
      sends: 670
    },
    {
      id: 3,
      title: "Demonstre gratidão",
      content: "Agradecer pequenas ações faz toda diferença no dia a dia.",
      type: "Gratidão",
      mood: "feliz",
      engagement_rate: 74.8,
      likes: 870,
      sends: 590
    }
  ]
};
