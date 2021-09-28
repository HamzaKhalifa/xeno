import React from 'react'
import { Meteor } from 'meteor/meteor'
import { useSelector } from 'react-redux'
import { Link, useLocation, useHistory } from 'react-router-dom'

import CustomButton from '/imports/ui/components/custom-button'
import CustomLoader from '/imports/ui/components/custom-loader'
import ProfileButton from '/imports/ui/components/profile-button'
import AccountCompletitionIndicator from '/imports/ui/components/account-completion-indicator'

import useAuth from '/imports/ui/hooks/useAuth'

import HeaderIcon from '/imports/ui/icons/HeaderIcon'
import LogoutIcon from '/imports/ui/icons/LogoutIcon'

import useStyles from './styles'

const Header = () => {
  const { header: headerStyles }: any = useSelector<any>(state => state.theme)
  const [logoutLoading, setLogoutLoading] = React.useState(false)

  const user = useAuth()
  const styles = useStyles()
  const location = useLocation()
  const history = useHistory()

  // Store location for the splash screen to know where to redirect to
  localStorage.setItem('location', location.pathname)

  const logout = () => {
    setLogoutLoading(true)
    Meteor.logout(_ => {
      setLogoutLoading(false)
      history.push('/login')
    })
  }
  
  return (
    <div style={{ ...(user ? headerStyles.loggedInHeaderContainer : headerStyles.headerContainer) }}>
      <div style={{ ...headerStyles.left }}>
        <Link to={user ? '/home' : '/login'}><HeaderIcon /></Link>

        <div className={styles.links} style={{ ...headerStyles.links }}>
          <Link to='#'><span style={{ ...headerStyles.link }}>Our Story</span></Link>
          <Link to='#'><span style={{ marginRight: 16, marginLeft: 16, ...headerStyles.link }}>Our Services</span></Link>
          <Link to='#'><span style={{ ...headerStyles.link }}>Our Products</span></Link>
        </div>

        <CustomButton style={{ ...headerStyles.contactUsButton }}>Contact us</CustomButton>
      </div>

      <div style={{ ...headerStyles.right }}>

        {user && <AccountCompletitionIndicator />}
        
        {user && <ProfileButton />}

        {user &&
          <div className={styles.logoutButton} style={{ ...headerStyles.logoutButton }} onClick={logout}>

            {!logoutLoading && <LogoutIcon style={{ ...headerStyles.logoutIcon }} />}
    
            {logoutLoading && <CustomLoader />}
          </div>
        }

        {!user && (location.pathname === '/login' || location.pathname === '/createAccount' || location.pathname === '/forgotPassword') && <Link to='/createAccountRequest' style={{ ...headerStyles.createAccountRequestButton }}>Request Account Creation</Link>}
        {!user && (location.pathname === '/login' || location.pathname === '/createAccountRequest' || location.pathname === '/forgotPassword') && <Link to='/createAccount' style={{ ...headerStyles.createaAccountButton }}>Create Account</Link>}
        {!user && (location.pathname === '/createAccountRequest' || location.pathname === '/createAccount' || location.pathname === '/forgotPassword') && <Link to='/login' style={{ ...headerStyles.loginButton }}>Login</Link>}
      </div>

    </div>
  )
}

export default Header
