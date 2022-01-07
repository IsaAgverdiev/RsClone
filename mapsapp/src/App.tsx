import React, { useState } from 'react';
import './styles/App.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/NavBar';

export const isAuth = true;

const App = () => {
  const [isAuth, setIsAuth] = useState(true)

  console.log('%cApp.tsx line:12 isAuth', 'color: #007acc;', isAuth);
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar   />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};

export default App;
