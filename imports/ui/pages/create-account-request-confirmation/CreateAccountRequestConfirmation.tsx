import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import withLayout from '/imports/ui/hoc/with-layout'

import CustomButton from '/imports/ui/components/custom-button'
import BlueGuyIcon from '/imports/ui/icons/BlueGuyIcon'

import useStyles from './styles'

const CreateAccountRequestConfirmation = () => {
  const { createAccountRequestConfirmation: createAccountRequestConfirmationStyles } = useSelector(state => state.theme)

  const styles = useStyles()
  const history = useHistory()

  const returnToWebsite = () => history.push('/login')

  return (
    <div 
      className={styles.createAccountRequestConfirmationContainer} 
      style={{ ...createAccountRequestConfirmationStyles.createAccountRequestConfirmationContainer }}
    >
      <h2 className={styles.title} style={{ ...createAccountRequestConfirmationStyles.title }}>Thanks for your interest!</h2>
      <h2 className={styles.description} style={{ ...createAccountRequestConfirmationStyles.description }}>We'll recontact you to inform you of your account creation confirmation</h2>
      
      <BlueGuyIcon />

      <CustomButton onClick={returnToWebsite} style={{ ...createAccountRequestConfirmationStyles.button }}>Return to website</CustomButton>
    </div>
  )
}

export default withLayout(CreateAccountRequestConfirmation)
