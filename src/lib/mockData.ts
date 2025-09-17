export const mockDashboard = {
  totalUsers: 12450,
  activeUsers: 8450,
  newUsersThisMonth: 320,
  averageEngagement: 67.3,
  totalTips: 2100,
  tipsSentToday: 180,
  moodDistribution: [
    { mood: "feliz", percentage: 45 },
    { mood: "neutro", percentage: 30 },
    { mood: "triste", percentage: 15 },
    { mood: "ansioso", percentage: 10 }
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
