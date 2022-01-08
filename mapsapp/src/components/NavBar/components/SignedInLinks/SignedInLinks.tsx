import React, { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import AccountMenu from '../../../../pages/Main/components/menu/AccountMenu';
import './SignedInLinks.scss';

interface SignedInLinksProps {
  authorized: boolean,
  setAuthorized: Dispatch<SetStateAction<boolean>>
}
const SignedInLinks: React.FC<SignedInLinksProps> = ({authorized, setAuthorized})  => {

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
            <AccountMenu authorized={authorized} setAuthorized={setAuthorized}/>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SignedInLinks;
