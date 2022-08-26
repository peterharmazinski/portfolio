import { AppBar, Box, Link, Typography } from '@mui/material'
import { header } from '../../config'
import MiniDrawer from '../MiniDrawer/MiniDrawer'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = ({ modalOpen, toggleModal }) => {
  const { homepage, logo } = header

  return (

      <MiniDrawer logo={logo} modalOpen={modalOpen} toggleModal={toggleModal}/>

  )
}

export default Header
