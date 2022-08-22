import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { grey } from '@mui/material/colors';
import MiniDrawerListItem from './MiniDrawerListItem';
import WorkIcon from '@mui/icons-material/Work';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SvgIcon from '@mui/material/SvgIcon';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Avatar } from '@mui/material';
import ProfilePicture from '../../profile_picture.jpg';
import { about } from '../../config';

const drawerWidth = 240;

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
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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

export default function MiniDrawer({logo}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} elevation={2} sx={{bgcolor: 'background.default'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon sx={{color: grey[800]}} />
          </IconButton>
          <Typography variant='h4' component='div' sx={{ flexGrow: 1 }} edge="start" style={{paddingLeft: '10x'}} color='primary'>
              {logo}
        </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} PaperProps={{sx: {borderRight: 'solid 1px lightgray'}}}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <MiniDrawerListItem text='Projects' href='#' open='open' >
                <Avatar id='hero-image' alt='Peter Harmazinski' src={ProfilePicture} sx={{ boxShadow: 3 }} style={{ height: '24px', width: '24px' }} />
            </MiniDrawerListItem>
            <MiniDrawerListItem text='Projects' href='#projects' open='open' >
                <WorkIcon />
            </MiniDrawerListItem>
            <MiniDrawerListItem text='Skills' href='#skills' open='open' >
                <SportsMartialArtsIcon />
            </MiniDrawerListItem>
        </List>
        <Divider />
        <List>
            <MiniDrawerListItem text='Skills' href={about.social.linkedin} open='open' >
                <LinkedInIcon />
            </MiniDrawerListItem>
            <MiniDrawerListItem text='Skills' href='#skills' open='open' >
                <PictureAsPdfIcon />
            </MiniDrawerListItem>
            <MiniDrawerListItem text='Skills' href='#skills' open='open' >
                <SvgIcon viewBox='0 0 31 31'>
                    <path d='M15.536 0.235v2.937h-2.624v0.771h2.624v2.937h0.933v-2.937h2.624v-0.771h-2.624v-2.937zM23.579 3.251v4.328h-3.943v1.233h3.943v4.251h1.391l0.009-2.109 0.032-2.099 1.953-0.032 1.943-0.011v-1.233h-3.937v-4.328zM7.036 3.328v4.256h-3.984v1.228h3.984v4.256h1.313v-4.256h4.015v-1.233h-4.015v-4.251zM15.151 10.355v4.791h-4.405v1.584h4.405v4.797h1.709v-4.797h4.411v-1.584h-4.411v-4.791zM28.115 12.421v2.959h-2.688v1.084h2.688v3.015h1.183v-3.015h2.703v-1.084h-2.703v-2.959zM2.631 12.593v2.901h-2.631v0.828h2.631v2.928h0.891v-2.928h2.667v-0.828h-2.709v-2.901zM23.579 18.62v4.339h-4.027v1.235h4.027v4.285h1.427v-4.285h3.979v-1.235h-3.979v-4.339zM6.959 18.631v4.328h-3.943v1.235h3.943v4.255h1.468v-4.255h3.937v-1.235h-3.937v-4.333h-0.733zM15.38 24.735v2.937h-2.625v1.077h2.625v3.016h1.24l0.016-1.489 0.020-1.527h2.631v-1.077h-2.667v-2.937z' />
                </SvgIcon>
            </MiniDrawerListItem>
            <MiniDrawerListItem text='Skills' href='#skills' open='open' >
                <GitHubIcon />
            </MiniDrawerListItem>
        </List>
      </Drawer>
    </Box>
  );
}
