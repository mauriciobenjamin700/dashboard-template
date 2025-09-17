import styles from "./styles.module.css"
import { mockDashboard } from "@/lib/mockData"

export default function DashboardPage() {

  const data = mockDashboard

  return (
    <div className={styles.dashboardContainer}>
      <section className={styles.headerSection}>
        <h1 className={styles.title}>Visão Geral</h1>
        <p className={styles.subtitle}>Acompanhe as principais métricas da plataforma</p>
      </section>

      {/* KPI Cards */}
      <section className={styles.kpiGrid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Total de Usuários</span>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardValue}>{data.totalUsers.toLocaleString()}</div>
            <p className={styles.cardDescription}>+12% em relação ao mês anterior</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Usuários Ativos</span>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardValue}>{data.activeUsers.toLocaleString()}</div>
            <p className={styles.cardDescription}>{((data.activeUsers / data.totalUsers) * 100).toFixed(1)}% do total</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Usuários Inativos</span>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardValue}>{data.inactiveUsers.toLocaleString()}</div>
            <p className={styles.cardDescription}>{((data.inactiveUsers / data.totalUsers) * 100).toFixed(1)}% do total</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Novos Cadastros</span>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardValue}>{data.newUsersThisMonth}</div>
            <p className={styles.cardDescription}>Este mês</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Engajamento Médio</span>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardValue}>{data.averageEngagement}%</div>
            <p className={styles.cardDescription}>+5.2% esta semana</p>
          </div>
        </div>
      </section>

      {/* Users by Plan */}
      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>Usuários por Plano</span>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.statsGrid3}>
            {data.usersByPlan.map((plan) => (
              <div key={plan.plan} className={styles.statRow}>
                <span className={styles.statLabel}>{plan.plan}</span>
                <span className={styles.badgeOutline}>{plan.active} ativos</span>
                <span className={styles.statValue}>{plan.active} de {plan.total} usuários ({((plan.active / plan.total) * 100).toFixed(1)}%)</span>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{width: `${(plan.active / plan.total) * 100}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Distribution */}
      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>Distribuição Geográfica dos Usuários Ativos</span>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.tabsList}>
            <button className={styles.tabButton}>Países</button>
            <button className={styles.tabButton}>Estados</button>
            <button className={styles.tabButton}>Cidades</button>
          </div>
          <div className={styles.tabsContent}>
            {data.usersByLocation.countries.map((country, index) => (
              <div key={country.name} className={styles.statRow}>
                <span className={styles.rank}>#{index + 1}</span>
                <span className={styles.statLabel}>{country.name}</span>
                <span className={styles.badgeOutline}>{country.count} usuários</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interaction Patterns */}
      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>Padrões de Interação dos Usuários</span>
        </div>
        <div className={styles.cardContent}>
          {data.interactionPatterns.map((pattern) => (
            <div key={pattern.pattern} className={styles.statRow}>
              <span className={styles.statLabel}>{pattern.description}</span>
              <span className={styles.badgeOutline}>{pattern.percentage}%</span>
              <span className={styles.statValue}>{pattern.count} usuários</span>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{width: `${pattern.percentage}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Content Stats */}
      <section className={styles.statsGrid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Atividade de Conteúdo</span>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.statRow}>
              <span className={styles.statLabel}>Total de Dicas</span>
              <span className={styles.badge}>{data.totalTips}</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.statLabel}>Enviadas Hoje</span>
              <span className={styles.badgeSuccess}>{data.tipsSentToday.toLocaleString()}</span>
            </div>
            <div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Meta Diária</span>
                <span className={styles.statValue}>95%</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{width: '95%'}}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Distribuição de Humor</span>
          </div>
          <div className={styles.cardContent}>
            {data.moodDistribution.map((mood) => (
              <div key={mood.mood} className={styles.moodRow}>
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>{mood.mood}</span>
                  <span className={styles.statValue}>{mood.percentage}%</span>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{width: `${mood.percentage}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution Charts */}
      <section className={styles.statsGrid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Linguagens do Amor Mais Populares</span>
          </div>
          <div className={styles.cardContent}>
            {data.loveLanguageDistribution.slice(0, 5).map((lang, index) => (
              <div key={lang.language} className={styles.statRow}>
                <span className={styles.rank}>#{index + 1}</span>
                <span className={styles.statLabel}>{lang.language}</span>
                <span className={styles.badgeOutline}>{lang.count} usuários</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Diagnósticos Mais Comuns</span>
          </div>
          <div className={styles.cardContent}>
            {data.diagnosesDistribution.slice(0, 5).map((diagnosis, index) => (
              <div key={diagnosis.diagnosis} className={styles.statRow}>
                <span className={styles.rank}>#{index + 1}</span>
                <span className={styles.statLabel}>{diagnosis.diagnosis}</span>
                <span className={styles.badgeOutline}>{diagnosis.count} usuários</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Tips */}
      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>Dicas com Melhor Performance</span>
        </div>
        <div className={styles.cardContent}>
          {data.topTips.map((tip) => (
            <div key={tip.id} className={styles.tipRow}>
              <div>
                <h4 className={styles.tipTitle}>{tip.title}</h4>
                <p className={styles.tipContent}>{tip.content}</p>
                <div className={styles.tipBadges}>
                  <span className={styles.badge}>{tip.type}</span>
                  {tip.mood && <span className={styles.badgeOutline}>{tip.mood}</span>}
                </div>
              </div>
              <div className={styles.tipStats}>
                <div className={styles.tipEngagement}>{tip.engagement_rate}% engajamento</div>
                <div className={styles.tipMeta}>{tip.likes} curtidas • {tip.sends} envios</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}