
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
 
const firebaseConfig = {
  apiKey: "AIzaSyDzeYw0sVgeVU-byvzis6AhLQvMNKBpOSc",
  authDomain: "mefit-5d6c1.firebaseapp.com",
  projectId: "mefit-5d6c1",
  storageBucket: "mefit-5d6c1.appspot.com",
  messagingSenderId: "107535200403",
  appId: "1:107535200403:web:37233c2a756aed34089d66",
  measurementId: "G-9RMMK1JLZY",
};


const fireapp = initializeApp(firebaseConfig);
export const db = getFirestore(fireapp);
export const auth = getAuth(fireapp);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(fireapp);
