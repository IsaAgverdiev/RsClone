import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountMenu from '../../../../pages/Main/components/AccountMenu';
import './SignedInLinks.scss';

interface SignedInLinksProps {
}


const SignedInLinks: React.FC<SignedInLinksProps> = ()  => {
  return (
    <>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <NavLink to='home'>Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='main'>Main</NavLink>
          </li>
          <li className='nav-item nav-item__right'>
            <AccountMenu />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SignedInLinks;
