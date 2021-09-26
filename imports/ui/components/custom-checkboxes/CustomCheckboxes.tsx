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
  selectedCheckBoxes: CheckBox[]
  multiple?: boolean
  style?: any
}

interface CheckBox {
  name: string
  _id: string
}

const CustomCheckboxes = (props: ICustomCheckboxes) => {
  const { input: inputStyles } = useSelector(state => state.theme)

  const styles = useStyles()

  const onChange = (e, checkbox) => {
    let newSelectedCheckbBoxes = [...props.selectedCheckBoxes]
    if (props.multiple) {
      if (e.target.checked) newSelectedCheckbBoxes.push(checkbox)
      else newSelectedCheckbBoxes = newSelectedCheckbBoxes.filter(potential => potential._id !== checkbox._id)
    } else {
      newSelectedCheckbBoxes = checkbox
    }

    props.onChange(newSelectedCheckbBoxes)
  }
  
  return (
    <div className={styles.customCheckboxesContainer} style={{ ...(props.style ?? {}) }}>
      <span className={styles.label} style={{ ...inputStyles.label }}>{props.label}</span>

      <div className={styles.checkBoxes}>
        {props.checkBoxes?.map((checkbox, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={Boolean(props.selectedCheckBoxes.find(potential => potential._id === checkbox._id))}
                onChange={(e) => onChange(e, checkbox)}
              />
            }
            label={checkbox.name}
          />
        ))}
      </div>
    </div>
  )
}

export default React.memo(CustomCheckboxes)

