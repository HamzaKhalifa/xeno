import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import useStyles from './styles'

interface ICustomCheckbox {
  label?: string
  value?: any
  error?: string
  onChange?: (value: any) => void,
}

const CustomCheckbox = (props: ICustomCheckbox) => {
  const styles = useStyles()
  
  return (
    <div className={styles.customCheckboxContainer}>
      <FormControlLabel
        control={
          <Checkbox
            checked={props.value}
            onChange={props.onChange}
          />
        }
        label={props.label}
      />
    </div>
  )
}

export default React.memo(CustomCheckbox)

