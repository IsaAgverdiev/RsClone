import React from 'react';
import { NavLink } from 'react-router-dom';

function SignedInLinks() {
  return (
    <ul>
      <li>
        <NavLink to='/'>Маршруты</NavLink>
      </li>
      <li>
        <NavLink to='/'>Выйти</NavLink>
      </li>
      <li>
        <NavLink to='/'>NN</NavLink>
      </li>
    </ul>
  );
}

export default SignedInLinks;
