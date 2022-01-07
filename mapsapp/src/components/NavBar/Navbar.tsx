import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import SignedInLinks from './components/SignedInLinks';
import SignedOutLinks from './components/SignedOutLinks';
// import { isAuth } from '../../App';
import { Typography } from '@mui/material';
import './Navbar.scss';

const Navbar: React.FC = () => {

  let isAuth = true
 
  return isAuth ? (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Box className='menu'>
            <Link to='/home' className='nav-logo'>
              <Typography variant='h6' noWrap sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                Maps App
              </Typography>
            </Link>
            <SignedInLinks />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  ) : (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Box className='menu'>
            <Link to='home' className='nav-logo'>
              <Typography variant='h6' noWrap sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                Maps App
              </Typography>
            </Link>
            <SignedOutLinks />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
