import React from 'react'
import { Accounts } from 'meteor/accounts-base'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import withLayout from '/imports/ui/hoc/with-layout'

import remote from '/imports/api/remote'

import CustomButton from '/imports/ui/components/custom-button'
import CustomInput from '/imports/ui/components/custom-input'
import Toast from '/imports/ui/components/toast'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visual-builder-elements/visualBuilderElements'

import useStyles from './styles'

interface IResetPassword {
  match?: any
}

const ResetPassword = (props: IResetPassword) => {
  const resetPasswordToken = props.match?.params.resetPasswordToken
  
  const { resetPassword: resetPasswordStyles } = useSelector(state => state.theme)
  
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [passwordError, setPasswordError] = React.useState('')

  //#region Hooks
  const styles = useStyles()
  const history = useHistory()
  //#endregion Hooks

  //#region Change handlers
  const onPasswordChange = React.useCallback(e => setPassword(e.target.value), [])
  //#endregion Change handlers

  //#region Event listeners
  const resetPassword = React.useCallback((e) => {
    e.preventDefault()

    if (!password || password.trim().length < 6) {
      Toast.error('The password must have a minimum length of 6')
      setPasswordError('The password must have a minimum length of 6')
      return 
    }

    setLoading(true)
    Accounts.resetPassword(resetPasswordToken, password, error => {
      setLoading(false)
      if (error) return Toast.error('Error resetting password ' + error.message)
      else {
        Toast.success('Your password has been successfully reset. You are logged in now :)')
        history.push('/login')
      }
    })
  }, [password])
  //#endregion Event listeners

  return (
    <form 
      className={styles.resetPasswordContainer} 
      style={{ ...resetPasswordStyles.resetPasswordContainer }}
      onSubmit={resetPassword}
    >
      <VBH2 style={{ ...resetPasswordStyles.title }}>Reinitialize password</VBH2>
      
      <CustomInput
        required
        style={{ ...resetPasswordStyles.input }} 
        onChange={onPasswordChange} 
        type='password' 
        value={password}
        label='New Passwored'
        placeholder='password'
        error={passwordError}
      />

      <CustomButton loading={loading} type='submit' style={{ ...resetPasswordStyles.button }}>Reset</CustomButton>
    </form>
  )
}

export default withLayout(ResetPassword)
