import React from 'react'
import { Meteor } from 'meteor/meteor'
import { useSelector } from 'react-redux'
import { useTracker } from 'meteor/react-meteor-data'
import { Link, useHistory } from 'react-router-dom'

import remote, { AddressCollection } from '/imports/api/remote'

import withLayout from '/imports/ui/hoc/with-layout'
import withSideMenu from '/imports/ui/hoc/with-side-menu'

import Toast from '/imports/ui/components/toast'
import CustomInput from '/imports/ui/components/custom-input'
import CustomSelector from '/imports/ui/components/custom-selector'
import CustomButton from '/imports/ui/components/custom-button'

import getAddressName from '/imports/ui/utils/getAddressName'

import useStyles from './styles'

interface IBusiness {
  match?: any
}

const Business = (props: IBusiness) => {
  const id = props.match?.params.id

  //#region State
  const { business: businessStyles }: any = useSelector<any>(state => state.theme)
  const [business, setbusiness] = React.useState<any>({})

  const [name, setName] = React.useState('')
  const [mainAddress, setMainAddress] = React.useState('')

  const [formErrors, setFormErrors] = React.useState<any>({})

  const [loading, setLoading] = React.useState(false)
  //#endregion State

  //#region Hooks
  const styles = useStyles()
  const history = useHistory()
  const user = useTracker(() => Meteor.user())
  React.useEffect(() => {
    if (id) {
      remote.call('businesses.findOne', id, (error, response) => {
        if (error) Toast.error('Error fetching business ' + error.message)
        else {
          setbusiness(response)

          setName(response.name);
          setMainAddress(response.mainAddress)
        }
      })
    }
  }, [])
  const addresses: any = useTracker(() => {
    remote.subscribe('addresses.paginated', { _id: { $in: business?.addresses?.map(address => address._id) ?? [] } }, 999, 0)

    return AddressCollection.find( { _id: { $in: business?.addresses?.map(address => address._id) ?? [] } }).fetch()
  }) 
  //#endregion Hooks
  
  const onNameChange = React.useCallback((e) => setName(e.target.value),[])
  const onMainAddressChange = React.useCallback((e) => setMainAddress(e.target.value),[])

  const save = (e) => {
    e.preventDefault()

    const newBusiness = { ...business, name, mainAddress }

    console.log('newBusiness', newBusiness)

    setLoading(true)
    if (id) {
      remote.call('businesses.update', newBusiness, error => {
        if (error) Toast.error('Error updating Business ' + error.message)
        else Toast.success('Business has been updated')

        setLoading(false)
      })
    } else {
      newBusiness.mainContact = user?.profile?.contact
      newBusiness.contacts = [user?.profile?.contact]

      remote.call('businesses.insert', newBusiness, (error, businessId) => {
        if (error) Toast.error('Error adding Business ' + error.message)
        else Toast.success('Business has been added')

        setLoading(false)

        history.push('/businesses/' + businessId)
      })
    }

  }

  return (
    <form 
      className={styles.businessContainer}
      style={{ ...businessStyles.businessContainer }}
      onSubmit={save}
    >
      <h2 className={styles.title} style={{ ...businessStyles.title }}>Company Profile</h2>

      <div style={{ ...businessStyles.tabs }}>

        <Link to={'/businesses/' + id}><h2 className={styles.subTitle} style={{ ...businessStyles.selectedSubTitle }}>Important Information</h2></Link>
        <Link to={'/businesses/' + id + '/addresses'}><h2 className={styles.subTitle} style={{ ...businessStyles.subTitle }}>Addresses</h2></Link>
      </div>

      <div className={styles.line} style={{ ...businessStyles.line }}></div>

      <div className={styles.information} style={{ ...businessStyles.information }}>

        <h2 className={styles.informationTitle} style={{ ...businessStyles.informationTitle }}>Important Information</h2>
        <span className={styles.informationSubTitle} style={{ ...businessStyles.informationSubTitle }}>We would like to know your company better.</span>

        <CustomInput value={name} style={{ ...businessStyles.name }} label='Name' placeholder='Name' onChange={onNameChange} />

        {addresses && 
          <CustomSelector
            label='Billing Address'
            options={addresses}
            getOptionName={getAddressName}
            onChange={onMainAddressChange}
            value={mainAddress}
            error={formErrors.mainAddress}
          />
        }

      </div>

      <div style={{ ...businessStyles.actionsContainer }}>
        <CustomButton loadingStyle={{ ...businessStyles.loading }} loading={loading} type='submit' style={{ ...businessStyles.saveModifcationsButton }}>Save Modifications</CustomButton>
      </div>
    </form>
  )
}

export default withLayout(withSideMenu(Business))
