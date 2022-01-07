import React, { useState } from 'react';
import './styles/App.scss';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/NavBar';
import AppRouter from './components/AppRouter';

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
