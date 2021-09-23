import React from 'react'
import { useSelector } from 'react-redux'

import withLayout from '/imports/ui/hoc/with-layout'

import CreateAccountForm from './create-account-form'

import BlueGuyIcon from '../../icons/BlueGuyIcon'

import useStyles from './styles'

const CreateAccount = () => {
  const { createAccount: createAccountStyles } = useSelector(state => state.theme)

  const styles = useStyles()

  return (
    <div className={styles.createAccountContainer} style={{ ...createAccountStyles.createAccountContainer }}>
      <CreateAccountForm />

      <div className={styles.iconContainer} style={{ ...createAccountStyles.iconContainer }}>
        <BlueGuyIcon />
      </div>
    </div>
  )
}

export default withLayout(CreateAccount)
