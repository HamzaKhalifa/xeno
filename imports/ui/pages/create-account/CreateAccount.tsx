import React from 'react'
import { useSelector } from 'react-redux'

import withLayout from '/imports/ui/hoc/with-layout'

import CreateAccountForm from './create-account-form'

import BlueGuyIcon from '../../icons/BlueGuyIcon'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visual-builder-elements/visualBuilderElements'

import useStyles from './styles'

const CreateAccount = () => {
  const { createAccount: createAccountStyles } = useSelector(state => state.theme)

  const styles = useStyles()

  return (
    <VBDiv className={styles.createAccountContainer} style={{ ...createAccountStyles.createAccountContainer }}>
      <CreateAccountForm />

      <VBDiv className={styles.iconContainer} style={{ ...createAccountStyles.iconContainer }}>
        <BlueGuyIcon />
      </VBDiv>
    </VBDiv>
  )
}

export default withLayout(CreateAccount)
