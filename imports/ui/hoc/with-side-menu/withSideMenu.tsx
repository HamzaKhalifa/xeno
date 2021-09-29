import React from 'react'
import { useSelector } from 'react-redux'

import SideMenu from '/imports/ui/components/side-menu'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visualBuilderElements'

import useStyles from './styles'

const withSideMenu = (Component) => props => {
  const { withSideMenu: withSideMenuStyles } = useSelector(state => state.theme)

  const styles = useStyles()

  return (
    <VBDiv className={styles.pageWithSideMenu} style={{ ...withSideMenuStyles.pageWithSideMenu }}>
      
      <VBDiv style={{ ...withSideMenuStyles.sideMenuContainer }}>
        <SideMenu />
      </VBDiv>

      <Component {...props} />

    </VBDiv>
  )
}

export default withSideMenu
