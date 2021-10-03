import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import ToolyIcon from '/imports/ui/icons/ToolyIcon'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '../visual-builder/visual-builder-elements/visualBuilderElements'

import useStyles from './styles'

const Footer = () => {
  const { footer: footerStyles } = useSelector(state => state.theme)

  const styles = useStyles()

  return (
    <VBDiv className={styles.footerContainer} style={{ ...footerStyles.footerContainer }}>
      <VBDiv style={{ ...footerStyles.left }}>
        <ToolyIcon />
        <VBP style={{ ...footerStyles.paragraph }}>
          Tooly est une entreprise Montréalaise spécialisée en transformation numérique. Nous sommes des experts en intégration et formation avec un approche agile 
          qui s’adapte à votre vitesse de croissance. Nous n’avons pas de logiciels préférés. Nos mandats commencent sans idées préconçues. Notre première mission est 
          de trouver la recommandation adaptée 
          à vos besoins.
        </VBP>
      </VBDiv>

      <VBDiv style={{ ...footerStyles.right }}>
        
        <VBDiv style={{ ...footerStyles.rightSection }}>
          <h3 style={{ ...footerStyles.sectionTitle }}>Join Us</h3>

          <VBDiv style={{ ...footerStyles.titleAndLink }}>
            <h4 style={{ ...footerStyles.title }}>Headquarters</h4>
            <VBP style={{ ...footerStyles.linkText }}>205 - 5570 rue Cartier, Montréal, QC H2H 1X9</VBP>
          </VBDiv>

          <VBDiv style={{ ...footerStyles.titleAndLink }}>
            <h4 style={{ ...footerStyles.title }}>Phone</h4>
            <VBP style={{ ...footerStyles.linkText }}>438-823-3487</VBP>
          </VBDiv>

          <VBDiv style={{ ...footerStyles.titleAndLink }}>
            <h4 style={{ ...footerStyles.title }}>Email</h4>
            <VBP style={{ ...footerStyles.linkText }}>info@tooly.services</VBP>
          </VBDiv>
        </VBDiv>

        <VBDiv style={{ ...footerStyles.rightSection }}>
          <h3 style={{ ...footerStyles.sectionTitle }}>Menu</h3>

          <VBDiv style={{ ...footerStyles.titleAndLink }}>
            <VBLink to='#'><VBP style={{ ...footerStyles.linkText }}>Recommandation</VBP></VBLink>
          </VBDiv>

          <VBDiv style={{ ...footerStyles.titleAndLink }}>
            <VBLink to='#'><VBP style={{ ...footerStyles.linkText }}>Integration and formation</VBP></VBLink>
          </VBDiv>

          <VBDiv style={{ ...footerStyles.titleAndLink }}>
            <VBLink to='#'><VBP style={{ ...footerStyles.linkText }}>ToolyHub</VBP></VBLink>
          </VBDiv>

          <VBDiv style={{ ...footerStyles.titleAndLink }}>
            <VBLink to='#'><VBP style={{ ...footerStyles.linkText }}>Investors</VBP></VBLink>
          </VBDiv>
        </VBDiv>

      </VBDiv>
    </VBDiv>
  )
}

export default Footer
