import React, { useState } from 'react';
import './styles/App.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/NavBar';

export const isAuth: boolean = true;

const App: React.FC = () => {
  const [authState, setAuthState] = useState(true)

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <AppRouter  />
      </div>
    </BrowserRouter>
  );
};

export default App;
