import KPICard from '@/components/KPICard';
import styles from './styles.module.css';
import KPIGrid from '@/components/KPIGrid';

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
      />
      <KPICard 
        title="Usuários Ativos" 
        value={data.activeUsers.toLocaleString()} 
        description={`${((data.activeUsers / data.totalUsers) * 100).toFixed(1)}% do total`}
      />
      <KPICard 
        title="Usuários Inativos" 
        value={data.inactiveUsers.toLocaleString()} 
        description={`${((data.inactiveUsers / data.totalUsers) * 100).toFixed(1)}% do total`}
      />
      <KPICard 
        title="Novos Cadastros" 
        value={data.newUsersThisMonth.toLocaleString()} 
        description="Este mês"
      />
      <KPICard 
        title="Engajamento Médio" 
        value={`${data.averageEngagement}%`} 
        description="+5.2% esta semana"
      />
      </KPIGrid>
  )
}