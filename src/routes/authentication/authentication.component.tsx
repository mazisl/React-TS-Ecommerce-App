import { useEffect } from "react";
import {getRedirectResult} from 'firebase/auth';
import './authentication.styles.scss'

//signing in with googleRedirect is an optional method we learnt and can delete everything about this method
//we can continue using googlePopup for sign in

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";


const Authentication = () => {

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication;