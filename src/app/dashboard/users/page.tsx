"use client"

import { useState } from "react"
import { ChartNoAxesCombined, UserCheck } from "lucide-react";
import styles from "./styles.module.css"
import { mockUsers } from "@/lib/mockData"
import SectionHeader from "@/components/SectionHeader"
import KPIGrid from "@/components/KPIGrid"
import KPICard from "@/components/KPICard"
import UserAdvancedFilters from "@/components/Sections/UserAdvancedFilters"
import UserTable from "@/components/Sections/UserTable"

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
                           user.psychiatric_diagnoses.some(d => d.toLowerCase().includes(diagnosisFilter.toLowerCase()))
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

  const handleDownloadReport = () => {
    // Lógica para download do relatório
    alert("Será implementado em breve")
  }

  return (
    <>
      <div className={styles.headerRow}>
        <SectionHeader 
          title="Gestão de Usuários"
          subtitle="Gerencie usuários da plataforma e seus dados"
        />
        <button 
          className={styles.exportButton}
          onClick={handleDownloadReport}
        >
          Exportar Relatório
        </button>
      </div>
      <KPIGrid gridColumns={4}>
        <KPICard
          title="Total de Usuários"
          value={mockUsers.length.toString()}
          description="+2 novos hoje"
          icon={<UserCheck />}
        />
        <KPICard
          title="Usuários Ativos"
          value={mockUsers.filter(u => u.is_active).length.toString()}
          description={`${((mockUsers.filter(u => u.is_active).length / mockUsers.length) * 100).toFixed(1)}% do total`}
          icon={<UserCheck color="#22c55e" />}
        />
        <KPICard
          title="Engajamento Médio"
          value={`${(mockUsers.reduce((acc, u) => acc + u.engagement_score, 0) / mockUsers.length).toFixed(1)}%`}
          description="Últimos 30 dias"
          icon={<ChartNoAxesCombined className="cardIcon" />}
        />
        <KPICard 
          title="Novos Cadastros"
          value="12"
          description="+25% vs mês anterior"
          icon={<UserCheck color="#552ae2ff" />}
        />
      </KPIGrid>
      <UserAdvancedFilters 
        filters={{
          searchTerm,
          statusFilter,
          ageFilter,
          diagnosisFilter,
          personalityFilter,
          loveLanguageFilter,
          engagementFilter
        }}
        setSearchTerm={setSearchTerm}
        setStatusFilter={setStatusFilter}
        setAgeFilter={setAgeFilter}
        setEngagementFilter={setEngagementFilter}
        setDiagnosisFilter={setDiagnosisFilter}
        setPersonalityFilter={setPersonalityFilter}
        setLoveLanguageFilter={setLoveLanguageFilter}
      />
      <UserTable filteredUsers={filteredUsers} />
    </>
  )
}