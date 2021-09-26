import React from 'react'
import { Meteor } from 'meteor/meteor'
import { useSelector } from 'react-redux'
import { useTracker } from 'meteor/react-meteor-data'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import remote from '/imports/api/remote'

import withLayout from '/imports/ui/hoc/with-layout'
import withSideMenu from '/imports/ui/hoc/with-side-menu'

import Toast from '/imports/ui/components/toast'
import CustomInput from '/imports/ui/components/custom-input'
import CustomCheckBoxes from '/imports/ui/components/custom-checkboxes'
import CustomButton from '/imports/ui/components/custom-button'
import CustomSelectorWithSearch from '/imports/ui/components/custom-selector-with-search'
import CustomSelector from '/imports/ui/components/custom-selector'
import AddressForm from '/imports/ui/pages/payment-method/address-form'

import getAddressName from '/imports/ui/utils/getAddressName'

import useStyles from './styles'

interface IPaymentMethod {
  match?: any
}

const PaymentMethod = (props: IPaymentMethod) => {
  const id = props.match?.params.id

  //#region State
  const { paymentMethod: paymentMethodStyles }: any = useSelector<any>(state => state.theme)
  const [paymentMethod, setPaymentMethod] = React.useState({})

  const [name, setName] = React.useState('')
  const [paymentMode, setPaymentMode] = React.useState('Card')
  const [last4, setLast4] = React.useState('')
  const [expirationMonth, setExpirationMonth] = React.useState('')
  const [expirationYear, setExpirationYear] = React.useState('')
  const [currency, setCurrency] = React.useState<any>({ _id: 'ca', name: '$ca' })
  const [institution, setInstitution] = React.useState('')
  const [transit, setTransit] = React.useState('')
  const [accountNumber, setAccountNumber] = React.useState('')
  const [billingAddress, setBillingAddress] = React.useState(null)

  const [formErrors, setFormErrors] = React.useState<any>({})

  const [addressCheckbox, setAddressCheckbox] = React.useState({ _id: 'chooseAddress', name: 'Choose Address' })

  const [loading, setLoading] = React.useState(false)
  const [saveAddressLoading, setSaveAddressLoading] = React.useState(false)
  //#endregion State

  //#region Hooks
  const styles = useStyles()
  const user = useTracker(() => Meteor.user()) 
  const history = useHistory()
  React.useEffect(() => {
    if (id) {
      remote.call('paymentMethods.findOne', id, (error, response) => {
        if (error) Toast.error('Error fetching paymentMethod ' + error.message)
        else {
          setPaymentMethod(response)

          setName(response.name); setPaymentMode(response.paymentMode); setLast4(response.last4); setExpirationMonth(response.expirationMonth); 
          setExpirationYear(response.expirationYear)
          setCurrency(response.currency)
        }
      })
    }
  }, [])
  //#endregion Hooks
  
  //#region Change handlers
  const onNameChange = React.useCallback((e) => setName(e.target.value),[])
  const onPaymentModeChange = React.useCallback((paymentMode) => setPaymentMode(paymentMode._id),[])
  const onLast4Change = React.useCallback((e) => setLast4(e.target.value),[])
  const onExpirationMonthChange = React.useCallback((e) => setExpirationMonth(e.target.value),[])
  const onExpirationYearChange = React.useCallback(e => setExpirationYear(e.target.value), [])
  const onCurrencyChange = React.useCallback(e => console.log('e', e), [])
  const onBillingAddressChange = React.useCallback(billingAddress => setBillingAddress(billingAddress), [])
  const onInstitutionChange = React.useCallback((e) => setInstitution(e.target.value),[])
  const onTransitChange = React.useCallback((e) => setTransit(e.target.value),[])
  const onAccountNumberChange = React.useCallback((e) => setAccountNumber(e.target.value),[])

  const onAddressCheckboxChange = React.useCallback(addressCheckbox => setAddressCheckbox(addressCheckbox), [])
  //#endregion Changer handlers

  const save = (e) => {
    e.preventDefault()

    const newFormErrors: any = {}
    if (!name || name.trim() === '') {
      newFormErrors.name = 'Name is required'
    }

    setFormErrors(newFormErrors)
    if (Object.keys(newFormErrors).length > 0) {
      return Toast.error('Some fields are either invalid or unfilled')
    }

    const newpaymentMethod = {
      name,
      paymentMode,
      last4,
      expirationMonth,
      expirationYear,
      currency,
      contact: user.profile.contact,
      customerType: 'Contact',
      institution, transit, accountNumber,
      billingAddress
    }

    setLoading(true)
    if (id) {
      remote.call('paymentMethods.update', newpaymentMethod, error => {
        if (error) Toast.error('Error updating paymentMethod ' + error.message)
        else Toast.success('paymentMethod has been updated')
  
        setLoading(false)
      })
    } else {
      remote.call('paymentMethods.insert', newpaymentMethod, error => {
        if (error) return Toast.error('Error adding paymentMethod ' + error.message)
        else Toast.success('paymentMethod has been added')
  
        setLoading(false)

        history.push('/paymentMethods')
      })
    }
  }

  const saveAddress = (addressForm) => {
    setSaveAddressLoading(true)
    remote.call('addresses.addAddressToContact', addressForm, user.profile.contact?._id, error => {
      setSaveAddressLoading(false)
      if (error) return Toast.error('Error adding address ' + error.message)
      else Toast.success('Address has been added')
    })
  }

  return (
    <form 
      className={styles.paymentMethodContainer}
      style={{ ...paymentMethodStyles.paymentMethodContainer }}
      onSubmit={save}
    >
      <h2 className={styles.title} style={{ ...paymentMethodStyles.title }}>{id ? name : 'Add a payment method'}</h2>

      <Link to='/paymentMethods' className={styles.goBack} style={{ ...paymentMethodStyles.goBack }}>Go back to payment methods</Link>

      <div className={styles.line} style={{ ...paymentMethodStyles.line }}></div>

      <div className={styles.information} style={{ ...paymentMethodStyles.information }}>
        <h2 className={styles.informationTitle} style={{ ...paymentMethodStyles.informationTitle }}>Information</h2>
        <span className={styles.informationSubTitle} style={{ ...paymentMethodStyles.informationSubTitle }}>Information on the payment method</span>
        
        <CustomInput 
          value={name} 
          style={{ ...paymentMethodStyles.name }} 
          label='Name' 
          placeholder='Name' 
          onChange={onNameChange} 
          error={formErrors.name}
        />

        <CustomCheckBoxes
          label='Payment Mode'
          onChange={onPaymentModeChange}
          checkBoxes={[{ _id: 'Card', name: 'Credit Card' }, { _id: 'PreAuthorizedPayment', name: 'Pre Authorized Payment' }]} 
          selectedCheckBoxes={[
            { _id: paymentMode, name: { PreAuthorizedPayment: 'Pre Authorized Payment', Card: 'Credit Card' }[paymentMode] 
          }]}
        />

        {paymentMode === 'Card' && 
          <div style={{ ...paymentMethodStyles.cardContainer }}>
            <CustomInput 
              value={last4 ?? ''} 
              style={{ ...paymentMethodStyles.last4 }} 
              label='Last 4' 
              placeholder='Last 4' 
              onChange={onLast4Change} 
              error={formErrors.last4}
            />
            <CustomInput 
              value={expirationMonth ?? ''} 
              style={{ ...paymentMethodStyles.expirationMonth }} 
              label='ExpirationMonth' 
              placeholder='MM' 
              onChange={onExpirationMonthChange}
              error={formErrors.expirationMonth}
            />
            <CustomInput 
              value={expirationYear ?? ''} 
              style={{ ...paymentMethodStyles.expirationYear }} 
              label='Expiration Year' 
              placeholder='YYYY' 
              onChange={onExpirationYearChange}
              error={formErrors.expirationYear}
            />
          </div>
        }

        {paymentMode === 'PreAuthorizedPayment' &&
          <div style={{ ...paymentMethodStyles.preAuthorizedPaymentContainer }}>
            
            <div style={{ ...paymentMethodStyles.institutionAndTransit }}>
              <CustomInput
                value={institution ?? ''} 
                style={{ ...paymentMethodStyles.institution }} 
                label='Institution' 
                placeholder='Institution' 
                onChange={onInstitutionChange} 
                error={formErrors.institution}
              />
              <CustomInput 
                value={transit ?? ''} 
                style={{ ...paymentMethodStyles.transit }} 
                label='Transit' 
                placeholder='Transit' 
                onChange={onTransitChange} 
                error={formErrors.transit} 
              />
            </div>

            <CustomInput 
              value={accountNumber ?? ''} 
              style={{ ...paymentMethodStyles.accountNumber }} 
              label='Account Number' 
              placeholder='Account Number' 
              onChange={onAccountNumberChange} 
              error={formErrors.accountNumber} 
            />
          </div>
        }

        <CustomSelector 
          label='Currency'
          options={[
            { _id: 'ca', name: '$ca' },
            { _id: 'us', name: '$us' }
          ]}
          getOptionName={(option: any) => option.name ?? ''}
          onChange={onCurrencyChange}
          value={currency}
        />
      </div>

      <div style={{ ...paymentMethodStyles.billingAddressContainer }}>

        <h2 style={{ ...paymentMethodStyles.billingAddressTitle }}>Billing Address</h2>
        <span style={{ ...paymentMethodStyles.billingAddressDescription }}>Address at which you'll receive the bill</span>

        <CustomCheckBoxes 
          checkBoxes={[
            { _id: 'chooseAddress', name: 'Choose Address' }, 
            { _id: 'addAddress', name: 'Add Address' }
          ]} 
          onChange={onAddressCheckboxChange}
          selectedCheckBoxes={[addressCheckbox]}
          style={{ ...paymentMethodStyles.addressCheckboxes }}
        />

        {addressCheckbox._id === 'chooseAddress' && 
          <CustomSelectorWithSearch
            label='Billing Address'
            elementsName={'addresses'}
            searchMethod='addresses.search'
            getOptionName={getAddressName}
            onChange={onBillingAddressChange}
            value={billingAddress}
          />
        }

        {addressCheckbox._id === 'addAddress' && <AddressForm save={saveAddress} loading={saveAddressLoading} />}
      </div>

      <div style={{ ...paymentMethodStyles.actionsContainer }}>
        <CustomButton style={{ ...paymentMethodStyles.cancelButton }}>Cancel</CustomButton>
        <CustomButton loadingStyle={{ ...paymentMethodStyles.loading }} loading={loading} type='submit' style={{ ...paymentMethodStyles.saveModifcationsButton }}>Save Modifications</CustomButton>
      </div>
    </form>
  )
}

export default withLayout(withSideMenu(PaymentMethod))
