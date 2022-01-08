import React, { useState } from 'react';
import './styles/App.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/NavBar';

const App = () => {
  const [isAuth, setIsAuth] = useState(true)

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar authorized={isAuth} setAuthorized={setIsAuth}   />
        <AppRouter authorized={isAuth} />
      </div>
    </BrowserRouter>
  );
};

export default App;
