import React from 'react';
import './styles/App.css';
import { BrowserRouter, Router } from 'react-router-dom';
import Navbar from './components/NavBar';
import AppRouter from './components/AppRouter';

export const isAuth: boolean = true;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};

export default App;
