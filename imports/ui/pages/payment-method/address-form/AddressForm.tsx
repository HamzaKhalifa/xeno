import React from 'react'
import { useSelector } from 'react-redux'

import LocationSearchInput from '/imports/ui/components/location-search-input'
import CustomInput from '/imports/ui/components/custom-input'
import CustomButton from '/imports/ui/components/custom-button'
import Toast from '/imports/ui/components/toast'

import useStyles from './styles'

interface IAddressForm {
  save?: any
  loading?: boolean
}

const AddressForm = (props: IAddressForm) => {
  //#region State
  const [fullAddress, setFullAddress] = React.useState('')
  const [nickName, setNickName] = React.useState('')
  const [city, setCity] = React.useState('')
  const [civicNumber, setCivicNumber] = React.useState('')
  const [country, setCountry] = React.useState('')
  const [postalCode, setPostalCode] = React.useState('')
  const [province, setProvince] = React.useState('')
  const [streetName, setStreetName] = React.useState('')
  const [latitude, setLatitude] = React.useState('')
  const [longitude, setLongitude] = React.useState('')
  const [streetType, setStreetType] = React.useState('')

  const [formErrors, setFormErrors] = React.useState<any>({})

  const { addressForm: addressFormStyles }: any = useSelector<any>(state => state.theme)
  //#endregion State

  //#region Hooks
  const styles = useStyles()
  //#endregion Hooks

  //#region Change handlers
  const onFullAddressChange = React.useCallback(fullAddress => setFullAddress(fullAddress), [])
  const onNickNameChange = React.useCallback(e => setNickName(e.target.value), [])
  const onCityChange = React.useCallback(e => setCity(e.target.value), [])
  const onCivicNumberChange = React.useCallback(e => setCivicNumber(e.target.value), [])
  const onCountryChange = React.useCallback(e => setCountry(e.target.value), [])
  const onPostalCodeChange = React.useCallback(e => setPostalCode(e.target.value), [])
  const onProvinceChange = React.useCallback(e => setProvince(e.target.value), [])
  const onStreetNameChange = React.useCallback(e => setStreetName(e.target.value), [])
  const onLatitudeChange = React.useCallback(e => setLatitude(e.target.value), [])
  const onLongitudeChange = React.useCallback(e => setLongitude(e.target.value), [])
  const onStreetTypeChange = React.useCallback(e => setStreetType(e.target.value), [])

  const onSpecificInfoChange = React.useCallback(e => {
    setFullAddress(e.fullAddress)

    setCity(e.city)
    setCivicNumber(e.civicNumber)
    setCountry(e.country)
    setPostalCode(e.postalCode)
    setProvince(e.province)
    setStreetName(e.streetName)
    setLatitude(e.latitude)
    setLongitude(e.longitude)
    setStreetType('')
  }, [])
  //#endregion Changer handlers

  //#region Event listeners
  const save = () => {
    
    const newFormErrors: any = {}
    if (!nickName || nickName.trim() === '') {
      newFormErrors.nickName = 'You must enter a nickname'
      Toast.error('You must enter a nickname')
    }
    if (!postalCode || postalCode.trim() === '') {
      newFormErrors.postalCode = 'You must enter a postal code'
      Toast.error('You must enter a postal code')
    }
    if (!civicNumber || civicNumber.trim() === '') {
      newFormErrors.civicNumber = 'You must enter a civic number'
      Toast.error('You must enter a civic number')
    } 
    if (!streetName || streetName.trim() === '') {
      newFormErrors.streetName = 'You must enter a street name'
      Toast.error('You must enter a street name')
    }

    setFormErrors(newFormErrors)

    if (Object.keys(newFormErrors).length > 0) return  

    props.save?.({
      nickName,
      city,
      civicNumber,
      country,
      postalCode,
      province,
      streetName,
      latitude,
      longitude,
      streetType,
    })
  }
  //#endregion Event listeners

  return (
    <div className={styles.addressForm} style={{ ...addressFormStyles.estimationContainer }}>
      <LocationSearchInput 
        label='Address'
        placeholder='Type your full address'
        address={fullAddress} 
        onChange={onFullAddressChange} 
        onSpecificInfoChange={onSpecificInfoChange} 
      />

      <CustomInput 
        placeholder='Nickname'
        label='Nickname' 
        value={nickName} 
        onChange={onNickNameChange}
        type='text' 
        error={formErrors.nickName}
      />

      <div className={styles.gap}></div>

      <CustomInput 
        placeholder='Country'
        label='Country' 
        value={country} 
        onChange={onCountryChange}
        type='text' 
        error={formErrors.country}
      />

      <div className={styles.gap}></div>

      <CustomInput 
        placeholder='Province'
        label='Province' 
        value={province} 
        onChange={onProvinceChange}
        type='text' 
        error={formErrors.province}
      />

      <div className={styles.gap}></div>

      <CustomInput 
        placeholder='City'
        label='City' 
        value={city} 
        onChange={onCityChange}
        type='text' 
        error={formErrors.city}
      />

      <div className={styles.gap}></div>
      
      <CustomInput 
        placeholder='Postal Code'
        label='Postal Code' 
        value={postalCode} 
        onChange={onPostalCodeChange}
        type='text' 
        error={formErrors.postalCode}
      />

      <div className={styles.gap}></div>

      <CustomInput 
        placeholder='Street Name'
        label='Street Name' 
        value={streetName} 
        onChange={onStreetNameChange}
        type='text' 
        error={formErrors.streetName}
      />

      <div className={styles.gap}></div>

      <CustomInput 
        placeholder='Civic Number'
        label='Civic Number' 
        value={civicNumber} 
        onChange={onCivicNumberChange}
        type='text' 
        error={formErrors.civicNumber}
      />

      <div className={styles.gap}></div>

      <CustomInput 
        placeholder='Street Type'
        label='Street Type' 
        value={streetType} 
        onChange={onStreetTypeChange}
        type='text' 
        error={formErrors.streetType}
      />

      <div className={styles.gap}></div>

      <CustomInput 
        placeholder='Latitude'
        label='Latitude' 
        value={latitude} 
        onChange={onLatitudeChange}
        type='number' 
        error={formErrors.latitude}
      />

      <div className={styles.gap}></div>

      <CustomInput placeholder='Longitude'
        label='Longitude' 
        value={longitude} 
        onChange={onLongitudeChange}
        type='number' 
        error={formErrors.longitude}
      />

      <div className={styles.buttonsContainer}>
        <CustomButton onClick={save} loading={props.loading}>Save Address</CustomButton>
      </div>
    </div>
  )
}

export default AddressForm
