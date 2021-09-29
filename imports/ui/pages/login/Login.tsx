import React from 'react'
import { useSelector } from 'react-redux'

import withLayout from '/imports/ui/hoc/with-layout'

import LoginForm from './login-form'

import BlueGuyIcon from '../../icons/BlueGuyIcon'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visualBuilderElements'

import useStyles from './styles'

const Login = () => {
  const { login: loginStyles } = useSelector(state => state.theme)

  const styles = useStyles()

  return (
    <VBDiv className={styles.loginContainer} style={{ ...loginStyles.loginContainer }}>
      <LoginForm />

      <VBDiv className={styles.iconContainer} style={{ ...loginStyles.iconContainer }}>
        <BlueGuyIcon />
      </VBDiv>
    </VBDiv>
  )
}

export default withLayout(Login)
