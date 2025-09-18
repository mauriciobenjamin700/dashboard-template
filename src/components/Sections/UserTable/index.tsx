import * as Popover from "@radix-ui/react-popover";
import styles from "./styles.module.css";
import OptionsButton from "@/components/ui/OptionsButton";

interface UserTableProps {
    filteredUsers: Array<{
        id: number;
        name: string;
        email: string;
        age: number;
        is_active: boolean;
        diagnoses: string[];
        love_languages: string[];
        engagement_score: number;
        last_active: string;
    }>;
}

export default function UserTable ({ filteredUsers }: UserTableProps) {

    const getStatusBadge = (isActive: boolean) => (
        <span className={isActive ? styles.badgeActive : styles.badgeInactive}>
            {isActive ? "Ativo" : "Inativo"}
        </span>
    );

    const getEngagementColor = (score: number) => {
        if (score >= 80) return styles.textSuccess;
        if (score >= 60) return styles.textWarning;
        return styles.textDestructive;
    };

    const handleBanUser = (userId: number) => {
        // Lógica para banir o usuário
        alert(`Usuário ${userId} banido`);
    }

    const handleActivateUser = (userId: number) => {
        // Lógica para ativar o usuário
        alert(`Usuário ${userId} ativado`);
    }

    const handleDeActivateUser = (userId: number) => {
        // Lógica para desativar o usuário
        alert(`Usuário ${userId} desativado`);
    }

    const handleResetPassword = (userId: number) => {
        // Lógica para resetar a senha do usuário
        alert(`Senha do usuário ${userId} resetada`);
    }

    return (
        <section className={styles.tableCard}>
            <div className={styles.tableHeader}>Usuários ({filteredUsers.length})</div>
            <table className={styles.table}>
            <thead>
                <tr>
                <th>Usuário</th>
                <th>Status</th>
                <th>Diagnósticos</th>
                <th>Linguagens do Amor</th>
                <th>Engajamento</th>
                <th>Último Acesso</th>
                <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {filteredUsers.map((user) => (
                <tr key={user.id}>
                    <td>
                    <div className={styles.userInfo}>
                        <div className={styles.userName}>{user.name}</div>
                        <div className={styles.userEmail}>{user.email}</div>
                        <div className={styles.userAge}>{user.age} anos</div>
                    </div>
                    </td>
                    <td>
                    {getStatusBadge(user.is_active)}
                    </td>
                    <td>
                    <div className={styles.badgeList}>
                        {user.diagnoses.slice(0, 2).map((diagnosis) => (
                        <span key={diagnosis} className={styles.badgeOutline}>{diagnosis}</span>
                        ))}
                        {user.diagnoses.length > 2 && (
                        <span className={styles.badgeSecondary}>+{user.diagnoses.length - 2}</span>
                        )}
                    </div>
                    </td>
                    <td>
                    <div className={styles.badgeList}>
                        {user.love_languages.slice(0, 2).map((lang) => (
                        <span key={lang} className={styles.badgeOutline}>{lang}</span>
                        ))}
                        {user.love_languages.length > 2 && (
                        <span className={styles.badgeSecondary}>+{user.love_languages.length - 2}</span>
                        )}
                    </div>
                    </td>
                    <td>
                    <span className={`${styles.engagementScore} ${getEngagementColor(user.engagement_score)}`}>{user.engagement_score}%</span>
                    </td>
                    <td>
                    <span className={styles.lastActive}>{new Date(user.last_active).toLocaleDateString('pt-BR')}</span>
                    </td>
                    <td>
                        <Popover.Root>
                        <Popover.Trigger asChild>
                            <OptionsButton />
                        </Popover.Trigger>
                        <Popover.Content sideOffset={8} className={styles.popoverContent} align="end">
                            <button 
                                className={styles.popoverAction}
                                onClick={() => handleBanUser(user.id)}
                            >
                                Banir
                            </button>
                            <button 
                                className={styles.popoverAction}
                                onClick={() => handleActivateUser(user.id)}
                            >
                                Ativar
                            </button>
                            <button 
                                className={styles.popoverAction}
                                onClick={() => handleDeActivateUser(user.id)}
                            >
                                Desativar
                            </button>
                            <button
                                className={styles.popoverAction}
                                onClick={() => handleResetPassword(user.id)}
                            >
                                Resetar Senha
                            </button>
                        </Popover.Content>
                        </Popover.Root>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </section>
    )
}