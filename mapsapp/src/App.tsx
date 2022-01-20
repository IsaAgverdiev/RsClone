import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRouter from './components/AppRouter';
import store from './store/store';
import './styles/App.scss';
import { db, getFirebaseFolder } from './firebase';

async function showUsers() {
  const usersList = await getFirebaseFolder(db, 'users');
  console.log(usersList);
}
showUsers();

async function showPoints() {
  const pointsList = await getFirebaseFolder(db, 'points')
  console.log('%cApp.tsx line:17 pointsList', 'color: #26bfa5;', pointsList);
}

showPoints();

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
