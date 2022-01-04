import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../router/Routes';
import { isAuth } from '../../App';

const AppRouter: React.FC = () => {
  return isAuth ? (
    <Routes>
      {privateRoutes.map(route => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(route => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
