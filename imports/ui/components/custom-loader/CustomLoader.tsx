import React from 'react'
import Loader from 'react-loader-spinner'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visualBuilderElements'

import useStyles from './styles'

interface ICustomLoader {
  height?: number
  width?: number
  style?: any
}

const CustomLoader = (props: ICustomLoader) => {
  const { height = 30, width = 30 } = props

  const styles = useStyles()
  
  return (
    <VBDiv className={styles.customLoaderContainer} style={{ ...(props.style ?? {}) }}>
      <Loader
        type='Puff'
        color='#00BFFF'
        height={height}
        width={width}
        timeout={999999}
      />
    </VBDiv>
  )
}

export default CustomLoader

