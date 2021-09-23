import React from 'react'
import { useSelector } from 'react-redux'

import useStyles from './styles'

interface ICustomTextarea {
  label?: string
  placeholder?: string
  error?: string
  style?: any
  value?: string
  onChange?: any
}

const CustomTextarea = (props: ICustomTextarea) => {
  const { textarea: textareaStyles } = useSelector(state => state.theme)

  const styles = useStyles()

  return (
    <div className={styles.textareaContainer} style={{ ...textareaStyles.textareaContainer, ...(props.style ?? {}) }}>
      <span className={styles.label} style={{ ...textareaStyles.label }}>{props.label ?? ''}</span>

      <textarea rows={6} placeholder={props.placeholder} className={styles.textarea} style={{ ...textareaStyles.textarea }} />
    </div>
  )
}

export default CustomTextarea
