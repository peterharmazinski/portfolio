import { useContext } from 'react'
import { ColorModeContext } from '../contexts/theme'
import Dashboard from '../components/Dashboard/Dashboard/Dashboard'
import '../App.css'

const Dashboards = () => {
  const colorMode = useContext(ColorModeContext);


  return (
    <div id='top' className={`${colorMode} app`}>
      <Dashboard title='Houston Weather' />
    </div>
  )
}

export default Dashboards
