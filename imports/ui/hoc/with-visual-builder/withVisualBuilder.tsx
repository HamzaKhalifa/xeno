import React from 'react'
import { useSelector } from 'react-redux'

import VisualBuilder from '/imports/ui/components/visual-builder'

import useStyles from './styles'

const withVisualBuilder = Component => props => {
  
  const styles = useStyles()
  const visualBuilderVisible = useSelector<any>(state => state.visualBuilder.visible)

  return (
    <div className={styles.withVisualBuilderContainer}>
      <div style={{ width: visualBuilderVisible ? '30%' : '100%' }}>
        <Component {...props} />
      </div>
      
      {visualBuilderVisible && <VisualBuilder />}
    </div>
  )
}

export default withVisualBuilder
