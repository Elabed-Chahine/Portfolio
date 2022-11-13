
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyC7cro0u2kLBvulUsYj8V4XhmQOniKV2pY',
  authDomain: 'portfolio-793fe.firebaseapp.com',
  projectId: 'portfolio-793fe',
  storageBucket: 'portfolio-793fe.appspot.com',
  messagingSenderId: '1024767127481',
  appId: '1:1024767127481:web:7f5b5e90a2ae05b347d068',
  measurementId: 'G-WPFWK2Q38G',
}


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);