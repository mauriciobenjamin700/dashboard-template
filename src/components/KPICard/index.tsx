import { JSX } from "react";
import styles from "./styles.module.css"

interface KPICardProps {
  title: string;
  value: string;
  description: string;
  icon?: JSX.Element;
}

export default function KPICard({ title, value, description, icon }: KPICardProps){
    return (
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span 
            className={styles.cardTitle}
            >
              {title}
            </span>
            {icon && (
              <span className={styles.cardIcon}>
                {icon}
              </span>
            )}
          </div>
          <div 
            className={styles.cardValue}
          >
            {value}
          </div>
          <p className={styles.cardDescription}>{description}</p>
        </div>
    )
}