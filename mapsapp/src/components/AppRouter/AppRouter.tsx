import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../pages/Home';
import Feature1 from '../../pages/features/Feature1';
import Feature2 from '../../pages/features/Feature2';
import Feature3 from '../../pages/features/Feature3';
import Profile from '../../pages/Profile';
import Settings from '../../pages/Settings';
import SignUp from '../Auth/SignUp';
import SignIn from '../Auth/SignIn';
import Forgot from '../Auth/Forgot';
import Main from '../../pages/Main';
import Map from '../../pages/Main/components/Map'
interface AppRouterProps {
  authorized: boolean;
  name: string | null;
}

const AppRouter: React.FC<AppRouterProps> = ({ authorized, name }) => {
  return authorized ? (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/sign_up' element={<SignUp />} />
      <Route path='main' element={<Main />} >
        <Route index element={<Map />}/>
        <Route path="Feature1" element={<Feature1 />} />
        <Route path="Feature2" element={<Feature2 />} />
        <Route path="Feature3" element={<Feature3 />} />
        <Route path='/main/profile' element={<Profile />} />
        <Route path='/main/settings' element={<Settings />} />
      </Route>
      <Route path='*' element={<Navigate to='/main' />} />
    </Routes>
  ) : (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/sign_up' element={<SignUp />} />
      <Route path='/forgot' element={<Forgot />} />
      <Route path='/sign_in' element={<SignIn />} />
      <Route path='*' element={<Navigate to='/sign_in' />} />
    </Routes>
  );
};
export default AppRouter;




