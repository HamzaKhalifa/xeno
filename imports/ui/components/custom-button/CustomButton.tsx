import React from 'react'
import { useSelector } from 'react-redux'

import CustomLoader from '/imports/ui/components/custom-loader'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visualBuilderElements'

import useStyles from './styles'

interface ICustomButton {
  children?: any
  loading?: boolean
  disabled?: boolean
  type?: any
  onClick?: (e: void) => void
  style?: any
  loadingStyle?: any
}

const CustomButton = (props: ICustomButton) => {
  const { type = 'button' } = props

  const { button: buttonStyles } = useSelector(state => state.theme)

  const styles = useStyles()

  const onClick = React.useCallback(() => {
    if (props.onClick) props.onClick()
  }, [props.onClick])

  if (props.loading) {
    return(
      <VBDiv style={{ 
        ...(props.loadingStyle ?? {})
      }}>
        <CustomLoader />
      </VBDiv>
    )
  }
  
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={props.loading}
      className={styles.customButtonContainer}
      style={{ 
        ...buttonStyles.buttonContainer,
        ...(props.style ?? {})
      }}
    >
      <VBDiv className={styles.content}>
        {props.children}
      </VBDiv>
    </button>
  )
}

export default React.memo(CustomButton)

