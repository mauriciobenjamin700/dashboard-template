import { Activity, Brain, Heart, MessageSquare } from "lucide-react";
import styles from "./styles.module.css"

interface MoodDistribution {
    mood: string;
    percentage: number;
}

interface LoveLanguageDistribution {
    language: string;
    count: number;
}

interface DiagnosisDistribution {
    diagnosis: string;
    count: number;
}

interface UserPreferences {
    totalTips: number;
    tipsSentToday: number;
    moodDistribution: MoodDistribution[];
    loveLanguageDistribution: LoveLanguageDistribution[];
    diagnosesDistribution: DiagnosisDistribution[];
}

interface userPreferencesPreviewProps {
    userPreferences: UserPreferences;
}

export default function UserPreferencesPreview({userPreferences}: userPreferencesPreviewProps) {

    const data = userPreferences

    return (
    <section className={styles.statsGrid}>
        <div className="card">
          <div className="cardHeader">
            <MessageSquare className="cardIcon" />
            <span className="cardTitle">Atividade de Conteúdo</span>
          </div>
          <div className="cardContent">
            <div className={styles.statRow}>
              <span className={styles.statLabel}>Total de Dicas</span>
              <span className={styles.badge}>{data.totalTips.toLocaleString()}</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.statLabel}>Total de Enviadas</span>
              <span className={styles.badge}>{data.totalTips.toLocaleString()}</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.statLabel}>Enviadas Hoje</span>
              <span className={styles.badgeSuccess}>{data.tipsSentToday.toLocaleString()}</span>
            </div>
            {/* <div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Meta Diária</span>
                <span className={styles.statValue}>95%</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{width: '95%'}}></div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="card">
          <div className="cardHeader">
            <Activity className="cardIcon" />
            <span className="cardTitle">Distribuição de Humor</span>
          </div>
          <div className="cardContent">
            {data.moodDistribution.map((mood) => (
              <div key={mood.mood} className={styles.moodRow}>
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>{mood.mood}</span>
                  <span className={styles.statValue}>{mood.percentage}%</span>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{width: `${mood.percentage}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="cardHeader">
            <Heart className="cardIcon" />
            <span className="cardTitle">Linguagens do Amor Mais Populares</span>
          </div>
          <div className="cardContent">
            {data.loveLanguageDistribution.slice(0, 5).map((lang, index) => (
              <div key={lang.language} className={styles.statRow}>
                <div>
                  <span className={styles.rank}>#{index + 1}</span>
                  <span className={styles.statLabel}>{lang.language}</span>
                </div>
                
                <span className={styles.badgeOutline}>{lang.count} usuários</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="cardHeader">
            <Brain className="cardIcon" />
            <span className="cardTitle">Diagnósticos Mais Comuns</span>
          </div>
          <div className="cardContent">
            {data.diagnosesDistribution.slice(0, 5).map((diagnosis, index) => (
              <div key={diagnosis.diagnosis} className={styles.statRow}>
                <div>
                  <span className={styles.rank}>#{index + 1}</span>
                  <span className={styles.statLabel}>{diagnosis.diagnosis}</span>
                </div>
                <span className={styles.badgeOutline}>{diagnosis.count} usuários</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}