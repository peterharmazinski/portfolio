import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';

export default function PermanentDrawer({drawerWidth, children, open, handleDrawerOpen, handleDrawerClose, DrawerHeader}) {
    const theme = useTheme();

    const openedMixin = (theme) => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
      });
      
      const closedMixin = (theme) => ({
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: '65px',
        [theme.breakpoints.down('md')]: {
          width: `0px`,
        },
      });

      const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
          width: drawerWidth,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
          }),
          ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
          }),
        }),
      );

      
    
    return (
        <Drawer className='permanent-drawer' variant="permanent" open={open} PaperProps={{sx: {borderRight: 'solid 1px lightgray'}}}>
            <DrawerHeader>
                { !open ? (
                    <IconButton
         
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                      ...(open && { display: 'none' }),
                      minHeight: 48,
                            justifyContent: 'center',
                            px: 1.5,
                    }}
                  >
                    <MenuIcon  />
                  </IconButton>
                ) : (
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
                )}
            </DrawerHeader>
            <Divider sx={{backgroundColor: 'lightgray'}} />
            {children}
        </Drawer>
      );
}