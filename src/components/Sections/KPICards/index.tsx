import KPICard from '@/components/KPICard';
import KPIGrid from '@/components/KPIGrid';
import { UserCheck, ChartNoAxesCombined, Users } from "lucide-react";


interface KPIData {
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
  newUsersThisMonth: number;
  averageEngagement: number; // percentage
}

export default function KPICards(data: KPIData) {
  return (
    <KPIGrid gridColumns={5}>
      <KPICard 
        title="Total de Usuários" 
        value={data.totalUsers.toLocaleString()} 
        description="+12% em relação ao mês anterior"
        icon={<Users />}
      />
      <KPICard 
        title="Usuários Ativos" 
        value={data.activeUsers.toLocaleString()} 
        description={`${((data.activeUsers / data.totalUsers) * 100).toFixed(1)}% do total`}
        icon={<UserCheck color="#22c55e" />}
      />
      <KPICard 
        title="Usuários Inativos" 
        value={data.inactiveUsers.toLocaleString()} 
        description={`${((data.inactiveUsers / data.totalUsers) * 100).toFixed(1)}% do total`}
        icon={<UserCheck color="#ef4444" />}
      />
      <KPICard 
        title="Novos Cadastros" 
        value={data.newUsersThisMonth.toLocaleString()} 
        description="Este mês"
        icon={<UserCheck className="cardIcon" />}
      />
      <KPICard 
        title="Engajamento Médio" 
        value={`${data.averageEngagement}%`} 
        description="+5.2% esta semana"
        icon={<ChartNoAxesCombined className="cardIcon" />}
      />
      </KPIGrid>
  )
}