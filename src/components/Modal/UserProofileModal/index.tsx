import styles from "./styles.module.css";
import { UserRound, Heart, TrendingUp, Brain } from "lucide-react";

interface UserProfileModalProps {
    user: User | null;
    open: boolean;
    onClose: () => void;
}


import { useState } from "react";

export default function UserProfileModal({ user, open, onClose }: UserProfileModalProps) {
  const [activeTab, setActiveTab] = useState(0);
  if (!open || !user) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.profileHeader}>
          <div className={styles.avatar}>
            <UserRound size={48} color="#fff" style={{ background: "#7c3aed", borderRadius: "50%", padding: 8 }} />
          </div>
          <div>
            <h2 className={styles.profileName}>{user.name}</h2>
            <p className={styles.profileEmail}>{user.email}</p>
          </div>
        </div>
        <div className={styles.tabsRow}>
          <button className={activeTab === 0 ? styles.tabActive : styles.tab} onClick={() => setActiveTab(0)}>Visão Geral</button>
          <button className={activeTab === 1 ? styles.tabActive : styles.tab} onClick={() => setActiveTab(1)}>Histórico de Humor</button>
          <button className={activeTab === 2 ? styles.tabActive : styles.tab} onClick={() => setActiveTab(2)}>Dicas Recebidas</button>
          <button className={activeTab === 3 ? styles.tabActive : styles.tab} onClick={() => setActiveTab(3)}>Feedbacks</button>
        </div>
        {activeTab === 0 && (
          <div className={styles.cardsGrid}>
            <div className={styles.cardInfo}>
              <div className={styles.cardTitle}><UserRound size={20} /> Informações Pessoais</div>
              <div className={styles.cardContent}>
                <div><b>Idade:</b> {user.age} anos</div>
                <div><b>Plano:</b> <span className={styles.badge}>{user.plan || "free"}</span></div>
                <div><b>Localização:</b> {user.location || "-"}</div>
                <div><b>Padrão de Interação:</b> {user.interaction_pattern || "-"}</div>
                <div><b>Status:</b> <span className={styles.badgeInactive}>{user.is_active ? "Ativo" : "Inativo"}</span></div>
              </div>
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardTitle}><TrendingUp size={20} /> Métricas de Engajamento</div>
              <div className={styles.cardContent}>
                <div><b>Score de Engajamento:</b> {user.engagement_score}%</div>
                <div><b>Dicas Recebidas:</b> {user.tips_received || 0}</div>
                <div><b>Feedbacks Dados:</b> {user.feedbacks_given || 0}</div>
                <div><b>Último Acesso:</b> {user.last_active ? new Date(user.last_active).toLocaleDateString('pt-BR') : "-"}</div>
              </div>
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardTitle}><Brain size={20} /> Diagnósticos</div>
              <div className={styles.cardContent}>
                {user.psychiatric_diagnoses && user.psychiatric_diagnoses.length > 0 ? (
                  user.psychiatric_diagnoses.map((diag: string) => (
                    <span key={diag} className={styles.badgeOutline}>{diag}</span>
                  ))
                ) : <span className={styles.badgeOutline}>-</span>}
              </div>
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardTitle}><Heart size={20} /> Personalidade & Linguagens do Amor</div>
              <div className={styles.cardContent}>
                <div><b>Personalidades:</b></div>
                <div>
                  {user.personalities && user.personalities.length > 0 ? (
                    user.personalities.map((p: string) => (
                      <span key={p} className={styles.badgeOutline}>{p}</span>
                    ))
                  ) : <span className={styles.badgeOutline}>-</span>}
                </div>
                <div style={{ marginTop: 8 }}><b>Linguagens do Amor:</b></div>
                <div>
                  {user.love_languages && user.love_languages.length > 0 ? (
                    user.love_languages.map((l: string) => (
                      <span key={l} className={styles.badgeOutline}>{l}</span>
                    ))
                  ) : <span className={styles.badgeOutline}>-</span>}
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div className={styles.cardInfo} style={{ width: "100%" }}>
            <div className={styles.cardTitle}>Histórico de Humor</div>
            <div className={styles.cardContent}>
              {user.mood_history && user.mood_history.length > 0 ? (
                user.mood_history.map((mood: any, idx: number) => (
                  <div key={idx} className={styles.moodRow}>
                    <span style={{ fontSize: "1.5rem", marginRight: 8 }}>{mood.emoji}</span>
                    <span style={{ fontWeight: 500 }}>{mood.label}</span>
                    <span style={{ color: "#6b7280", marginLeft: 8 }}>{new Date(mood.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                ))
              ) : <span className={styles.badgeOutline}>Nenhum registro</span>}
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className={styles.cardInfo} style={{ width: "100%" }}>
            <div className={styles.cardTitle}>Dicas Recebidas</div>
            <div className={styles.cardContent}>
              {user.tips_received_list && user.tips_received_list.length > 0 ? (
                user.tips_received_list.map((tip: any, idx: number) => (
                  <div key={idx} className={styles.tipRow}>
                    <div>
                      <div style={{ fontWeight: 600 }}>{tip.title}</div>
                      <div style={{ color: "#6b7280" }}>{tip.content}</div>
                      <div className={styles.badgeOutline} style={{ marginTop: 4 }}>{tip.category}</div>
                    </div>
                    <div style={{ color: "#6b7280", fontSize: "0.95rem" }}>{new Date(tip.date).toLocaleDateString('pt-BR')}</div>
                  </div>
                ))
              ) : <span className={styles.badgeOutline}>Nenhuma dica recebida</span>}
            </div>
          </div>
        )}
        {activeTab === 3 && (
          <div className={styles.cardInfo} style={{ width: "100%" }}>
            <div className={styles.cardTitle}>Feedbacks Dados</div>
            <div className={styles.cardContent}>
              {user.feedbacks_list && user.feedbacks_list.length > 0 ? (
                user.feedbacks_list.map((fb: any, idx: number) => (
                  <div key={idx} className={styles.tipRow}>
                    <div style={{ fontWeight: 600 }}>{fb.content}</div>
                    <div style={{ color: "#6b7280" }}>{new Date(fb.date).toLocaleDateString('pt-BR')}</div>
                  </div>
                ))
              ) : <span className={styles.badgeOutline}>Nenhum feedback dado</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}