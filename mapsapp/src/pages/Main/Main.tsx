import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Typography } from '@mui/material';
import SignedInLinks from '../../components/NavBar/components/SignedInLinks';
import AppBar from './components/AppBar';
import MainSection from './components/MainSection';
import DrawerHeader from './components/DrawerHeader';
import DrawerFooter from '../../components/Footer/Footer';

export const drawerWidth = 240;

export default function Main() {
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
      <AppBar position='fixed' open={open}>
        <Toolbar>
          <Box className='menu'>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              sx={{ mr: 2, ...(open && { display: 'none' }) }}>
              <MenuIcon />
            </IconButton>

            <Link to='/home' className='nav-logo'>
              <Typography variant='h6' noWrap sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                Maps App
              </Typography>
            </Link>
            <SignedInLinks />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Feature1', 'Feature2', 'Feature3', 'Feature4'].map((text, index) => (
            <NavLink to={text} key={text}>
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText sx={{ color: 'black' }} primary={text} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
      <MainSection open={open}>
        <DrawerHeader />
        <Outlet />
        <DrawerFooter />
      </MainSection>
    </Box>
  );
}
