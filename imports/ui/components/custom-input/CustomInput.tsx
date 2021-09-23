import React from 'react'
import { useSelector } from 'react-redux'

import RequiredFieldIcon from '/imports/ui/icons/RequiredFieldIcon'
import CheckIcon from '/imports/ui/icons/CheckIcon'

import useStyles from './styles'

interface ICustomInput {
  label?: string
  placeholder?: string
  error?: string
  style?: any
  value?: string | number
  onChange?: any 
  required?: boolean
  type?: string
  check?: boolean
}

const CustomInput = (props: ICustomInput) => {
  const { input: inputStyles } = useSelector(state => state.theme)

  const styles = useStyles()

  return (
    <div className={styles.inputContainer} style={{ ...inputStyles.inputContainer, ...(props.style ?? {}) }}>
      <span className={styles.label} style={{ ...inputStyles.label }}>
        {props.check && <CheckIcon />}
        {props.label ?? ''} 
        <RequiredFieldIcon style={{ ...inputStyles.requiredFieldIcon }} />
      </span>

      <input 
        value={props.value} 
        onChange={props.onChange}
        placeholder={props.placeholder} 
        type={props.type}
        className={styles.input} 
        style={{ ...inputStyles.input }} 
      />

      {props.error && <span style={{ ...inputStyles.error }}>x {props.error}</span>}
    </div>
  )
}

export default CustomInput
