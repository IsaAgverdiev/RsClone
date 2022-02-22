import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRouter from './components/AppRouter';
import store from './store/store';
import './styles/App.scss';
import { db, getFirebaseFolder } from './firebase';
import LoadingScreen from './components/LoadingScreen'

async function showUsers() {
  const usersList = await getFirebaseFolder(db, 'users');
  console.log(usersList);
}
showUsers();


const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
           <AppRouter/>
         <LoadingScreen/>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
