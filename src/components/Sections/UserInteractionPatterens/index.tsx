import styles from "./styles.module.css"

interface InteractionPattern {
    pattern: string;
    description: string;
    count: number;
    percentage: number;
}

interface UserInteractionPatternsProps {
    interactionPatterns: InteractionPattern[];
}

export default function UserInteractionPatterns( data: UserInteractionPatternsProps) {
    return (
        <section className={styles.card}>
            <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Padrões de Interação dos Usuários</span>
            </div>
            <div className={styles.cardContent}>
            {data.interactionPatterns.map((pattern) => (
                <div key={pattern.pattern} className={styles.statCol}>
                <div className={styles.statRow}>
                    <div className={styles.stateCol}>
                    <span className={styles.statLabel}>{pattern.description}</span>
                    <br />
                    <span className={styles.statValue}>{pattern.count} usuários</span>
                    </div>
                    <span className={styles.badgeOutline}>{pattern.percentage}%</span>
                </div>
                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{width: `${pattern.percentage}%`}}></div>
                </div>
                </div>
            ))}
            </div>
        </section>
    )
}