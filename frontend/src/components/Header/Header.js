import { AppBar, Box, Link, Typography } from '@mui/material'
import { header } from '../../config'
import MiniDrawer from '../MiniDrawer/MiniDrawer'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = ({ title }) => {
  const { homepage, logo } = header

  return (

      <MiniDrawer logo={logo}/>

  )
}

export default Header
