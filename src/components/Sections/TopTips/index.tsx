import { ClipboardCheck } from 'lucide-react';
import styles from './styles.module.css'

interface Tip {
    id: number;
    title: string;
    content: string;
    type: string;
    mood?: string;
    engagement_rate: number;
    likes: number;
    sends: number;
}

interface TopTipsData {
    topTips: Tip[];
}

export default function TopTips(data: TopTipsData) {
    return(
      <section className="card">
        <div className="cardHeader">
          <ClipboardCheck className="cardIcon" />
          <span className="cardTitle">Dicas com Melhor Performance</span>
        </div>
        <div className="cardContent">
          {data.topTips.map((tip) => (
            <div key={tip.id} className={styles.tipRow}>
              <div>
                <h4 className={styles.tipTitle}>{tip.title}</h4>
                <p className={styles.tipContent}>{tip.content}</p>
                <div className={styles.tipBadges}>
                  <span className={styles.badge}>{tip.type}</span>
                  {tip.mood && <span className={styles.badgeOutline}>{tip.mood}</span>}
                </div>
              </div>
              <div className={styles.tipStats}>
                <div className={styles.tipEngagement}>{tip.engagement_rate}% engajamento</div>
                <div className={styles.tipMeta}>{tip.likes} curtidas • {tip.sends} envios</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}