"use client"

import { useState } from "react"
import styles from "./styles.module.css"
import { mockUsers } from "@/lib/mockData"
import SectionHeader from "@/components/SectionHeader"
import KPIGrid from "@/components/KPIGrid"
import KPICard from "@/components/KPICard"

export default function UsersPage() {

  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [ageFilter, setAgeFilter] = useState("all")
  const [diagnosisFilter, setDiagnosisFilter] = useState("all")
  const [personalityFilter, setPersonalityFilter] = useState("all")
  const [loveLanguageFilter, setLoveLanguageFilter] = useState("all")
  const [engagementFilter, setEngagementFilter] = useState("all")

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || 
                         (statusFilter === "active" && user.is_active) ||
                         (statusFilter === "inactive" && !user.is_active)
    const matchesAge = ageFilter === "all" ||
                      (ageFilter === "18-25" && user.age >= 18 && user.age <= 25) ||
                      (ageFilter === "26-35" && user.age >= 26 && user.age <= 35) ||
                      (ageFilter === "36-45" && user.age >= 36 && user.age <= 45) ||
                      (ageFilter === "46+" && user.age >= 46)
    const matchesDiagnosis = diagnosisFilter === "all" ||
                           user.diagnoses.some(d => d.toLowerCase().includes(diagnosisFilter.toLowerCase()))
    const matchesPersonality = personalityFilter === "all" ||
                              user.personalities.some(p => p.toLowerCase().includes(personalityFilter.toLowerCase()))
    const matchesLoveLanguage = loveLanguageFilter === "all" ||
                               user.love_languages.some(l => l.toLowerCase().includes(loveLanguageFilter.toLowerCase()))
    const matchesEngagement = engagementFilter === "all" ||
                             (engagementFilter === "high" && user.engagement_score >= 80) ||
                             (engagementFilter === "medium" && user.engagement_score >= 60 && user.engagement_score < 80) ||
                             (engagementFilter === "low" && user.engagement_score < 60)
    return matchesSearch && matchesStatus && matchesAge && matchesDiagnosis && 
           matchesPersonality && matchesLoveLanguage && matchesEngagement
  })

  const clearAllFilters = () => {
    setSearchTerm("")
    setStatusFilter("all")
    setAgeFilter("all")
    setDiagnosisFilter("all")
    setPersonalityFilter("all")
    setLoveLanguageFilter("all")
    setEngagementFilter("all")
  }

  return (
    <>
      <div className={styles.headerRow}>
        <SectionHeader 
          title="Gestão de Usuários"
          subtitle="Gerencie usuários da plataforma e seus dados"
        />
        <button className={styles.exportButton}>Exportar Relatório</button>
      </div>

      {/* Stats Cards */}
      <KPIGrid gridColumns={4}>
        <KPICard
          title="Total de Usuários"
          value={mockUsers.length.toString()}
          description="+2 novos hoje"
        />
        <KPICard
          title="Usuários Ativos"
          value={mockUsers.filter(u => u.is_active).length.toString()}
          description={`${((mockUsers.filter(u => u.is_active).length / mockUsers.length) * 100).toFixed(1)}% do total`}
        />
        <KPICard
          title="Engajamento Médio"
          value={`${(mockUsers.reduce((acc, u) => acc + u.engagement_score, 0) / mockUsers.length).toFixed(1)}%`}
          description="Últimos 30 dias"
        />
        <KPICard 
          title="Novos Cadastros"
          value="12"
          description="+25% vs mês anterior"
        />
      </KPIGrid>

      {/* Advanced Filters */}
      <section className={styles.filtersCard}>
        <div className={styles.filtersHeader}>
          <span className={styles.filtersTitle}>Filtros Avançados</span>
          <button className={styles.clearButton} onClick={clearAllFilters}>Limpar Filtros</button>
        </div>
        <div className={styles.filtersGrid}>
          <input
            type="text"
            placeholder="Buscar por nome ou email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.input}
          />
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className={styles.select}>
            <option value="all">Todos os Status</option>
            <option value="active">Ativos</option>
            <option value="inactive">Inativos</option>
          </select>
          <select value={ageFilter} onChange={e => setAgeFilter(e.target.value)} className={styles.select}>
            <option value="all">Todas as Idades</option>
            <option value="18-25">18-25 anos</option>
            <option value="26-35">26-35 anos</option>
            <option value="36-45">36-45 anos</option>
            <option value="46+">46+ anos</option>
          </select>
          <select value={engagementFilter} onChange={e => setEngagementFilter(e.target.value)} className={styles.select}>
            <option value="all">Todos os Níveis</option>
            <option value="high">Alto (80%+)</option>
            <option value="medium">Médio (60-79%)</option>
            <option value="low">Baixo (&lt;60%)</option>
          </select>
          <select value={diagnosisFilter} onChange={e => setDiagnosisFilter(e.target.value)} className={styles.select}>
            <option value="all">Todos os Diagnósticos</option>
            <option value="ansiedade">Ansiedade</option>
            <option value="depressão">Depressão</option>
            <option value="tdah">TDAH</option>
            <option value="bipolaridade">Bipolaridade</option>
            <option value="toc">TOC</option>
          </select>
          <select value={personalityFilter} onChange={e => setPersonalityFilter(e.target.value)} className={styles.select}>
            <option value="all">Todas as Personalidades</option>
            <option value="introvertido">Introvertido</option>
            <option value="extrovertido">Extrovertido</option>
            <option value="sensível">Sensível</option>
            <option value="otimista">Otimista</option>
            <option value="analítico">Analítico</option>
          </select>
          <select value={loveLanguageFilter} onChange={e => setLoveLanguageFilter(e.target.value)} className={styles.select}>
            <option value="all">Todas as Linguagens</option>
            <option value="palavras">Palavras de Afirmação</option>
            <option value="tempo">Tempo de Qualidade</option>
            <option value="toque">Toque Físico</option>
            <option value="atos">Atos de Serviço</option>
            <option value="presentes">Presentes</option>
          </select>
        </div>
      </section>

      {/* Users Table */}
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
                  <span className={user.is_active ? styles.badgeActive : styles.badgeInactive}>
                    {user.is_active ? "Ativo" : "Inativo"}
                  </span>
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
                  <span className={styles.engagementScore}>{user.engagement_score}%</span>
                </td>
                <td>
                  <span className={styles.lastActive}>{new Date(user.last_active).toLocaleDateString('pt-BR')}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  )
}