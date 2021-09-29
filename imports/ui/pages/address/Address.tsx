import React from 'react'
import { Meteor } from 'meteor/meteor'
import { useSelector } from 'react-redux'
import { useTracker } from 'meteor/react-meteor-data'
import { Link, useHistory } from 'react-router-dom'

import remote from '/imports/api/remote'

import withLayout from '/imports/ui/hoc/with-layout'
import withSideMenu from '/imports/ui/hoc/with-side-menu'

import AddressForm from '/imports/ui/pages/payment-method/address-form'
import Toast from '/imports/ui/components/toast'

import useStyles from './styles'

interface IAddress {
  match?: any
}

const Address = (props: IAddress) => {
  const businessId = props.match?.params.id
  const addressId = props.match?.params.addressId

  //#region State
  const { address: addressStyles }: any = useSelector<any>(state => state.theme)
  const [business, setBusiness] = React.useState(null)

  const [loading, setLoading] = React.useState(false)
  //#endregion State

  //#region Hooks
  const styles = useStyles()
  const history = useHistory()
  const user = useTracker(() => Meteor.user())
  React.useEffect(() => {
    // We are adding an address to a business, so we need to update the business. And in order to do that, we need to get the business
    if (businessId) {
      remote.call('businesses.findOne', businessId, (error, response) => {
        if (error) Toast.error('Error fetching Business ' + error.message)
        else {
          setBusiness(response)
        }
      })
    }
  }, [businessId])

  //#endregion Hooks

  const save = (address) => {

    setLoading(true)
    if (addressId) {
      remote.call('addresses.update', address, error => {
        setLoading(false)
        if (error) return Toast.error('Error updating address ' + error.message)
      })
    } else {
      // We insert the address, then we add the inserted address to the business
      remote.call('addresses.insert', address, (error, newAddressId) => {
        if (error) {
          setLoading(false)
          return Toast.error('Error adding address ' + error.message)
        }
        else {
          const newBusiness = { ...business }
          newBusiness.addresses = newBusiness.addresses ?? []
          newBusiness.addresses.push({ ...address, _id: newAddressId })
          remote.call('businesses.update', newBusiness, error => {
            setLoading(false)
            if (error) Toast.error('Error adding address to business ' + error.message)
            else history.push('/businesses/' + businessId + '/addresses')
          })
        }
      })

    }
  }

  return (
    <form 
      className={styles.addressContainer}
      style={{ ...addressStyles.addressContainer }}
      onSubmit={save}
    >
      <h2 style={{ ...addressStyles.title }}>{addressId ? 'Edit Address' : 'Add Address'}</h2>

      <div style={{ ...addressStyles.tabs }}>
        <Link to={'/businesses/' + businessId}><h2 style={{ ...addressStyles.subTitle }}>Important Information</h2></Link>
        <Link to={'/businesses/' + businessId + '/addresses'}><h2 style={{ ...addressStyles.subTitle }}>Addresses</h2></Link>
        <Link to={'/businesses/' + businessId + (addressId ? '/addresses/' + addressId : '/addAddress')}><h2 style={{ ...addressStyles.selectedSubTitle }}>Address</h2></Link>
      </div>

      <div style={{ ...addressStyles.line }}></div>

      <div style={{ ...addressStyles.information }}>
        <AddressForm save={save} loading={loading} id={addressId} />
      </div>
    </form>
  )
}

export default withLayout(withSideMenu(Address))
