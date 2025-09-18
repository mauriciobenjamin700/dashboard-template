"use client"
import styles from "./styles.module.css"
import { useState } from "react"

interface LocationData {
  name: string;
  count: number;
}

interface UserGeographicDistributionProps {
  usersByLocation: {
    countries: LocationData[];
    states: LocationData[];
    cities: LocationData[];
  };
}

export default function UserGeographicDistribution( data: UserGeographicDistributionProps ) {
  const [activeTab, setActiveTab] = useState<'countries' | 'states' | 'cities'>('countries');

  return (
    <section className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>Distribuição Geográfica dos Usuários Ativos</span>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.tabsList}>
            <button className={`${styles.tabButton} ${activeTab === 'countries' ? styles.active : ''}`} onClick={() => setActiveTab('countries')}>Países</button>
            <button className={`${styles.tabButton} ${activeTab === 'states' ? styles.active : ''}`} onClick={() => setActiveTab('states')}>Estados</button>
            <button className={`${styles.tabButton} ${activeTab === 'cities' ? styles.active : ''}`} onClick={() => setActiveTab('cities')}>Cidades</button>
          </div>
          <div className={styles.tabsContent}>
            {data.usersByLocation.countries.map((country, index) => (
              <div key={country.name} className={styles.statRow}>
                <div>
                  <span className={styles.rank}>#{index + 1}</span>
                  <span className={styles.statLabel}>{country.name}</span>
                </div>
                
                <span className={styles.badgeOutline}>{country.count} usuários</span>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}