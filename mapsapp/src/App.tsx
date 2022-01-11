import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRouter from './components/AppRouter';
import store from './store/store';
import './styles/App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          <AppRouter />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
