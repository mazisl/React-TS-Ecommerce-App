//context is basically a component that wraps around other components that need access to this context
//it's a component that exclusively stores things
//here we use it inside our sign-in-form-component

import {createContext, useState, useEffect} from 'react';

import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

//actual value we want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

//our main App from App.tsx is wrapped inside UserProvider
//therefore, it takes App as children
//UserContext.Provider will also hold the values we create inside UserContext thru value prop
//UserProvider lets it's children components have access to any values inside useState
export const UserProvider = ({children}) => {

  const [currentUser, setCurrentUser] = useState(null);
  const value = {currentUser, setCurrentUser};

  // signOutUser();
  //we centralize all code related to authentication in onAuthStateChangedListener

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    })
    return unsubscribe;
  }, [])

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}