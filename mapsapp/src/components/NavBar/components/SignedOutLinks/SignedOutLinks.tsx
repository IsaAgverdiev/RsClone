import React from 'react';
import { NavLink } from 'react-router-dom';

function SignedOutLinks() {
  return (
    <>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <NavLink to='home'>Home</NavLink>
          </li>
          <li className='nav-item nav-item__right'>
            <NavLink to='/sign_in'>Sign In</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SignedOutLinks;
