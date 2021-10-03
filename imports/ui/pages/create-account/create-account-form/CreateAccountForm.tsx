import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import CustomInput from '/imports/ui/components/custom-input'
import CustomButton from '/imports/ui/components/custom-button'
import Toast from '/imports/ui/components/toast'

import remote from '/imports/api/remote'
import validateEmail from '/imports/ui/utils/validateEmail'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visual-builder-elements/visualBuilderElements'

import useStyles from './styles'

const CreateAccountForm = () => {
  //#region State
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [formErrors, setFormErrors] = React.useState({ email: '', password: '', confirmPassword: '' })
  const [loading, setLoading] = React.useState(false)
  const [validConfirmPassword, setValidConfirmaPassword] = React.useState(false)
  
  const { createAccountForm: createAccountFormStyles }: any = useSelector<any>(state => state.theme)
  //#endregion State

  //#region Hooks
  const styles = useStyles()
  const history = useHistory()
  //#endregion Hooks

  //#region Change handlers
  const onEmailChange = React.useCallback(e => setEmail(e.target.value), [])
  const onPasswordChange = React.useCallback(e => setPassword(e.target.value), [])
  const onConfirmPasswordChange = React.useCallback(e => {
    setValidConfirmaPassword(e.target.value && e.target.value.trim() !== '' && e.target.value.value === password)
    setConfirmPassword(e.target.value)
  }, [password])
  //#endregion Change handlers

  const submit = (e) => {
    e.preventDefault()

    const newFormErrors: any = {}

    if (email && !validateEmail(email)) newFormErrors.email = 'Invalid email'
    if (!email || email.trim() === '') newFormErrors.email = 'Email is required'
    if (!password || password.trim() === '') newFormErrors.password = 'The password is required'
    if (!confirmPassword || confirmPassword.trim() === '') newFormErrors.confirmPassword = 'Password confirmation is required'
    if (confirmPassword !== password) newFormErrors.confirmPassword = 'The passwords are not identical'

    setFormErrors(newFormErrors)

    if (Object.keys(newFormErrors).length > 0) return Toast.error('Some fields are not entered, invalid, or incomplete')
    
    setLoading(true)
    
    remote.call('contacts.createAccount', { email, password }, error => {
      setLoading(false)
      if (error) return Toast.error('Error creating account ' + error.message)

      Toast.success('A confirmation code has been sent to your email')

      localStorage.setItem('email', email)

      history.push('/confirmEmail')
    })
  }

  return (
    <VBDiv className={styles.createAccountFormContainer} style={{ ...createAccountFormStyles.createAccountFormContainer }}>
      <VBH2 className={styles.title} style={{ ...createAccountFormStyles.title }}>Create an account</VBH2>
      <VBSpan className={styles.description} style={{ ...createAccountFormStyles.description }}>To create an account, please contact us by filling the form</VBSpan>

      <form onSubmit={submit} className={styles.form} style={{ ...createAccountFormStyles.form }}>
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

        <CustomInput 
          required
          label='Confirm Password' 
          placeholder='password confirmation'
          type='password'
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
          check={validConfirmPassword}
          error={formErrors.confirmPassword}
        />

        <VBDiv className={styles.buttonsContainer}>
          <CustomButton loading={loading} type='submit'>Create my account</CustomButton>
        </VBDiv>

      </form>
    </VBDiv>
  )
}

export default CreateAccountForm
