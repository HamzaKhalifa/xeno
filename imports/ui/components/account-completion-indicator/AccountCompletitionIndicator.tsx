import React from 'react'
import { Meteor } from 'meteor/meteor'
import { useSelector } from 'react-redux'
import { useTracker } from 'meteor/react-meteor-data'

import remote, { PaymentMethodCollection, BusinessCollection } from '/imports/api/remote'

import ProgressCheckIcon from '/imports/ui/icons/ProgressCheckIcon'

import Toast from '/imports/ui/components/toast'

import usePaginatedElements from '/imports/ui/hooks/usePaginatedElements'

interface ICustomButton {
}

// For the account to be 100% complete, we need all these fields: 
// Firstname
// Lastname
// Post
// Birthday
// Project Role
// Email
// Phone Number
// At least one payment method
// Business name
// Business main address
const AccountCompletitionIndicator = (props: ICustomButton) => {
  const { accountCompletitionIndicator: indicatorStyles }: any = useSelector<any>(state => state.theme)

  const [contact, setContact] = React.useState(null)

  const user = useTracker(() => Meteor.user())
  // get the contact
  React.useEffect(() => {
    remote.call('contacts.getOneWithUser', user?.profile.contact?._id, (error, response) => {
      if (error) Toast.error('Error fetching contact ' + error.message)
      else {
        setContact(response)
      }
    })
  }, [])
  // get the business
  const businesses: any[] = useTracker(() => {
    remote.subscribe('businesses.paginated', { contacts: { $elemMatch: { _id: user?.profile.contact._id } } }, 99, 0)
    
    return BusinessCollection.find({ contacts: { $elemMatch: { _id: user?.profile.contact._id } } }).fetch()
  })
  const [limit, setLimit, page, setPage, total, paymentMethods, loading] = usePaginatedElements({ elementsName: 'paymentMethods', Collection: PaymentMethodCollection, condition: { 'contact._id': user?.profile?.contact?._id } })

  const percentage = React.useMemo(() => {
    let score = 0
    score += (contact?.firstName ? 1 : 0) + (contact?.lastName ? 1 : 0) + (user?.profile?.post ? 1 : 0) + (user?.profile?.birthday ? 1 : 0) 
      + (contact?.projectRoles && contact?.projectRoles?.length > 0 ? 1 : 0) + (contact?.email ? 1 : 0)
      + (contact?.phone1 ? 1 : 0) + (paymentMethods?.length > 0 ? 1 : 0) + (businesses.length > 0 && businesses[0].name ? 1 : 0) 
      + (businesses.length > 0 && businesses[0].mainAddress ? 1 : 0) 
    return score
  }, [contact, businesses, paymentMethods])
  
  return (
    <div style={{ ...indicatorStyles.accountCompletitionIndicatorContainer }}>
      <ProgressCheckIcon />
      <span style={{ ...indicatorStyles.text }}>Account Completion</span>
      <span style={{ ...indicatorStyles.percentage }}>{percentage / 10 * 100}  %</span>
    </div>
  )
}

export default React.memo(AccountCompletitionIndicator)

