import styles from "./styles.module.css"

interface KPICardProps {
  title: string;
  value: string;
  description: string;
}

export default function KPICard({ title, value, description }: KPICardProps){
    return (
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>{title}</span>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardValue}>{value}</div>
            <p className={styles.cardDescription}>{description}</p>
          </div>
        </div>
    )
}