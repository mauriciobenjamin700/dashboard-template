import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.layoutHeader}>
        <div className={styles.headerMain}>
        <h1 className={styles.headerTitle}>Dashboard Administrativo</h1>
        <div className={styles.headerRight}>
            <span className={styles.headerWelcome}>Bem-vindo, Admin</span>
            <div className={styles.headerAvatar}></div>
        </div>
        </div>
    </header>
  );
}