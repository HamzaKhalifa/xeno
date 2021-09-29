import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import withLayout from '/imports/ui/hoc/with-layout'

import CustomButton from '/imports/ui/components/custom-button'
import BlueGuyIcon from '/imports/ui/icons/BlueGuyIcon'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visualBuilderElements'

import useStyles from './styles'

const CreateAccountConfirmation = () => {
  const { createAccountConfirmation: createAccountConfirmationStyles } = useSelector(state => state.theme)

  const styles = useStyles()
  const history = useHistory()

  const returnToWebsite = () => history.push('/login')

  return (
    <VBDiv 
      className={styles.createAccountConfirmationContainer} 
      style={{ ...createAccountConfirmationStyles.createAccountConfirmationContainer }}
    >
      <VBH2 className={styles.title} style={{ ...createAccountConfirmationStyles.title }}>Congratulations!</VBH2>
      <VBH2 className={styles.title} style={{ ...createAccountConfirmationStyles.secondTitle }}>Your email address has been verified</VBH2>
      <VBH2 className={styles.description} style={{ ...createAccountConfirmationStyles.description }}>You are soon going to be able to access your portal</VBH2>
      
      <BlueGuyIcon />

      <CustomButton onClick={returnToWebsite} style={{ ...createAccountConfirmationStyles.button }}>Access my portal</CustomButton>
    </VBDiv>
  )
}

export default withLayout(CreateAccountConfirmation)
