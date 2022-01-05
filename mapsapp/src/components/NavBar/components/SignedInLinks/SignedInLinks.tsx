import React from 'react';
import { NavLink } from 'react-router-dom';
import './SignedInLinks.scss';

function SignedInLinks() {
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
            <NavLink to='/'>Log Out</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SignedInLinks;
