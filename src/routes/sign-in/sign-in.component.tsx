import { useEffect } from "react";
import {getRedirectResult} from 'firebase/auth';

//signing in with googleRedirect is an optional method we learnt and can delete everything about this method
//we can continue using googlePopup for sign in

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import { 
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(() => {
    const fetchData = async () => {      
    const response = await getRedirectResult(auth);
    console.log(response);
    }
    fetchData();
  }, [])

  const logGoogleUser = async () => {
    //user is destructured from response
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser} >Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect} >Sign in with Google Redirect</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn;