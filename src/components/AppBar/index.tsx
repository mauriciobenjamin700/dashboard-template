import {
  BarChart3, Users, MessageSquare, Settings, 
  Heart, Brain, BookOpen, Bell, Shield,
  Activity, TrendingUp, FileText, Mail
} from "lucide-react"
import styles from "./styles.module.css";

export default function Sidebar() {
    const menuItems = [
    {
        group: "Monitoramento",
        items: [
        { title: "Visão Geral", url: "/dashboard", icon: BarChart3 },
        { title: "Atividade", url: "/dashboard/activity", icon: Activity },
        { title: "Relatórios", url: "/dashboard/reports", icon: FileText }
        ]
    },
    {
        group: "Gestão de Usuários",
        items: [
        { title: "Usuários", url: "/dashboard/users", icon: Users },
        { title: "Engajamento", url: "/dashboard/engagement", icon: TrendingUp }
        ]
    },
    {
        group: "Gestão de Conteúdo",
        items: [
        { title: "Dicas", url: "/dashboard/tips", icon: MessageSquare },
        { title: "Diagnósticos", url: "/dashboard/diagnoses", icon: Brain },
        { title: "Personalidades", url: "/dashboard/personalities", icon: Heart },
        { title: "Linguagens do Amor", url: "/dashboard/love-languages", icon: BookOpen }
        ]
    },
    {
        group: "Comunicação",
        items: [
        { title: "Notificações", url: "/dashboard/notifications", icon: Bell },
        { title: "Campanhas", url: "/dashboard/campaigns", icon: Mail }
        ]
    },
    {
        group: "Administração",
        items: [
        { title: "Logs & Segurança", url: "/dashboard/logs", icon: Shield },
        { title: "Configurações", url: "/dashboard/settings", icon: Settings }
        ]
    }
    ]

    // Simulação de estado colapsado
    const isCollapsed = false;
    // Simulação de localização
    const location = { pathname: "/dashboard" };

    const isActive = (path: string) => {
        if (path === "/dashboard") {
        return location.pathname === "/dashboard";
        }
        return location.pathname.startsWith(path);
    };

    const getNavClass = (path: string) =>
        isActive(path)
        ? styles.activeNav
        : styles.inactiveNav;

    return (
        <aside className={isCollapsed ? styles.sidebarCollapsed : styles.sidebarExpanded}>
        <div className={styles.sidebarContent}>
            <div className={styles.sidebarHeader}>
            {!isCollapsed && (
                <h2 className={styles.sidebarTitle}>ReLove Admin</h2>
            )}
            </div>
            {menuItems.map((section) => (
            <div key={section.group} className={styles.sidebarGroup}>
                {!isCollapsed && (
                <div className={styles.sidebarGroupLabel}>{section.group}</div>
                )}
                <ul className={styles.sidebarMenu}>
                {section.items.map((item) => (
                    <li key={item.title} className={styles.sidebarMenuItem}>
                    <a href={item.url} className={getNavClass(item.url)}>
                        <item.icon className={styles.sidebarIcon} />
                        {!isCollapsed && <span>{item.title}</span>}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </div>
        </aside>
    );
};