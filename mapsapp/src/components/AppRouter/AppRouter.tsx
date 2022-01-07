import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { isAuth } from '../../App';
import Home from '../../pages/Home';
import Main from '../../pages/Main';
import SignUp from './../auth/SignUp';
import SignIn from './../auth/SignIn';
import Forgot from '../auth/Forgot';
import { Dispatch, SetStateAction } from 'react';
import Navbar from '../NavBar/Navbar';

interface AppRouterProps {
  authorized: boolean;
  setAuthorized: Dispatch<SetStateAction<boolean>>
}

const AppRouter = () => {
  console.log('%cAppRouter.tsx line:18 isAuth', 'color: #007acc;', isAuth);
  return isAuth ? (

    <Routes>
      <Route path='*' element={<Main />} />
      <Route path='/home' element={<Home />} />
      <Route path='/main' element={<Main />} />
      <Route path='/sign_up' element={<SignUp />} />
    </Routes>
   
  ) : (
    <Routes>
      <Route path='*' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/sign_up' element={<SignUp />} />
      <Route path='/forgot' element={<Forgot />} />
      <Route path='/sign_in' element={<SignIn />} />
    </Routes>
  );
};
export default AppRouter;
