import { useContext } from "react";
import { Outlet, Link } from "react-router-dom"
import './navigation.styles.scss'

import CrownLogo from '../../assets/crown.svg?react'
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

//in this component we want to display a Sign Out link if a user is signed in
const Navigation = () => {

  const {currentUser} = useContext(UserContext);

  //we create this method to make sure that user sign-out is based on the context
  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  // }

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <CrownLogo className="logo" />
        </Link>
        
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>

          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
            ) : (
              <Link className="nav-link" to="/auth">
                SIGN IN
              </Link>
            )
          }
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation;