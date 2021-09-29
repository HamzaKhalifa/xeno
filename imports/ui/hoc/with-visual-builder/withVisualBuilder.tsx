import React from 'react'
import { useSelector } from 'react-redux'

import VisualBuilder from '/imports/ui/components/visual-builder'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visualBuilderElements'

import useStyles from './styles'

const withVisualBuilder = Component => props => {
  
  const styles = useStyles()
  const visualBuilderVisible = useSelector<any>(state => state.visualBuilder.visible)

  return (
    <VBDiv className={styles.withVisualBuilderContainer}>
      <VBDiv style={{ width: visualBuilderVisible ? '70%' : '100%' }}>
        <Component {...props} />
      </VBDiv>
      
      {visualBuilderVisible && <VisualBuilder />}
    </VBDiv>
  )
}

export default withVisualBuilder
