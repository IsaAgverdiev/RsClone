import * as React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './components/SignedInLinks';
import SignedOutLinks from './components/SignedOutLinks';
import { isAuth } from '../../App';
import { Grid } from '@mui/material';

const Navbar: React.FC = () => {
  return isAuth ? (
    <nav className='nav-wrapper'>
      <div className='container'>
        <Link to='/' className='nav-logo'>
          Maps App
        </Link>
        <SignedInLinks />
      </div>
    </nav>
  ) : (
    <nav className='nav-wrapper'>
      <div className='container'>
        <Grid>
          <Link to='home' className='nav-logo'>
            Maps App
          </Link>
          <SignedOutLinks />
        </Grid>
      </div>
    </nav>
  );
};

export default Navbar;
