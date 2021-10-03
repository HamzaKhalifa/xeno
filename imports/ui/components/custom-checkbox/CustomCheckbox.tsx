import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '../visual-builder/visual-builder-elements/visualBuilderElements'

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
    <VBDiv className={styles.customCheckboxContainer}>
      <FormControlLabel
        control={
          <Checkbox
            checked={props.value}
            onChange={props.onChange}
          />
        }
        label={props.label}
      />
    </VBDiv>
  )
}

export default React.memo(CustomCheckbox)

