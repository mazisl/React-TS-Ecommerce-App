import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

// import { UserContext } from "../../contexts/user.context";

import './sign-in-form.styles.scss';

import { 
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: '',
  password: ''
}

//to use context in this component we:
//1. import useContext hook
//2. import UserContext from contexts
//this UserContext will give us back whatever value we passed in for it's value
//to utilize the useContext hook and the value from UserContext we set the value as in line 31 i.e. const {setCurrentUser} = useContext(UserContext);

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  // const {setCurrentUser} = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    //user is destructured from response
    await signInWithGooglePopup();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(
        email, 
        password
      );
      // setCurrentUser(user);

      resetFormFields();

    } catch(error) {
      if (error.code === 'auth/invalid-credential') {
        alert('incorrect login details')
      }
      console.log(error)
    }
  }

  //here [name] is used to dynamically compute the name of the property depending on the input field used
  //value is whatever has been typed inside that input field
  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value})
  }
  
  //all props other than label is spread out as 'otherInputProps' inside FormInput component
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        
        <FormInput label='Email' type="email" onChange={handleChange} name="email" value={email} required/>

        <FormInput label='Password' type="password" onChange={handleChange} name="password" value={password} required/>

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;