import './KPI.css'

const KPI = ({title, children, className, value}) => {
    
    return (
      <div className={`KPI ${className}`}>
            <span className='KPI-text'>{value}</span>
      </div>
    )
  }
  
  export default KPI