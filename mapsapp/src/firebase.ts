import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyCD99UpQJevso1Zx51dshiXOb1vZP2J29Y',
  authDomain: 'chrismas-5ebcd.firebaseapp.com',
  databaseURL: 'https://chrismas-5ebcd-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'chrismas-5ebcd',
  storageBucket: 'chrismas-5ebcd.appspot.com',
  messagingSenderId: '386032679845',
  appId: '1:386032679845:web:cd2e64473a68f85c0b464c',
  measurementId: 'G-C088NMZVEZ',
};

const firebaseApp = initializeApp(firebaseConfig);
// const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export default db;
