import React from 'react';
import './styles/App.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/NavBar';

export const isAuth: boolean = false;

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
