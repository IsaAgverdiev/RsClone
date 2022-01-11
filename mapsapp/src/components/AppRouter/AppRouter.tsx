import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../pages/Home';
import Main from '../../pages/Main';
import SignUp from './../auth/SignUp';
import SignIn from './../auth/SignIn';
import Forgot from '../auth/Forgot';
import Feature1 from '../../pages/features/Feature1';
import Feature2 from '../../pages/features/Feature2';
import Feature3 from '../../pages/features/Feature3';
import PersistentDrawerLeft from '../../pages/Main/components/DrawerMenu/DrawerMenu';

interface AppRouterProps {
  authorized: boolean;
  name: string | null;
}

const AppRouter: React.FC<AppRouterProps> = ({ authorized, name }) => {
  return authorized ? (
    <Routes>
      <Route path='/home' element={<Home />} />
      {/* <Route path='main' element={<Main />} > */}
      <Route path='main' element={<PersistentDrawerLeft />} >
        {/* <Route path="Feature1" element={<Feature1 />} />
        <Route path="Feature2" element={<Feature2 />} />
        <Route path="Feature3" element={<Feature3 />} /> */}
      </Route>

      <Route path='/sign_up' element={<SignUp />} />
      <Route path="main/Feature1" element={<Feature1 />} />
      <Route path="main/Feature2" element={<Feature2 />} />
      <Route path="main/Feature3" element={<Feature3 />} />
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
