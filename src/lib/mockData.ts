export const mockUsers: User[] = [
  {
    id: 1,
    name: "João Silva",
    last_name: "Silva",
    email: "joao.silva@email.com",
    date_of_birth: "1997-04-12",
    gender: "masculino",
    phone: "+55 11 91234-5678",
    age: 28,
    is_active: true,
    psychiatric_diagnoses: ["ansiedade", "depressão"],
    personalities: ["introvertido", "analítico"],
    love_languages: ["palavras", "tempo"],
    temperaments: ["sanguíneo", "fleumático"],
    engagement_score: 82,
    plan: "PRO",
    location: "São Paulo, Brasil",
    interaction_pattern: "diario",
    tips_received: 150,
    feedbacks_given: 45,
    mood_history: [
      { date: "2025-09-10", label: "feliz", emoji: "😊" },
      { date: "2025-09-11", label: "neutro", emoji: "😐" }
    ],
    tips_received_list: [
      { date: "2025-09-10", tip: "Pratique a gratidão diariamente." },
      { date: "2025-09-12", tip: "Reserve tempo para si mesmo." }
    ],
    feedbacks_list: [
      { date: "2025-09-11", feedback: "Gostei muito do último artigo sobre relacionamentos." },
      { date: "2025-09-13", feedback: "As dicas de hoje foram muito úteis!" }
    ],
    last_active: "2025-09-16T10:30:00Z",
    created_at: "2021-03-15T10:00:00Z",
    updated_at: "2023-07-01T14:20:00Z",
    has_bible_verses: true,
    is_admin: false
  },
  {
    id: 2,
    name: "Maria Souza",
    last_name: "Souza",
    email: "maria.souza@email.com",
    date_of_birth: "1989-08-22",
    gender: "feminino",
    phone: "+55 21 99876-5432",
    age: 34,
    is_active: false,
    psychiatric_diagnoses: ["tdah"],
    personalities: ["extrovertido", "otimista"],
    temperaments: ["sanguíneo", "fleumático"],
    love_languages: ["presentes", "atos", "tempo"],
    engagement_score: 65,
    plan: "BASIC",
    location: "Rio de Janeiro, Brasil",
    interaction_pattern: "semanal",
    tips_received: 100,
    feedbacks_given: 30,
    created_at: "2022-05-20T15:45:00Z",
    updated_at: "2023-03-10T12:00:00Z",
    has_bible_verses: false,
    is_admin: false,
    mood_history: [
      { date: "2025-09-12", label: "triste", emoji: "😢" },
      { date: "2025-09-14", label: "neutro", emoji: "😐" }
    ],
    tips_received_list: [
      { date: "2025-09-11", tip: "Tente meditar por 10 minutos." }
    ],
    feedbacks_list: [
      { date: "2025-09-13", feedback: "Acho que poderiam ter mais dicas sobre ansiedade." }
    ],
    last_active: "2025-09-15T14:20:00Z"
  },
  {
    id: 3,
    name: "Carlos Pereira",
    last_name: "Pereira",
    email: "carlos.pereira@email.com",
    date_of_birth: "1984-02-10",
    gender: "masculino",
    phone: "+351 91234-5678",
    age: 41,
    plan: "Teste",
    location: "Lisboa, Portugal",
    interaction_pattern: "mensal",
    tips_received: 80,
    feedbacks_given: 20,
    is_active: true,
    psychiatric_diagnoses: ["bipolaridade", "ansiedade", "toc"],
    personalities: ["sensível"],
    temperaments: ["colérico", "melancólico"],
    love_languages: ["toque", "palavras"],
    engagement_score: 58,
    last_active: "2025-09-17T08:10:00Z",
    has_bible_verses: true,
    is_admin: true,
    mood_history: [
      { date: "2025-09-10", label: "feliz", emoji: "😊" },
      { date: "2025-09-09", label: "feliz", emoji: "😊" },
      { date: "2025-09-08", label: "feliz", emoji: "😊" },
      { date: "2025-09-07", label: "feliz", emoji: "😊" },
      { date: "2025-09-06", label: "neutro", emoji: "😐" },
      { date: "2025-09-05", label: "triste", emoji: "😢" },
      { date: "2025-09-04", label: "triste", emoji: "😢"},
      { date: "2025-09-03", label: "neutro", emoji: "😐" },
      { date: "2025-09-02", label: "feliz", emoji: "😊" },
      { date: "2025-09-01", label: "feliz", emoji: "😊" }
    ],
    tips_received_list: [
      { date: "2025-09-14", tip: "Lembre-se de fazer pausas durante o trabalho." }
    ],
    feedbacks_list: [
      { date: "2025-09-12", feedback: "As dicas sobre TOC foram muito esclarecedoras." }
    ],
    created_at: "2023-01-15T09:00:00Z",
    updated_at: "2023-06-20T11:30:00Z"
  },
  {
    id: 4,
    name: "Ana Costa",
    last_name: "Costa",
    email: "ana.costa@email.com",
    date_of_birth: "2003-11-05",
    gender: "feminino",
    phone: "+244 91234-5678",
    age: 22,
    plan: "FREE",
    location: "Luanda, Angola",
    interaction_pattern: "diario",
    tips_received: 50,
    feedbacks_given: 10,
    is_active: true,
    psychiatric_diagnoses: ["ansiedade"],
    personalities: ["introvertido", "sensível"],
    love_languages: ["tempo", "atos"],
    temperaments: ["melancólico", "fleumático"],
    engagement_score: 90,
    last_active: "2025-09-17T09:45:00Z",
    is_admin: false,
    created_at: "2023-02-10T14:15:00Z",
    updated_at: "2023-08-05T16:00:00Z",
    has_bible_verses: false
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
      { name: "Teresina", state: "Piauí", country: "Brasil", count: 900 },
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
  psychiatric_diagnosesDistribution: [
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
