import { AppBar, Box, Link, Typography } from '@mui/material'
import { header } from '../../config'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = ({ title }) => {
  const { homepage, logo } = header

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar component='header' className='header' position="static" sx={{p: '24px 80px 24px 80px', boxShadow: 0}} style={{ flexDirection: 'row', alignItems: 'center' }}  color='transparent'>
      <Typography variant='h4' component='div' sx={{ flexGrow: 1 }} edge="start" style={{paddingLeft: '10x'}} color='primary'>
            {logo}
      </Typography>
      <Navbar />
    </AppBar>
    </Box>
  )
}

export default Header
