import React from 'react'
import { useSelector } from 'react-redux'

import remote from '/imports/api/remote'

import LocationSearchInput from '/imports/ui/components/location-search-input'
import CustomInput from '/imports/ui/components/custom-input'
import CustomButton from '/imports/ui/components/custom-button'
import Toast from '/imports/ui/components/toast'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visualBuilderElements'

import useStyles from './styles'

interface IAddressForm {
  save?: any
  loading?: boolean
  id?: string
}

const AddressForm = (props: IAddressForm) => {
  //#region State
  const [address, setAddress] = React.useState(null)

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
  React.useEffect(() => {
    if (props.id) {
      remote.call('addresses.findOne', props.id, (error, response) => {
        if (error) return Toast.error('Error fetching address ' + error.message)
        else {
          setAddress(response)

          setNickName(response.nickName)
          setCity(response.city)
          setCivicNumber(response.civicNumber)
          setCountry(response.country)
          setPostalCode(response.postalCode)
          setProvince(response.province)
          setStreetName(response.streetName)
          setLatitude(response.latitude)
          setLongitude(response.longitude)
          setStreetType(response.streetType)
        }
      })
    }
  }, [props.id])
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
      ...address,
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
    <VBDiv className={styles.addressForm} style={{ ...addressFormStyles.addressFormContainer }}>
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

      <VBDiv className={styles.gap}></VBDiv>

      <CustomInput 
        placeholder='Country'
        label='Country' 
        value={country} 
        onChange={onCountryChange}
        type='text' 
        error={formErrors.country}
      />

      <VBDiv className={styles.gap}></VBDiv>

      <CustomInput 
        placeholder='Province'
        label='Province' 
        value={province} 
        onChange={onProvinceChange}
        type='text' 
        error={formErrors.province}
      />

      <VBDiv className={styles.gap}></VBDiv>

      <CustomInput 
        placeholder='City'
        label='City' 
        value={city} 
        onChange={onCityChange}
        type='text' 
        error={formErrors.city}
      />

      <VBDiv className={styles.gap}></VBDiv>
      
      <CustomInput 
        placeholder='Postal Code'
        label='Postal Code' 
        value={postalCode} 
        onChange={onPostalCodeChange}
        type='text' 
        error={formErrors.postalCode}
      />

      <VBDiv className={styles.gap}></VBDiv>

      <CustomInput 
        placeholder='Street Name'
        label='Street Name' 
        value={streetName} 
        onChange={onStreetNameChange}
        type='text' 
        error={formErrors.streetName}
      />

      <VBDiv className={styles.gap}></VBDiv>

      <CustomInput 
        placeholder='Civic Number'
        label='Civic Number' 
        value={civicNumber} 
        onChange={onCivicNumberChange}
        type='text' 
        error={formErrors.civicNumber}
      />

      <VBDiv className={styles.gap}></VBDiv>

      <CustomInput 
        placeholder='Street Type'
        label='Street Type' 
        value={streetType} 
        onChange={onStreetTypeChange}
        type='text' 
        error={formErrors.streetType}
      />

      <VBDiv className={styles.gap}></VBDiv>

      <CustomInput 
        placeholder='Latitude'
        label='Latitude' 
        value={latitude} 
        onChange={onLatitudeChange}
        type='number' 
        error={formErrors.latitude}
      />

      <VBDiv className={styles.gap}></VBDiv>

      <CustomInput placeholder='Longitude'
        label='Longitude' 
        value={longitude} 
        onChange={onLongitudeChange}
        type='number' 
        error={formErrors.longitude}
      />

      <VBDiv className={styles.buttonsContainer}>
        <CustomButton onClick={save} loading={props.loading}>Save Address</CustomButton>
      </VBDiv>
    </VBDiv>
  )
}

export default AddressForm
