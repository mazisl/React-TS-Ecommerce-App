//adding our app to firebase
import { initializeApp } from "firebase/app";

import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";

//doc is used to create a document instance
//getDoc is used to access that doc's data
//setDoc is used to set that doc's data
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD19wBxqYr7ufr05VmdON7pddzfrh9Q5p4",
  authDomain: "crown-clothing-db-4addf.firebaseapp.com",
  projectId: "crown-clothing-db-4addf",
  storageBucket: "crown-clothing-db-4addf.appspot.com",
  messagingSenderId: "659397069986",
  appId: "1:659397069986:web:76dda3f109297b95ce9bfb"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return; // User not logged in
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}