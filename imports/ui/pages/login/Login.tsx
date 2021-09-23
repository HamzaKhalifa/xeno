import React from 'react'
import { useSelector } from 'react-redux'

import withLayout from '/imports/ui/hoc/with-layout'

import LoginForm from './login-form'

import BlueGuyIcon from '../../icons/BlueGuyIcon'

import useStyles from './styles'

const Login = () => {
  const { login: loginStyles } = useSelector(state => state.theme)

  const styles = useStyles()

  return (
    <div className={styles.loginContainer} style={{ ...loginStyles.loginContainer }}>
      <LoginForm />

      <div className={styles.iconContainer} style={{ ...loginStyles.iconContainer }}>
        <BlueGuyIcon />
      </div>
    </div>
  )
}

export default withLayout(Login)
