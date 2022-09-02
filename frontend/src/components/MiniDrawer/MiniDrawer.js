import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MiniDrawerList from './MiniDrawerList';
import PermanentDrawer from './PermanentDrawer';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 170;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',})(
    ({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  

export default function MiniDrawer({logo, modalOpen, toggleModal}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', overflowX: 'hidden'}}>
      <CssBaseline />
      <PermanentDrawer drawerWidth={drawerWidth} open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} DrawerHeader={DrawerHeader}>
        <MiniDrawerList modalOpen={modalOpen} toggleModal={toggleModal}/>
      </PermanentDrawer>
      <AppBar position="static" open={open} elevation={0} color='transparent' sx={{m: 0, minHeight: '64px'}}>
        <Toolbar>
        <IconButton
         
         aria-label="open drawer"
         onClick={handleDrawerOpen}
         edge="start"
         sx={{
           ...(open && { display: 'none !important' }),
           minHeight: 48,
                 justifyContent: 'center',
                 px: 1.5,
         }}
         className='menu-icon-mobile'
       >
         <MenuIcon  />
       </IconButton>
          <Typography variant='h4' component='div' sx={{ flexGrow: 1 }}  color='primary'>
              {logo}
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
