import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountMenu from '../../../../pages/Main/components/AccountMenu';
import './SignedInLinks.scss';
import { Box, Typography } from '@mui/material';

interface SignedInLinksProps {
  name: string | null;
}

const SignedInLinks: React.FC<SignedInLinksProps> = ({ name }) => {
  return (
    <>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <NavLink to='/home'>Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/main'>Main</NavLink>
          </li>
          <li className='nav-item nav-item__right'>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              <Typography align='justify'>{name}</Typography>
            </Box>
            <AccountMenu />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SignedInLinks;
