import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDocs, collection, Firestore, getFirestore, doc, setDoc, getDoc, addDoc } from 'firebase/firestore/lite';

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

export async function createUserRecord(id: string, name: string, lastName: string) {
  await setDoc(doc(db, "users", id), { name: `${name}`, lastName: `${lastName}` })
}
export async function showUserData(id: string) {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }

}

export async function createPoint(lng: number, lat: number, type: string, description: string) {
  
  try {
    let point = {
      lng: lng,
      lat: lat,
      type: type,
      description: description,
    }
    await addDoc(collection(db, "points"), point)

    const querySnapshot = await getDocs(collection(db, "points"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });

    return point;
  }
  catch (err) {
    alert(err);
  }
}
