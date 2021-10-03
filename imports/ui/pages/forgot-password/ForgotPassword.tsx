import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import withLayout from '/imports/ui/hoc/with-layout'

import remote from '/imports/api/remote'

import validateEmail from '/imports/ui/utils/validateEmail'

import CustomButton from '/imports/ui/components/custom-button'
import CustomInput from '/imports/ui/components/custom-input'
import Toast from '/imports/ui/components/toast'

import BlueGuyIcon from '/imports/ui/icons/BlueGuyIcon'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visual-builder-elements/visualBuilderElements'

import useStyles from './styles'

const ForgotPassword = () => {
  const { forgotPassword: forgotPasswordStyles } = useSelector(state => state.theme)
  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [emailError, setEmailError] = React.useState('')
  const [sent, setSent] = React.useState(false)

  //#region Hooks
  const styles = useStyles()
  const history = useHistory()
  //#endregion Hooks

  //#region Change handlers
  const onEmailChange = React.useCallback(e => setEmail(e.target.value), [])
  //#endregion Change handlers

  //#region Event listeners
  const sendForgotPasswordInvitation = React.useCallback(() => {
    if (!validateEmail(email)) return setEmailError('Invalid Email') 
    else setEmailError('')

    setLoading(true)
    remote.call('users.sendForgotPasswordInvitation', email, error => {
      setLoading(false)
      if (error) return Toast.error('Error sending invitation', error.message)
      else {
        Toast.success('Password recovery email has been sent.')
        setSent(true)
      }
    })
  }, [email])
  //#endregion Event listeners

  return (
    <VBDiv 
      className={styles.forgotPasswordContainer} 
      style={{ ...forgotPasswordStyles.forgotPasswordContainer }}
    >
      <VBH2 style={{ ...forgotPasswordStyles.title }}>Reinitialize password</VBH2>
      
      <CustomInput
        required={false} 
        style={{ ...forgotPasswordStyles.input }} 
        onChange={onEmailChange} 
        type='email' 
        value={email}
        placeholder='Email'
        error={emailError}
      />

      {sent && !loading && <VBSpan style={{ ...forgotPasswordStyles.didntReceivePassword }}>You didn't receive it?</VBSpan>}
      <CustomButton loading={loading} onClick={sendForgotPasswordInvitation} style={{ ...forgotPasswordStyles.button }}>{sent ? 'Resend recovery email' : 'Send me a reinitialization email'}</CustomButton>
    </VBDiv>
  )
}

export default withLayout(ForgotPassword)
