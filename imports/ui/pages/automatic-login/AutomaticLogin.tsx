import React from 'react'
import { Meteor } from 'meteor/meteor'
import { useParams, useHistory } from 'react-router-dom'

// This is called on top, and at the beginning of each manual refresh. On the other side, the "useAuth" hook is always running.
const AutomaticLogin = () => {
  const params = useParams()
  const history = useHistory()

  React.useEffect(() => {
    const token = params.token ?? localStorage.getItem('token')
    
    if (token) {
      setTimeout(() => {
        Meteor.loginWithToken(token, error => {
          if (error) {
            localStorage.setItem('token', null)

            if(['/login', '/createAccountRequest', '/createAccountRequestConfirmation', '/createAccount', '/confirmEmail', '/createAccountConfirmation']
                .indexOf(history.location.pathname) === -1 
              && !history.location.pathname.includes('/enrollAccount')
            ) {
              history.push('/login')
            }
          } else {
            localStorage.setItem('token', token)
  
            if(['/login', '/createAccountRequest', '/createAccountRequestConfirmation', '/createAccount', '/confirmEmail', '/createAccountConfirmation']
                .indexOf(history.location.pathname) !== -1 
              || history.location.pathname.includes('/enrollAccount')
            ) {
              history.push('/home')
            } else {
              history.push('/login')
            }
          }
        })
      }, 2000)
    }
  }, [])

  return null
}

export default AutomaticLogin
