import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import ToolyIcon from '/imports/ui/icons/ToolyIcon'

import useStyles from './styles'

const Footer = () => {
  const { footer: footerStyles } = useSelector(state => state.theme)

  const styles = useStyles()

  return (
    <div className={styles.footerContainer} style={{ ...footerStyles.footerContainer }}>
      <div style={{ ...footerStyles.left }}>
        <ToolyIcon />
        <p style={{ ...footerStyles.paragraph }}>
          Tooly est une entreprise Montréalaise spécialisée en transformation numérique. Nous sommes des experts en intégration et formation avec un approche agile 
          qui s’adapte à votre vitesse de croissance. Nous n’avons pas de logiciels préférés. Nos mandats commencent sans idées préconçues. Notre première mission est 
          de trouver la recommandation adaptée 
          à vos besoins.
        </p>
      </div>

      <div style={{ ...footerStyles.right }}>
        
        <div style={{ ...footerStyles.rightSection }}>
          <h3 style={{ ...footerStyles.sectionTitle }}>Join Us</h3>

          <div style={{ ...footerStyles.titleAndLink }}>
            <h4 style={{ ...footerStyles.title }}>Headquarters</h4>
            <p style={{ ...footerStyles.linkText }}>205 - 5570 rue Cartier, Montréal, QC H2H 1X9</p>
          </div>

          <div style={{ ...footerStyles.titleAndLink }}>
            <h4 style={{ ...footerStyles.title }}>Phone</h4>
            <p style={{ ...footerStyles.linkText }}>438-823-3487</p>
          </div>

          <div style={{ ...footerStyles.titleAndLink }}>
            <h4 style={{ ...footerStyles.title }}>Email</h4>
            <p style={{ ...footerStyles.linkText }}>info@tooly.services</p>
          </div>
        </div>

        <div style={{ ...footerStyles.rightSection }}>
          <h3 style={{ ...footerStyles.sectionTitle }}>Menu</h3>

          <div style={{ ...footerStyles.titleAndLink }}>
            <Link to='#'><p style={{ ...footerStyles.linkText }}>Recommandation</p></Link>
          </div>

          <div style={{ ...footerStyles.titleAndLink }}>
            <Link to='#'><p style={{ ...footerStyles.linkText }}>Integration and formation</p></Link>
          </div>

          <div style={{ ...footerStyles.titleAndLink }}>
            <Link to='#'><p style={{ ...footerStyles.linkText }}>ToolyHub</p></Link>
          </div>

          <div style={{ ...footerStyles.titleAndLink }}>
            <Link to='#'><p style={{ ...footerStyles.linkText }}>Investors</p></Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
