import React from 'react';
import { NavLink } from 'react-router-dom';

function SignedOutLinks() {
  return (
    <ul>
      <li>
        <NavLink to='/signup'>Зарегистрироваться</NavLink>
      </li>
      <li>
        <NavLink to='/signin'>Войти</NavLink>
      </li>
    </ul>
  );
}

export default SignedOutLinks;
