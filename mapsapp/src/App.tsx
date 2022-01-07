import React, { useState } from 'react';
import './styles/App.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/NavBar';

const App = () => {
  const [isAuth, setIsAuth] = useState(true)

  console.log('%cApp.tsx line:12 isAuth', 'color: #007acc;', isAuth);
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar   />
        <AppRouter authorized={isAuth} setAuthorized={setIsAuth} />
      </div>
    </BrowserRouter>
  );
};

export default App;
