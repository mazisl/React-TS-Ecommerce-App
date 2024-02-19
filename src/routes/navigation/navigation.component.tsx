import { Outlet, Link } from "react-router-dom"
import './navigation.styles.scss'

import CrownLogo from '../../assets/crown.svg?react'

const Navigation = () => {
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
          
          <Link className="nav-link" to='/auth'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation;