import styles from "./styles.module.css"

interface UserPlan {
    plan: string;
    active: number;
    total: number;
}

interface UserPlansPreviewProps {
    usersByPlan: UserPlan[];
}

export default function UserPlansPreview(data: UserPlansPreviewProps) {
    return (
      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>Usuários Ativos por Plano</span>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.statsGrid3}>
            {data.usersByPlan.map((plan) => (
              <div key={plan.plan} className={styles.statCol}>
                <div className={styles.planSituation}>
                  <span className={styles.statLabel}>{plan.plan}</span>
                  <span className={styles.badgeOutline}>{plan.active} ativos</span>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{width: `${(plan.active / plan.total) * 100}%`}}></div>
                </div>
                <span className={styles.statValue}>{plan.active} de {plan.total} usuários ({((plan.active / plan.total) * 100).toFixed(1)}%)</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}