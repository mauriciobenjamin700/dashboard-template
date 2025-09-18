import KPICards from "@/components/Sections/KPICards"
import styles from "./styles.module.css"
import { mockDashboard } from "@/lib/mockData"
import UserPlansPreview from "@/components/Sections/UserPlansPreview"
import UserGeographicDistribution from "@/components/Sections/UserGeographicDistribution"
import UserInteractionPatterns from "@/components/Sections/UserInteractionPatterens"
import UserPreferencesPreview from "@/components/Sections/UserPreferencesPreview"
import TopTips from "@/components/Sections/TopTips"
import SectionHeader from "@/components/SectionHeader"

export default function DashboardPage() {

  const data = mockDashboard

  const kpiData = {
    totalUsers: data.totalUsers,
    activeUsers: data.activeUsers,
    inactiveUsers: data.inactiveUsers,
    newUsersThisMonth: data.newUsersThisMonth,
    averageEngagement: data.averageEngagement
  }

  const userPreferences = {
    totalTips: data.totalTips,
    tipsSentToday: data.tipsSentToday,
    moodDistribution: data.moodDistribution,
    loveLanguageDistribution: data.loveLanguageDistribution,
    diagnosesDistribution: data.diagnosesDistribution
  }

  return (
    <div className={styles.dashboardContainer}>
      <SectionHeader 
        title="Visão Geral"
        subtitle="Acompanhe as principais métricas da plataforma"
      />
      <KPICards {...kpiData}/>
      <UserPlansPreview usersByPlan={data.usersByPlan} />
      <UserGeographicDistribution usersByLocation={data.usersByLocation}/>
      <UserInteractionPatterns interactionPatterns={data.interactionPatterns} />
      <UserPreferencesPreview userPreferences={userPreferences} />
      <TopTips topTips={data.topTips} />
    </div>
  )
}