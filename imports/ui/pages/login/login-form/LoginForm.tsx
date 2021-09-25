import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { useSelector } from 'react-redux'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { Link } from 'react-router-dom'

import CustomInput from '/imports/ui/components/custom-input'
import CustomButton from '/imports/ui/components/custom-button'
import Toast from '/imports/ui/components/toast'

import FacebookIcon from '/imports/ui/icons/FacebookIcon'
import GoogleIcon from '/imports/ui/icons/GoogleIcon'
import LinkedinIcon from '/imports/ui/icons/LinkedinIcon'

import validateEmail from '/imports/ui/utils/validateEmail'

import remote from '/imports/api/remote'

import useStyles from './styles'

const LoginForm = () => {
  //#region State
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [formErrors, setFormErrors] = React.useState({ email: '', password: '', confirmPassword: '' })
  const [loading, setLoading] = React.useState(false)
  
  const { login: { loginForm: loginFormStyles } } = useSelector(state => state.theme)
  //#endregion State

  //#region Hooks
  const styles = useStyles()
  //#endregion Hooks

  //#region Change handlers
  const onEmailChange = React.useCallback(e => setEmail(e.target.value), [])
  const onPasswordChange = React.useCallback(e => setPassword(e.target.value), [])
  //#endregion Change handlers

  const submit = (e) => {
    e.preventDefault()

    const newFormErrors: any = {}

    if (email && !validateEmail(email)) newFormErrors.email = 'Invalid email'
    if (!email || email.trim() === '') newFormErrors.email = 'Email is required'
    if (!password || password.trim() === '') newFormErrors.password = 'The password is required'

    setFormErrors(newFormErrors)

    if (Object.keys(newFormErrors).length > 0) return Toast.error('Some fields are not entered, invalid, or incomplete')
    
    setLoading(true)
    
    Meteor.loginWithPassword({ email }, password, error => {
      setLoading(false)
      if (error) {
        let errorMessage = error.message
        const newFormErrors: any = {}
        if (errorMessage.includes('User not found')) {
          newFormErrors.email = 'User not found'
        }
        if (errorMessage.includes('Incorrect password')) {
          newFormErrors.password = 'Incorrect password'
        }

        setFormErrors(newFormErrors)

        return Toast.error(errorMessage)
      }

      const token = Accounts._storedLoginToken()
      
      localStorage.setItem('token', token)

      Toast.success('You are logged in')
    })
  }

  const loginWithFacebook = (res) => {
    const nameAsArray = res.name.split(' ')

    const user = {
      firstName: nameAsArray.length > 0 ? nameAsArray[0] : '',
      lastName: nameAsArray.length > 1 ? nameAsArray[1] : '',
      email: res.email,
      avatar: res.picture.data.url
    }

    remote.call('users.signWithSocialMedia', user, res.accessToken, res.userID, 'Facebook', (error, result) => {
      if (error) return Toast.error('Error logging in with Facebook ' + error.message)
      Meteor.loginWithToken(result.token, error => {
        if (error) return Toast.error('Error logging in with a token ' + error.message)
        else {
          localStorage.setItem('token', result.token)
          Toast.success('You are logged in')
        }
      })
    })
  }

  return (
    <div className={styles.loginFormContainer} style={{ ...loginFormStyles.loginFormContainer }}>
      <h2 className={styles.title} style={{ ...loginFormStyles.title }}>Welcome!</h2>
      <span className={styles.description} style={{ ...loginFormStyles.description }}>Welcome to Tooly Service :)</span>

      <form onSubmit={submit} className={styles.form} style={{ ...loginFormStyles.form }}>
        <CustomInput
          required 
          label='Email' 
          placeholder='Enter your company name here' 
          type='email'
          value={email}
          onChange={onEmailChange}
          error={formErrors.email}
        />

        <CustomInput
          required 
          label='Password'
          placeholder='password' 
          type='password'
          value={password}
          onChange={onPasswordChange}
          error={formErrors.password}
        />

        <div className={styles.buttonsContainer} style={{ ...loginFormStyles.buttonsContainer }}>
          <CustomButton loading={loading} type='submit'>Login</CustomButton>

          <FacebookLogin
            appId={Meteor.settings.public.FACEBOOK_APP_ID}
            autoLoad={false}
            callback={loginWithFacebook}
            fields='name,email,picture.type(large)'
            render={renderProps => (
              <FacebookIcon style={{ ...loginFormStyles.facebookButton }} onClick={() => renderProps.onClick()} />
            )}
          />
          {/* <GoogleIcon style={{ ...loginFormStyles.googleButton }} />
          <LinkedinIcon style={{ ...loginFormStyles.linkedinButton }} /> */}
        </div>

        <Link to='/forgotPassword' style={{ ...loginFormStyles.forgotPasswordText }}>Did you forget your password? Click here.</Link>

      </form>
    </div>
  )
}

export default LoginForm
