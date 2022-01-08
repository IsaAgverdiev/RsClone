import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import AppRouter from './components/AppRouter';
import Navbar from './components/NavBar';
import store from './store/store';
import './styles/App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <AppRouter />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
