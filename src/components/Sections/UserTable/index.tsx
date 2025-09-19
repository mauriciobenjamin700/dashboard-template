"use client"
import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import styles from "./styles.module.css";
import OptionsButton from "@/components/ui/OptionsButton";
import { Eye, Key, Mail, User, UserCheck, UserRoundX, Users } from "lucide-react";
import UserProfileModal from "@/components/Modal/UserProfileModal";
import ConfirmModal from "@/components/Modal/ConfirmModal";

interface UserTableProps {
    filteredUsers: Array<User>;
}

export default function UserTable ({ filteredUsers }: UserTableProps) {

    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [confirmModalData, setConfirmModalData] = useState<{content: string; onConfirm: () => void;} | null>(null);

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

    const handleShowProfile = (userId: number) => {
        // Lógica para mostrar o perfil do usuário
        const user = filteredUsers.find(u => u.id === userId) || null;
        setSelectedUser(user);
        setShowProfileModal(true);
    }

    const handleActivateUser = (userId: number) => {
        setConfirmModalData({
            content: "Você tem certeza que deseja ativar este usuário?",
            onConfirm: () => {
                // Lógica para ativar o usuário
                alert(`Usuário ${userId} ativado`);
            }
        })
    }

    const handleDeActivateUser = (userId: number) => {
        setConfirmModalData({
            content: "Você tem certeza que deseja desativar este usuário?",
            onConfirm: () => {
                // Lógica para desativar o usuário
                alert(`Usuário ${userId} desativado`);
            }
        })
    }

    const handleResetPassword = (userId: number) => {
        // Lógica para resetar a senha do usuário
        alert(`Senha do usuário ${userId} resetada`);
    }

    const handleSendMessage = (userId: number) => {
        // Lógica para enviar mensagem ao usuário
        alert(`Mensagem enviada para o usuário ${userId}`);
    }

    return (
        <section className={styles.tableCard}>
            <UserProfileModal
                user={selectedUser}
                open={showProfileModal}
                onClose={() => setShowProfileModal(false)}
            />
            <ConfirmModal
                title="Confirmar Ação"
                content={confirmModalData ? confirmModalData.content : ""}
                onConfirm={() => {
                    confirmModalData?.onConfirm();
                    setConfirmModalData(null);  
                }}
                onCancel={() => setConfirmModalData(null)}
                open={!!confirmModalData}
            />
            <div className={styles.tableHeader}>
                <Users className="cardIcon" />
                Usuários ({filteredUsers.length})
            </div>
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
                        {user.psychiatric_diagnoses.slice(0, 2).map((diagnosis) => (
                        <span key={diagnosis} className={styles.badgeOutline}>{diagnosis}</span>
                        ))}
                        {user.psychiatric_diagnoses.length > 2 && (
                        <span className={styles.badgeSecondary}>+{user.psychiatric_diagnoses.length - 2}</span>
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
                                onClick={() => handleShowProfile(user.id)}
                            >
                                <Eye />
                                Ver Perfil
                            </button>
                            <button 
                                className={styles.popoverAction}
                                onClick={() => handleSendMessage(user.id)}
                            >
                                <Mail />
                                Enviar Mensagem
                            </button>
                            <button 
                                className={styles.popoverAction}
                                onClick={() => handleResetPassword(user.id)}
                            >
                                <Key />
                                Redefinir Senha
                            </button>
                            <button
                                className={styles.popoverAction}
                                onClick={() => {
                                    user.is_active ? 
                                    handleDeActivateUser(user.id) 
                                    : 
                                    handleActivateUser(user.id)
                                }}
                            >
                                {
                                    user.is_active ?
                                        <>
                                            <UserRoundX color="#ef4444" />
                                            <p>Desativar Conta</p>
                                        </>
                                    : 
                                    <>
                                        <UserCheck color="#22c55e" />
                                        <p>Ativar Conta</p>
                                    </>
                                }
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