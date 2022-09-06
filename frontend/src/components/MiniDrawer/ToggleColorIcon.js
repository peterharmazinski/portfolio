import { useContext } from 'react';
import { Avatar, Box, IconButton } from '@mui/material'
import MiniDrawerListItem from './MiniDrawerListItem'
import ProfilePicture from '../../profile_picture.jpg';
import DarkMode from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';
import { ColorModeContext } from '../../contexts/theme';
import { useTheme } from '@mui/material/styles';


const ToggleColorIcon = () => {
  const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

  return (
    <MiniDrawerListItem text='Mode' href='/' open='open' onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
    </MiniDrawerListItem>
  )
}

export default ToggleColorIcon
