import React from 'react'
import { Meteor } from 'meteor/meteor'
import { useSelector } from 'react-redux'
import { useTracker } from 'meteor/react-meteor-data'

import remote, { BusinessCollection } from '/imports/api/remote'

import withLayout from '/imports/ui/hoc/with-layout'
import withSideMenu from '/imports/ui/hoc/with-side-menu'
import Toast from '/imports/ui/components/toast'

import ProgressCheckIcon from '/imports/ui/icons/ProgressCheckIcon'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visual-builder-elements/visualBuilderElements'

import useStyles from './styles'

const Home = () => {
  const { home: homeStyles }: any = useSelector<any>(state => state.theme)

  const styles = useStyles()
  const user: any = useTracker(() => Meteor.user())
  const businesses: any[] = useTracker(() => {
    remote.subscribe('businesses.paginated', { contacts: { $elemMatch: { _id: user?.profile.contact._id } } }, 99, 0)
    
    return BusinessCollection.find({ contacts: { $elemMatch: { _id: user?.profile.contact._id } } }).fetch()
  })

  return (
    <VBDiv 
      className={styles.homeContainer}
      style={{ ...homeStyles.homeContainer }}
    >
      <VBH2 style={{ ...homeStyles.title }}>Welcome to your client portal</VBH2>

      <VBDiv className={styles.sections} style={{ ...homeStyles.sections }}>
        <VBLink className={styles.section} style={{ ...homeStyles.section }} to='#'>
          <VBH3 className={styles.sectionTitle} style={{ ...homeStyles.sectionTitle }}>Your Invoices</VBH3>
          <VBP className={styles.sectionDescription} style={{ ...homeStyles.sectionDescription }}>Consult my invoices</VBP>
        </VBLink>

        <VBLink className={styles.section} style={{ ...homeStyles.section }} to='/paymentMethods'>
          <VBH3 className={styles.sectionTitle} style={{ ...homeStyles.sectionTitle }}>Payment Methods</VBH3>
          <VBP className={styles.sectionDescription} style={{ ...homeStyles.sectionDescription }}>Consult my invoices</VBP>
        </VBLink>
      </VBDiv>

      <VBDiv className={styles.sections} style={{ ...homeStyles.sections }}>
        <VBDiv className={styles.section} style={{ ...homeStyles.section }}>
          <VBH3 className={styles.sectionTitle} style={{ ...homeStyles.sectionTitle }}>Company Profile</VBH3>
          <VBP className={styles.sectionDescription} style={{ ...homeStyles.sectionDescription }}>Consult my company's profile</VBP>

          <VBDiv className={styles.subLinks} style={{ ...homeStyles.subLinks }}>
            <VBLink className={styles.subLink} style={{ ...homeStyles.subLink }} to={'businesses' + (businesses?.length > 0 ? '/' + businesses[0]._id : '')}>Important Information</VBLink>
            <VBLink className={styles.subLink} style={{ ...homeStyles.subLink }} to={'businesses' + (businesses?.length > 0 ? '/' + businesses[0]._id + '/addresses' : '')}>Addresses</VBLink>
          </VBDiv>
        </VBDiv>

        <VBLink className={styles.section} style={{ ...homeStyles.section }} to={'/contacts/' + user?.profile?.contact?._id}>
          <VBH3 className={styles.sectionTitle} style={{ ...homeStyles.sectionTitle }}>My Profile</VBH3>
          <VBP className={styles.sectionDescription} style={{ ...homeStyles.sectionDescription }}>Consult my personal profile</VBP>
        </VBLink>
      </VBDiv>

      <VBDiv className={styles.sections} style={{ ...homeStyles.sections }}>
        <VBLink className={styles.section} style={{ ...homeStyles.section }} to='/contacts'>
          <VBH3 className={styles.sectionTitle} style={{ ...homeStyles.sectionTitle }}>Users</VBH3>
          <VBP className={styles.sectionDescription} style={{ ...homeStyles.sectionDescription }}>Consult my company's profile</VBP>
        </VBLink>

        <VBLink 
          className={styles.section} 
          style={{ ...homeStyles.section, borderColor: 'red', borderWidth: 1, borderStyle: 'solid' }} 
          onClick={() => Toast.error('Coming soon')} to='#'
        >
          <VBH3 className={styles.sectionTitle} style={{ ...homeStyles.sectionTitle }}>Account Completion</VBH3>
          <VBP className={styles.sectionDescription} style={{ ...homeStyles.sectionDescription }}>Consult the necessary information to complete the account</VBP>
          
          <VBDiv style={{ ...homeStyles.progressCheckContainer }}>
            <VBSpan style={{ ...homeStyles.progressPercentage, color: 'red' }}>coming soon.. 70%</VBSpan>
            <ProgressCheckIcon style={{ ...homeStyles.progressCheck }} fill='red' />
          </VBDiv>

        </VBLink>
      </VBDiv>
    </VBDiv>
  )
}

export default withLayout(withSideMenu(Home))
