import React from 'react'
import { Meteor } from 'meteor/meteor'
import { useTracker } from 'meteor/react-meteor-data'
import { useHistory } from 'react-router-dom'

import Toast from '/imports/ui/components/toast'

const useAuth = () => {
  const history = useHistory()
  const user = useTracker(() => {
    const user = Meteor.user()
    
    return user
  })

  React.useEffect(() => {
    if (user && user.profile && user.profile.userType === 'Organizational') {
      Toast.error('You are trying to login using an organization user')
      Meteor.logout()
    }
  }, [user])

  if (user === null 
    && ['/login', '/forgotPassword', '/createAccountRequest', '/createAccountRequestConfirmation', '/createAccount', '/confirmEmail', '/createAccountConfirmation'].indexOf(history.location.pathname) === -1 
    && !history.location.pathname.includes('/enrollAccount')
    && !history.location.pathname.includes('/resetPassword')
  ) { history.push('/splashScreen') }

  if (user && history.location.pathname === '/login' || history.location.pathname === '/splash') {
    if (user && user.profile && user.profile.userType !== 'Organizational') {
      history.push('/home')
    }
  }

  return user
}

export default useAuth