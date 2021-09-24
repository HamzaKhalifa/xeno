import React from 'react'
import MuiPhoneNumber from 'material-ui-phone-number'

import useStyles from './styles'

interface ICustomPhoneInput {
  label?: string
  name?: string
  placeholder?: string
  prefix?: React.ReactElement
  value?: any
  error?: string
  type?: string
  onChange?: (value: any) => void,
}

const CustomPhoneInput = (props: ICustomPhoneInput) => {
  const styles = useStyles()
  
  return (
    <div className={styles.customPhoneInputContainer}>
      <MuiPhoneNumber
        defaultCountry={'ca'}

        label={props.label}
        name={props.name}
        placeholder={props.placeholder} 
        value={props.value}
        error={Boolean(props.error)}
        helperText={props.error}
        type={props.type} 
        onChange={props.onChange} 
        autoComplete='new-password'
      />
    </div>
  )
}

export default CustomPhoneInput

