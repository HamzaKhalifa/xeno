import React from 'react'
import { Meteor } from 'meteor/meteor'
import { useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'

import CustomButton from '/imports/ui/components/custom-button'
import CustomLoader from '/imports/ui/components/custom-loader'
import ProfileButton from '/imports/ui/components/profile-button'
import AccountCompletitionIndicator from '/imports/ui/components/account-completion-indicator'

import useAuth from '/imports/ui/hooks/useAuth'

import HeaderIcon from '/imports/ui/icons/HeaderIcon'
import LogoutIcon from '/imports/ui/icons/LogoutIcon'

import { VBDiv, VBLink, VBSpan } from '../visual-builder/visual-builder-elements/visualBuilderElements'

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
    <VBDiv style={{ ...(user ? headerStyles.loggedInHeaderContainer : headerStyles.headerContainer) }}>

      <VBDiv style={{ ...headerStyles.left }}>
        <VBLink style={{ ...headerStyles.homeLogo }} to={user ? '/home' : '/login'}><HeaderIcon /></VBLink>

        <VBDiv style={{ ...headerStyles.links }}>
          <VBLink style={{ ...headerStyles.link }} to='#'><VBSpan style={{ ...headerStyles.linkSpan }}>Our Story</VBSpan></VBLink>
          <VBLink style={{ ...headerStyles.link }} to='#'><VBSpan style={{ marginRight: 16, marginLeft: 16, ...headerStyles.linkSpan }}>Our Services</VBSpan></VBLink>
          <VBLink style={{ ...headerStyles.link }} to='#'><VBSpan style={{ ...headerStyles.linkSpan }}>Our Products</VBSpan></VBLink>
        </VBDiv>

        <CustomButton style={{ ...headerStyles.contactUsButton }}>Contact us</CustomButton>
      </VBDiv>

      <VBDiv style={{ ...headerStyles.right }}>

        {user && <AccountCompletitionIndicator />}
        
        {user && <ProfileButton />}

        {user &&
          <VBDiv className={styles.logoutButton} style={{ ...headerStyles.logoutButton }} onClick={logout}>

            {!logoutLoading && <LogoutIcon style={{ ...headerStyles.logoutIcon }} />}
    
            {logoutLoading && <CustomLoader />}
          </VBDiv>
        }

        {!user && (location.pathname === '/login' || location.pathname === '/createAccount' || location.pathname === '/forgotPassword') && <VBLink to='/createAccountRequest' style={{ ...headerStyles.createAccountRequestButton }}>Request Account Creation</VBLink>}
        {!user && (location.pathname === '/login' || location.pathname === '/createAccountRequest' || location.pathname === '/forgotPassword') && <VBLink to='/createAccount' style={{ ...headerStyles.createaAccountButton }}>Create Account</VBLink>}
        {!user && (location.pathname === '/createAccountRequest' || location.pathname === '/createAccount' || location.pathname === '/forgotPassword') && <VBLink to='/login' style={{ ...headerStyles.loginButton }}>Login</VBLink>}
      </VBDiv>

    </VBDiv>
  )
}

export default Header
