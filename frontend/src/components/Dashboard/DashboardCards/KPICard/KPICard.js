import DashboardCard from '../DashboardCard/DashboardCard'
import KPI from '../../KPI/KPI';
import './KPICard.css'

const KPICard = ({title, value, className}) => {
    
    return (
      <DashboardCard className={`DashboardCard-kpiCard ${className}`} title={title}>
        <KPI value={value}/>
      </DashboardCard>
    )
  }
  
  export default KPICard