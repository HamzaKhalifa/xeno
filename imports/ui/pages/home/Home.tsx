import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'

import withLayout from '/imports/ui/hoc/with-layout'
import withSideMenu from '/imports/ui/hoc/with-side-menu'

import ProgressCheckIcon from '/imports/ui/icons/ProgressCheckIcon'

import useStyles from './styles'

const Home = () => {
  const { home: homeStyles } = useSelector(state => state.theme)

  const styles = useStyles()

  //#region Event listeners
  //#endregion Event listeners

  return (
    <div 
      className={styles.homeContainer} 
      style={{ ...homeStyles.homeContainer }}
    >
      <h2 style={{ ...homeStyles.title }}>Welcome to your client portal</h2>

      <div className={styles.sections} style={{ ...homeStyles.sections }}>
        <Link className={styles.section} style={{ ...homeStyles.section }} to='/'>
          <h3 className={styles.sectionTitle} style={{ ...homeStyles.sectionTitle }}>Your Invoices</h3>
          <p className={styles.sectionDescription} style={{ ...homeStyles.sectionDescription }}>Consult my invoices</p>
        </Link>

        <Link className={styles.section} style={{ ...homeStyles.section }} to='/'>
          <h3 className={styles.sectionTitle} style={{ ...homeStyles.sectionTitle }}>Your Invoices</h3>
          <p className={styles.sectionDescription} style={{ ...homeStyles.sectionDescription }}>Consult my invoices</p>
        </Link>
      </div>

      <div className={styles.sections} style={{ ...homeStyles.sections }}>
        <Link className={styles.section} style={{ ...homeStyles.section }} to='/'>
          <h3 className={styles.sectionTitle} style={{ ...homeStyles.sectionTitle }}>Company Profile</h3>
          <p className={styles.sectionDescription} style={{ ...homeStyles.sectionDescription }}>Consult my company's profile</p>

          <div className={styles.subLinks} style={{ ...homeStyles.subLinks }}>
            <Link className={styles.subLink} style={{ ...homeStyles.subLink }} to='/'>Important Information</Link>
            <Link className={styles.subLink} style={{ ...homeStyles.subLink }} to='/'>Addresses</Link>
          </div>
        </Link>

        <Link className={styles.section} style={{ ...homeStyles.section }} to='/'>
          <h3 className={styles.sectionTitle} style={{ ...homeStyles.sectionTitle }}>My Profile</h3>
          <p className={styles.sectionDescription} style={{ ...homeStyles.sectionDescription }}>Consult my personal profile</p>
        </Link>
      </div>

      <div className={styles.sections} style={{ ...homeStyles.sections }}>
        <Link className={styles.section} style={{ ...homeStyles.section }} to='/'>
          <h3 className={styles.sectionTitle} style={{ ...homeStyles.sectionTitle }}>Users</h3>
          <p className={styles.sectionDescription} style={{ ...homeStyles.sectionDescription }}>Consult my company's profile</p>
        </Link>

        <Link className={styles.section} style={{ ...homeStyles.section }} to='/'>
          <h3 className={styles.sectionTitle} style={{ ...homeStyles.sectionTitle }}>Account Completion</h3>
          <p className={styles.sectionDescription} style={{ ...homeStyles.sectionDescription }}>Consult the necessary information to complete the account</p>
          
          <div style={{ ...homeStyles.progressCheckContainer }}>
            <span style={{ ...homeStyles.progressPercentage }}>70%</span>
            <ProgressCheckIcon style={{ ...homeStyles.progressCheck }} />
          </div>

        </Link>
      </div>
    </div>
  )
}

export default withLayout(withSideMenu(Home))
