import React from 'react'
import { useSelector } from 'react-redux'

import SideMenu from '/imports/ui/components/side-menu'

import useStyles from './styles'

const withSideMenu = (Component) => props => {
  const { withSideMenu: withSideMenuStyles } = useSelector(state => state.theme)

  const styles = useStyles()

  return (
    <div className={styles.pageWithSideMenu} style={{ ...withSideMenuStyles.pageWithSideMenu }}>
      
      <div style={{ ...withSideMenuStyles.sideMenuContainer }}>
        <SideMenu />
      </div>

      <Component {...props} />

    </div>
  )
}

export default withSideMenu
