import React from 'react'
import { useSelector } from 'react-redux'

import Header from '/imports/ui/components/header'
import Footer from '/imports/ui/components/footer'

import withVisualBuilder from '/imports/ui/hoc/with-visual-builder/withVisualBuilder'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visualBuilderElements'

import useStyles from './styles'

const withLayout = (Component) => withVisualBuilder(props => {
  const { layout: layoutStyles }: any = useSelector<any>(state => state.theme)

  const styles = useStyles()

  return (
    <VBDiv className={styles.layoutContainer} style={{ ...layoutStyles.layoutContainer }}>
      <Header />

      <VBDiv className={styles.pageContainer} style={{ ...layoutStyles.pageContainer }}>
        <Component {...props} />
      </VBDiv>

      <Footer />
    </VBDiv>
  )
})

export default withLayout
