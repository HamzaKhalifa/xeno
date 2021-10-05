import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { useSelector } from 'react-redux'

import { VBDiv, VBSpan } from '../visual-builder/visual-builder-elements/visualBuilderElements'

import useStyles from './styles'
import 'react-datepicker/dist/react-datepicker.css'

interface ICustomDatePicker {
  value?: any
  onChange: any
  label?: string
}

const CustomDatePicker = (props: ICustomDatePicker) => {
  const { input: inputStyles } = useSelector(state => state.theme)

  const styles = useStyles()

  const onChange = (date) => {
    props.onChange(moment(date).format('YYYY-MM-DD'))
  }

  const value = React.useMemo(() => props.value ? moment(props.value).toDate() : moment().toDate(), [props.value])
  
  return (
    <VBDiv className={styles.customDatePickerContainer}>
      <VBSpan className={styles.label} style={{ ...inputStyles.label }}>{props.label}</VBSpan>
      <DatePicker 
        selected={value} 
        onChange={onChange} 
        className={styles.datePicker}
        style={{ ...inputStyles.input }} 
      />
    </VBDiv>
  )
}

export default React.memo(CustomDatePicker)

