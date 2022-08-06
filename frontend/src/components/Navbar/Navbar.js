import { useContext, useState } from 'react'
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { ColorModeContext } from '../../contexts/theme'
import { projects, technical_skills, soft_skills, contact } from '../../config'
import { HashLink } from 'react-router-hash-link';
import './Navbar.css'
import { AppBar, Box, IconButton, List, ListItem, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <Box component='nav' className='nav' style={{display: 'inline-flex'}} >
      <List
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {projects.length ? (
          <ListItem className='nav__list-item'>
            <Typography>
              <HashLink
                to='#projects'
                onClick={toggleNavList}
                className='link link--nav'
              >
                Projects
              </HashLink>
            </Typography>
          </ListItem>
        ) : null}

        {technical_skills.length ? (
          <ListItem className='nav__list-item'>
            <Typography>
              <HashLink
                to='#skills'
                onClick={toggleNavList}
                className='link link--nav'
              >
                Skills
              </HashLink>
            </Typography>
          </ListItem>
        ) : null}
        <ListItem>
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
          </IconButton>
        </ListItem>
      </List>

      

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </Box>
  )
}

export default Navbar
