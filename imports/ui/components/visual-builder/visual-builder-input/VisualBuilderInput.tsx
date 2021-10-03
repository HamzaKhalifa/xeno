import React from 'react'

import RequiredFieldIcon from '/imports/ui/icons/RequiredFieldIcon'
import CheckIcon from '/imports/ui/icons/CheckIcon'

import useStyles from './styles'

interface IVisualBuilderInput {
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

const VisualBuilderInput = (props: IVisualBuilderInput) => {
  const styles = useStyles()

  return (
    <div className={styles.visualBuilderInputContainer} style={{ ...(props.style ?? {}) }}>
      <span className={styles.label} style={{ ...(props.labelStyle ?? {}) }}>
        {props.check && <CheckIcon />}
        {props.label ?? ''} 
        {props.required && <RequiredFieldIcon style={{
          position: 'relative',
          marginBottom: 5,
          marginLeft: 5
        }} />}
      </span>

      <input 
        value={props.value} 
        onChange={props.onChange}
        placeholder={props.placeholder} 
        type={props.type}
        className={styles.input} 
      />

      {props.error && <span className={styles.error}>x {props.error}</span>}
    </div>
  )
}

export default React.memo(VisualBuilderInput)
