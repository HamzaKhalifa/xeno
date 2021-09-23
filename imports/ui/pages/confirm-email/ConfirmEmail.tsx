import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import withLayout from '/imports/ui/hoc/with-layout'

import remote from '/imports/api/remote'

import CustomButton from '/imports/ui/components/custom-button'
import CustomInput from '/imports/ui/components/custom-input'
import Toast from '/imports/ui/components/toast'

import useStyles from './styles'

const ConfirmEmail = () => {
  const { confirmEmail: confirmEmailStyles } = useSelector(state => state.theme)

  const [code, setCode] = React.useState('')
  const [confirmEmailLoading, setConfirmEmailLoading] = React.useState(false)
  const [resendCodeLoading, setResendCodeLoading] = React.useState(false)

  const styles = useStyles()
  const history = useHistory()
  
  const onCodeChange = React.useCallback((e) => setCode(e.target.value), [])

  //#region Event listeners
  const confirmEmail = (e) => {
    e.preventDefault()

    setConfirmEmailLoading(true)
    remote.call('contacts.confirmEmail', localStorage.getItem('email'), code, error => {
      setConfirmEmailLoading(false)

      if (error) Toast.error('Error ' + error.message)
      else {
        Toast.success('Valid code! Your email has been confirmed!')
        history.push('/createAccountConfirmation')
      }
    })
  }

  const resendCode = () => {
    setResendCodeLoading(true)
    remote.call('contacts.resendCode', localStorage.getItem('email'), error => {
      if (error) Toast.error('Error resending code ' + error.message)

      setResendCodeLoading(false)
    })
  }
  //#endregion Event listeners

  return (
    <div 
      className={styles.confirmEmailContainer} 
      style={{ ...confirmEmailStyles.confirmEmailContainer }}
    >
      <h2 className={styles.title} style={{ ...confirmEmailStyles.title }}>Confirm your email address</h2>
      <h2 className={styles.title} style={{ ...confirmEmailStyles.description }}>We have sent a confirmation code to the below email</h2>
      <h2 className={styles.description} style={{ ...confirmEmailStyles.email }}>{localStorage.getItem('email')}</h2>

      <form onSubmit={confirmEmail} style={{ ...confirmEmailStyles.form }}>
        <CustomInput onChange={onCodeChange} placeholder='Code' label='Enter the code that was sent to you by email' style={{ ...confirmEmailStyles.codeInput }} />
        <CustomButton type='submit' loading={resendCodeLoading} style={{ ...confirmEmailStyles.validateButton }}>Validate</CustomButton>
      </form>

      <span style={{ ...confirmEmailStyles.resendCodeLabel }}>You haven't received it?</span>
      <CustomButton loading={resendCodeLoading} onClick={resendCode} style={{ ...confirmEmailStyles.resendButton }}>Resend code</CustomButton>
    </div>
  )
}

export default withLayout(ConfirmEmail)
