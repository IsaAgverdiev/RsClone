import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../pages/Home';
import Main from '../../pages/Main';
import SignUp from '../Auth/SignUp';
import SignIn from '../Auth/SignIn';
import Forgot from '../Auth/Forgot';

interface AppRouterProps {
  authorized: boolean;
  name: string | null;
}

const AppRouter: React.FC<AppRouterProps> = ({ authorized, name })  => {
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
