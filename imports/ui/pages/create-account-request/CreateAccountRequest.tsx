import React from 'react'
import { useSelector } from 'react-redux'

import withLayout from '/imports/ui/hoc/with-layout'

import CreateAccountRequesttForm from './create-account-request-form'

import BlueGuyIcon from '../../icons/BlueGuyIcon'

import useStyles from './styles'

const CreateAccountRequest = () => {
  const { createAccountRequest: createAccountRequestStyles } = useSelector(state => state.theme)

  const styles = useStyles()

  return (
    <div className={styles.createAccountRequestContainer} style={{ ...createAccountRequestStyles.createAccountRequestContainer }}>
      <CreateAccountRequesttForm />

      <div className={styles.iconContainer} style={{ ...createAccountRequestStyles.iconContainer }}>
        <BlueGuyIcon />
      </div>
    </div>
  )
}

export default withLayout(CreateAccountRequest)
