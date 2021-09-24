import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { useSelector } from 'react-redux'

import useStyles from './styles'

interface ICustomCheckboxes {
  label?: string
  error?: string
  onChange?: (value: any) => void,
  checkBoxes: CheckBox[]
  multiple?: boolean
}

interface CheckBox {
  label: string
  checked: boolean
}

const CustomCheckboxes = (props: ICustomCheckboxes) => {
  const { input: inputStyles } = useSelector(state => state.theme)

  const styles = useStyles()

  const onChange = (e, index) => {
    const newCheckboxes = [...props.checkBoxes]

    if (props.multiple) {
      newCheckboxes.forEach(checkbox => checkbox.checked = false)
    }

    newCheckboxes[index] = { ...newCheckboxes[index], checked: e.target.checked }

    props.onChange(newCheckboxes)
  }
  
  return (
    <div className={styles.customCheckboxesContainer}>
      <span className={styles.label} style={{ ...inputStyles.label }}>{props.label}</span>

      <div className={styles.checkBoxes}>
        {props.checkBoxes?.map((checkbox, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={checkbox.checked}
                onChange={(e) => onChange(e, index)}
              />
            }
            label={checkbox.label}
          />
        ))}
      </div>
    </div>
  )
}

export default React.memo(CustomCheckboxes)

