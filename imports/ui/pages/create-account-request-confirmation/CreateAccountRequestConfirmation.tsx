import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import withLayout from '/imports/ui/hoc/with-layout'

import CustomButton from '/imports/ui/components/custom-button'
import BlueGuyIcon from '/imports/ui/icons/BlueGuyIcon'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visualBuilderElements'

import useStyles from './styles'

const CreateAccountRequestConfirmation = () => {
  const { createAccountRequestConfirmation: createAccountRequestConfirmationStyles } = useSelector(state => state.theme)

  const styles = useStyles()
  const history = useHistory()

  const returnToWebsite = () => history.push('/login')

  return (
    <VBDiv 
      className={styles.createAccountRequestConfirmationContainer} 
      style={{ ...createAccountRequestConfirmationStyles.createAccountRequestConfirmationContainer }}
    >
      <VBH2 className={styles.title} style={{ ...createAccountRequestConfirmationStyles.title }}>Thanks for your interest!</VBH2>
      <VBH2 className={styles.description} style={{ ...createAccountRequestConfirmationStyles.description }}>We'll recontact you to inform you of your account creation confirmation</VBH2>
      
      <BlueGuyIcon />

      <CustomButton onClick={returnToWebsite} style={{ ...createAccountRequestConfirmationStyles.button }}>Return to website</CustomButton>
    </VBDiv>
  )
}

export default withLayout(CreateAccountRequestConfirmation)
