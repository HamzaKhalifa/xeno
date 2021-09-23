import React from 'react'
import { useSelector } from 'react-redux'

import Header from '/imports/ui/components/header'
import Footer from '/imports/ui/components/footer'

import useStyles from './styles'

const withLayout = (Component) => props => {
  const { layout: layoutStyles } = useSelector(state => state.theme)

  const styles = useStyles()

  return (
    <div className={styles.layoutContainer} style={{ ...layoutStyles.layoutContainer }}>
      <Header />

      <div className={styles.pageContainer} style={{ ...layoutStyles.pageContainer }}>
        <Component {...props} />
      </div>

      <Footer />
    </div>
  )
}

export default withLayout
