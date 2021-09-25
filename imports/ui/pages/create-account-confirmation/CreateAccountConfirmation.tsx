import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import withLayout from '/imports/ui/hoc/with-layout'

import CustomButton from '/imports/ui/components/custom-button'
import BlueGuyIcon from '/imports/ui/icons/BlueGuyIcon'

import useStyles from './styles'

const CreateAccountConfirmation = () => {
  const { createAccountConfirmation: createAccountConfirmationStyles } = useSelector(state => state.theme)

  const styles = useStyles()
  const history = useHistory()

  const returnToWebsite = () => history.push('/login')

  return (
    <div 
      className={styles.createAccountConfirmationContainer} 
      style={{ ...createAccountConfirmationStyles.createAccountConfirmationContainer }}
    >
      <h2 className={styles.title} style={{ ...createAccountConfirmationStyles.title }}>Congratulations!</h2>
      <h2 className={styles.title} style={{ ...createAccountConfirmationStyles.secondTitle }}>Your email address has been verified</h2>
      <h2 className={styles.description} style={{ ...createAccountConfirmationStyles.description }}>You are soon going to be able to access your portal</h2>
      
      <BlueGuyIcon />

      <CustomButton onClick={returnToWebsite} style={{ ...createAccountConfirmationStyles.button }}>Access my portal</CustomButton>
    </div>
  )
}

export default withLayout(CreateAccountConfirmation)
