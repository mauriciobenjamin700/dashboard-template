import styles from "./styles.module.css"

interface SectionHeaderProps {
    title: string;
    subtitle: string;
}
export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
    return (
        <section className={styles.headerSection}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
        </section>
    )
}