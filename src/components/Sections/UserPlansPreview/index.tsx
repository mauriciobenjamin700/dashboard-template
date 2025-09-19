import styles from "./styles.module.css"
import { CreditCard } from "lucide-react";

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
      <section className="card">
        <div className="cardHeader">
          <CreditCard className="cardIcon"/>
          <span className="cardTitle">Usuários Ativos por Plano</span>
        </div>
        <div className="cardContent">
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