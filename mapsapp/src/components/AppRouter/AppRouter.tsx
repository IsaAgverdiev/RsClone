import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../pages/Home';
import Main from '../../pages/Main';
import SignUp from './../auth/SignUp';
import SignIn from './../auth/SignIn';
import Forgot from '../auth/Forgot';
import { Dispatch, SetStateAction } from 'react';
import Navbar from '../NavBar/Navbar';

interface AppRouterProps {
  authorized: boolean;
}

const AppRouter: React.FC<AppRouterProps> = ({ authorized })  => {
  return authorized ? (

    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/main' element={<Main />} />
      <Route path='/sign_up' element={<SignUp />} />
      <Route
        path="*"
        element={<Navigate to="/main" />}
      />
    </Routes>
   
  ) : (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/sign_up' element={<SignUp />} />
      <Route path='/forgot' element={<Forgot />} />
      <Route path='/sign_in' element={<SignIn />} />
      <Route
        path="*"
        element={<Navigate to="/sign_in" />}
      />
    </Routes>
  );
};
export default AppRouter;
