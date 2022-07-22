import Card from '@mui/material/Card';
import './DashboardCard.css'

const DashboardCard = ({title, children, className}) => {
    
    return (
      <Card className={`DashboardCard ${className}`} boxShadow={3}>
        <h2 className='DashboardCard-title'>{title}</h2>
        {children}
      </Card>
    )
  }
  
  export default DashboardCard