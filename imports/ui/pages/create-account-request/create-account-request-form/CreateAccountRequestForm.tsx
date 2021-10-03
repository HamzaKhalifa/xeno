import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import CustomInput from '/imports/ui/components/custom-input'
import CustomTextarea from '/imports/ui/components/custom-textarea'
import CustomButton from '/imports/ui/components/custom-button'
import Toast from '/imports/ui/components/toast'

import remote from '/imports/api/remote'
import validateEmail from '/imports/ui/utils/validateEmail'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visual-builder-elements/visualBuilderElements'

import useStyles from './styles'

const CreateAccountRequestForm = () => {
  //#region State
  const [legalName, setLegalName] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [formErrors, setFormErrors] = React.useState({ legalName: '', firstName: '', lastName: '', email: '', message: ''})
  const [loading, setLoading] = React.useState(false)
  
  const { createAccountRequestForm: createAccountRequestFormStyles }: any = useSelector<any>(state => state.theme)
  //#endregion State

  //#region Hooks
  const styles = useStyles()
  const history = useHistory()
  //#endregion Hooks

  //#region Change handlers
  const onLegalNameChange = React.useCallback(e => setLegalName(e.target.value), [])
  const onFirstNameChange = React.useCallback(e => setFirstName(e.target.value), [])
  const onLastNameChange = React.useCallback(e => setLastName(e.target.value), [])
  const onEmailChange = React.useCallback(e => setEmail(e.target.value), [])
  const onMessageChange = React.useCallback(e => setMessage(e.target.value), [])
  //#endregion Change handlers

  const submit = (e) => {
    e.preventDefault()

    const newFormErrors: any = {}

    if (!legalName || legalName.trim() === '') newFormErrors.legalName = 'This field is required to complete the account creation request'
    if (!firstName || firstName.trim() === '') newFormErrors.firstName = 'This field is required'
    if (!lastName || lastName.trim() === '') newFormErrors.lastName = 'This field is required'
    if (email && !validateEmail(email)) newFormErrors.email = 'Invalid email'
    if (!email || email.trim() === '') newFormErrors.email = 'This field is required'

    setFormErrors(newFormErrors)

    if (Object.keys(newFormErrors).length > 0) return Toast.error('Some fields are not entered, invalid, or incomplete')
    
    setLoading(true)
    remote.call('clientPortalAccountCreationRequests.requestAccountCreation', { legalName, firstName, lastName, email, message }, (error, response) => {
      setLoading(false)
      if (error) return Toast.error('Error sending invitation ' + error.message)

      Toast.success('Invitation has been successfully sent! Thanks for your interest')

      history.push('/createAccountRequestConfirmation')
    })
  }

  return (
    <VBDiv className={styles.createAccountRequestFormContainer} style={{ ...createAccountRequestFormStyles.createAccountRequestFormContainer }}>
      <VBH2 className={styles.title} style={{ ...createAccountRequestFormStyles.title }}>Create an account</VBH2>
      <VBSpan className={styles.description} style={{ ...createAccountRequestFormStyles.description }}>To create an account, please contact us by filling the form</VBSpan>

      <form onSubmit={submit} className={styles.form} style={{ ...createAccountRequestFormStyles.form }}>
        <CustomInput
          required 
          label='Company name' 
          placeholder='Enter your company name here' 
          value={legalName}
          onChange={onLegalNameChange}
          error={formErrors.legalName}
        />

        <VBDiv className={styles.firstNameAndLastName} style={{ ...createAccountRequestFormStyles.firstNameAndLastName }}>
          <CustomInput
            required 
            label='Firstname' 
            placeholder='Firstname' 
            style={{ marginRight: 10 }} 
            value={firstName}
            onChange={onFirstNameChange}
            error={formErrors.firstName}
          />
          <CustomInput
            required 
            label='Lastname' 
            placeholder='Lastname'
            value={lastName}
            onChange={onLastNameChange}
            error={formErrors.lastName}
          />
        </VBDiv>

        <CustomInput
          required 
          label='Email Address' 
          placeholder='Example: admin@example.com' 
          value={email}
          onChange={onEmailChange}
          error={formErrors.email}
        />

        <CustomTextarea 
          label='Message' 
          placeholder='Write here'
          value={message}
          onChange={onMessageChange}
          error={formErrors.message}
        />

        <VBDiv className={styles.buttonsContainer}>
          <CustomButton loading={loading} type='submit'>Send Demand</CustomButton>
        </VBDiv>

      </form>
    </VBDiv>
  )
}

export default CreateAccountRequestForm
