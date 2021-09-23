import React from 'react'
import { useSelector } from 'react-redux'

import CustomLoader from '/imports/ui/components/custom-loader'

import useStyles from './styles'

interface ICustomButton {
  children?: any
  loading?: boolean
  disabled?: boolean
  type?: any
  onClick?: (e: void) => void
  style?: any
}

const CustomButton = (props: ICustomButton) => {
  const { button: buttonStyles } = useSelector(state => state.theme)

  const styles = useStyles()

  const onClick = React.useCallback(() => {
    if (props.onClick) props.onClick()
  }, [props.onClick])

  if (props.loading) return <CustomLoader />
  
  return (
    <button
      onClick={onClick}
      type={props.type}
      disabled={props.loading}
      className={styles.customButtonContainer}
      style={{ 
        ...buttonStyles,
        ...(props.style ?? {})
      }}
    >
      <div className={styles.content}>
        {props.children}
      </div>
    </button>
  )
}

export default CustomButton

