import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getDocs,
  collection,
  Firestore,
  getFirestore,
  doc,
  setDoc,
  addDoc,
  getDoc,
} from 'firebase/firestore/lite';
import { Point } from './types';


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

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

export async function getFirebaseFolder(db: Firestore, folderName: string) {
  const dataSnapshot = await getDocs(collection(db, folderName));
  const dataList = dataSnapshot.docs.map(doc => doc.data());
  return dataList;
}

export async function showPoints() {
  const pointsList = await getFirebaseFolder(db, 'points');
  console.log('%cApp.tsx line:17 pointsList', 'color: #26bfa5;', pointsList);
  return pointsList;
}

export async function createUserRecord(name: string, lastName: string) {
  const docRef = await addDoc(collection(db, 'users'), {
    personalInfo: {
      lastName: lastName,
      name: name,
    },
  });
}

export async function showUserData(id: string) {
  const docRef = doc(db, 'users', id);
  const docSnap = await getDoc(docRef);
  console.log(docSnap)
  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    console.log('No such document!');
  }
}

export async function showUsersData() {
  const docRef = doc(db, 'users');
  const docSnap = await getDoc(docRef);
  console.log(docSnap)
  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    console.log('No such document!');
  }
}

export async function addPointDb(point: Point) {
  try {
    await addDoc(collection(db, "points"), point);
    const querySnapshot = await getDocs(collection(db, "points"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  }
  catch (err) {
    alert(err);
  }
}
