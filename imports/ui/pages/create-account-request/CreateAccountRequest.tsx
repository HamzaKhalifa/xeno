import React from 'react'
import { useSelector } from 'react-redux'

import withLayout from '/imports/ui/hoc/with-layout'

import CreateAccountRequesttForm from './create-account-request-form'

import BlueGuyIcon from '../../icons/BlueGuyIcon'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visual-builder-elements/visualBuilderElements'

import useStyles from './styles'

const CreateAccountRequest = () => {
  const { createAccountRequest: createAccountRequestStyles } = useSelector(state => state.theme)

  const styles = useStyles()

  return (
    <VBDiv className={styles.createAccountRequestContainer} style={{ ...createAccountRequestStyles.createAccountRequestContainer }}>
      <CreateAccountRequesttForm />

      <VBDiv className={styles.iconContainer} style={{ ...createAccountRequestStyles.iconContainer }}>
        <BlueGuyIcon />
      </VBDiv>
    </VBDiv>
  )
}

export default withLayout(CreateAccountRequest)
