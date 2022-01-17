import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRouter from './components/AppRouter';
import store from './store/store';
import './styles/App.scss';
import db from './firebase';
import { getDocs, collection, Firestore } from 'firebase/firestore/lite';

async function getUsers(db: Firestore) {
  const usersSnapshot = await getDocs(collection(db, 'users'));
  const usersList = usersSnapshot.docs.map(doc => doc.data());
  return usersList;
}

async function showUsers() {
  const usersList = await getUsers(db);
  console.log(usersList);
}
showUsers();

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
