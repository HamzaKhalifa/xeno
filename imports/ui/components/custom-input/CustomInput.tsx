import React from 'react'
import { useSelector } from 'react-redux'

import RequiredFieldIcon from '/imports/ui/icons/RequiredFieldIcon'
import CheckIcon from '/imports/ui/icons/CheckIcon'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '../visual-builder/visual-builder-elements/visualBuilderElements'

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
  labelStyle?: any
}

const CustomInput = (props: ICustomInput) => {
  const { input: inputStyles } = useSelector(state => state.theme)

  const styles = useStyles()

  return (
    <VBDiv className={styles.inputContainer} style={{ ...inputStyles.inputContainer, ...(props.style ?? {}) }}>
      <VBSpan className={styles.label} style={{ ...inputStyles.label, ...(props.labelStyle ?? {}) }}>
        {props.check && <CheckIcon />}
        {props.label ?? ''} 
        {props.required && <RequiredFieldIcon style={{ ...inputStyles.requiredFieldIcon }} />}
      </VBSpan>

      <input 
        value={props.value} 
        onChange={props.onChange}
        placeholder={props.placeholder} 
        type={props.type}
        className={styles.input} 
        style={{ ...inputStyles.input }} 
      />

      {props.error && <VBSpan style={{ ...inputStyles.error }}>x {props.error}</VBSpan>}
    </VBDiv>
  )
}

export default React.memo(CustomInput)
