import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

// import { UserContext } from "../../contexts/user.context";

import './sign-up-form.styles.scss';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;

  console.log(formFields);

  // const {setCurrentUser} = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const {user} = await  createAuthUserWithEmailAndPassword(
        email, 
        password
      );
      // setCurrentUser(user);
      await createUserDocumentFromAuth(user, {displayName});
      resetFormFields();

    } catch(error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log("Error creating user: ", error);
      }
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
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        
        <FormInput label='Display Name' type="text" onChange={handleChange} name="displayName" value={displayName} required/>

        <FormInput label='Email' type="email" onChange={handleChange} name="email" value={email} required/>

        <FormInput label='Password' type="password" onChange={handleChange} name="password" value={password} required/>

        <FormInput label='Confirm Password' type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required/>

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm;