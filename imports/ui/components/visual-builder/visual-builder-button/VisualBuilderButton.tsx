import React from 'react'

import CustomLoader from '/imports/ui/components/custom-loader'

import useStyles from './styles'

interface IVisualBuilderButton {
  children?: any
  loading?: boolean
  disabled?: boolean
  type?: any
  onClick?: any
  style?: any
  loadingStyle?: any
}

const VisualBuilderButton = (props: IVisualBuilderButton) => {
  const { type = 'button' } = props

  const styles = useStyles()

  const onClick = React.useCallback(() => {
    if (props.onClick) props.onClick()
  }, [props.onClick])

  if (props.loading) {
    return(
      <div style={{ 
        ...(props.loadingStyle ?? {})
      }}>
        <CustomLoader />
      </div>
    )
  }
  
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={props.loading}
      className={styles.visualBuilderButtonContainer}
      style={{ 
        ...(props.style ?? {})
      }}
    >
      <div className={styles.content}>
        {props.children}
      </div>
    </button>
  )
}

export default React.memo(VisualBuilderButton)

