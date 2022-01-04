import React from 'react';
import { NavLink } from 'react-router-dom';

function SignedInLinks() {
  return (
    <ul>
      <li>
        <NavLink to='home'>Home</NavLink>
      </li>
      <li>
        <NavLink to='main'>Main</NavLink>
      </li>
      <li>
        <NavLink to='/'>NN</NavLink>
      </li>
      <li>
        <NavLink to='/'>Log Out</NavLink>
      </li>
    </ul>
  );
}

export default SignedInLinks;
