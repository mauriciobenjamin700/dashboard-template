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
  const [tabData, setTabData] = useState<LocationData[]>(data.usersByLocation.countries);
  const handleSelectTab = (tab: 'countries' | 'states' | 'cities') => {
    setActiveTab(tab);
    setTabData(data.usersByLocation[tab]);
  }

  return (
    <section className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>Distribuição Geográfica dos Usuários Ativos</span>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.tabsList}>
            <button className={`${styles.tabButton} ${activeTab === 'countries' ? styles.active : ''}`} onClick={() => handleSelectTab('countries')}>Países</button>
            <button className={`${styles.tabButton} ${activeTab === 'states' ? styles.active : ''}`} onClick={() => handleSelectTab('states')}>Estados</button>
            <button className={`${styles.tabButton} ${activeTab === 'cities' ? styles.active : ''}`} onClick={() => handleSelectTab('cities')}>Cidades</button>
          </div>
          <div className={styles.tabsContent}>
            {tabData.map((country, index) => (
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