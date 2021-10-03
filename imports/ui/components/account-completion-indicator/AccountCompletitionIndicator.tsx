import React from 'react'
import { Meteor } from 'meteor/meteor'
import { useSelector } from 'react-redux'
import { useTracker } from 'meteor/react-meteor-data'

import remote, { PaymentMethodCollection, BusinessCollection, ContactCollection } from '/imports/api/remote'

import ProgressCheckIcon from '/imports/ui/icons/ProgressCheckIcon'

import usePaginatedElements from '/imports/ui/hooks/usePaginatedElements'

import { VBDiv, VBSpan } from '../visual-builder/visual-builder-elements/visualBuilderElements'

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

  const user = useTracker(() => Meteor.user())
  const contact: any = useTracker(() => {
    remote.subscribe('contacts.findOne', user?.profile.contact?._id)

    return ContactCollection.findOne(user?.profile.contact?._id)
  })
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
      + (contact?.phone1 ? 1 : 0) + (paymentMethods?.length > 0 ? 1 : 0) + (businesses.length > 0 && businesses[0].legalName ? 1 : 0) 
      + (businesses.length > 0 && businesses[0].mainAddress ? 1 : 0) 
    return score
  }, [contact, businesses, paymentMethods, user])
  
  return (
    <VBDiv style={{ ...indicatorStyles.accountCompletitionIndicatorContainer }}>
      <ProgressCheckIcon />
      <VBSpan style={{ ...indicatorStyles.text }}>Account Completion</VBSpan>
      <VBSpan style={{ ...indicatorStyles.percentage }}>{percentage / 10 * 100}  %</VBSpan>
    </VBDiv>
  )
}

export default React.memo(AccountCompletitionIndicator)

