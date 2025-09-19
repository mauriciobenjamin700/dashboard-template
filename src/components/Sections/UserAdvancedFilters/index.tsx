import styles from "./styles.module.css"
import { SlidersVertical } from "lucide-react";

interface FilterState {
  searchTerm: string;
  statusFilter: string;
  ageFilter: string;
  engagementFilter: string;
  diagnosisFilter: string;
  personalityFilter: string;
  loveLanguageFilter: string;
}

interface UserAdvancedFiltersProps {
    filters: FilterState;
    setSearchTerm: (value: string) => void;
    setStatusFilter: (value: string) => void;
    setAgeFilter: (value: string) => void;
    setEngagementFilter: (value: string) => void;
    setDiagnosisFilter: (value: string) => void;
    setPersonalityFilter: (value: string) => void;
    setLoveLanguageFilter: (value: string) => void;
}


export default function UserAdvancedFilters({ 
    filters, 
    setSearchTerm, 
    setStatusFilter, 
    setAgeFilter, 
    setEngagementFilter, 
    setDiagnosisFilter, 
    setPersonalityFilter, 
    setLoveLanguageFilter
}: UserAdvancedFiltersProps
){
    function clearAllFilters() {
        setSearchTerm("");
        setStatusFilter("all");
        setAgeFilter("all");
        setEngagementFilter("all");
        setDiagnosisFilter("all");
        setPersonalityFilter("all");
        setLoveLanguageFilter("all");
    }
  return (
    <section className={styles.filtersCard}>
        <div className={styles.filtersHeader}>
          <span 
            className={styles.filtersTitle}
            >
              <SlidersVertical size={25} style={{ marginRight: "0.5rem", verticalAlign: "middle" }} />
              Filtros Avançados
          </span>
          <button className={styles.clearButton} onClick={clearAllFilters}>Limpar Filtros</button>
        </div>
        <div className={styles.filtersGrid}>
          <input
            type="text"
            placeholder="Buscar por nome ou email..."
            value={filters.searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.input}
          />
          <select value={filters.statusFilter} onChange={e => setStatusFilter(e.target.value)} className={styles.select}>
            <option value="all">Todos os Status</option>
            <option value="active">Ativos</option>
            <option value="inactive">Inativos</option>
          </select>
          <select value={filters.ageFilter} onChange={e => setAgeFilter(e.target.value)} className={styles.select}>
            <option value="all">Todas as Idades</option>
            <option value="18-25">18-25 anos</option>
            <option value="26-35">26-35 anos</option>
            <option value="36-45">36-45 anos</option>
            <option value="46+">46+ anos</option>
          </select>
          <select value={filters.engagementFilter} onChange={e => setEngagementFilter(e.target.value)} className={styles.select}>
            <option value="all">Todos os Níveis</option>
            <option value="high">Alto (80%+)</option>
            <option value="medium">Médio (60-79%)</option>
            <option value="low">Baixo (&lt;60%)</option>
          </select>
          <select value={filters.diagnosisFilter} onChange={e => setDiagnosisFilter(e.target.value)} className={styles.select}>
            <option value="all">Todos os Diagnósticos</option>
            <option value="ansiedade">Ansiedade</option>
            <option value="depressão">Depressão</option>
            <option value="tdah">TDAH</option>
            <option value="bipolaridade">Bipolaridade</option>
            <option value="toc">TOC</option>
          </select>
          <select value={filters.personalityFilter} onChange={e => setPersonalityFilter(e.target.value)} className={styles.select}>
            <option value="all">Todas as Personalidades</option>
            <option value="introvertido">Introvertido</option>
            <option value="extrovertido">Extrovertido</option>
            <option value="sensível">Sensível</option>
            <option value="otimista">Otimista</option>
            <option value="analítico">Analítico</option>
          </select>
          <select value={filters.loveLanguageFilter} onChange={e => setLoveLanguageFilter(e.target.value)} className={styles.select}>
            <option value="all">Todas as Linguagens</option>
            <option value="palavras">Palavras de Afirmação</option>
            <option value="tempo">Tempo de Qualidade</option>
            <option value="toque">Toque Físico</option>
            <option value="atos">Atos de Serviço</option>
            <option value="presentes">Presentes</option>
          </select>
        </div>
    </section>
    )
};