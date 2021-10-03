import React from 'react'
import { useSelector } from 'react-redux'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '../visual-builder/visual-builder-elements/visualBuilderElements'

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
    <VBDiv className={styles.textareaContainer} style={{ ...textareaStyles.textareaContainer, ...(props.style ?? {}) }}>
      <VBSpan className={styles.label} style={{ ...textareaStyles.label }}>{props.label ?? ''}</VBSpan>

      <textarea rows={6} placeholder={props.placeholder} className={styles.textarea} style={{ ...textareaStyles.textarea }} />
    </VBDiv>
  )
}

export default CustomTextarea
