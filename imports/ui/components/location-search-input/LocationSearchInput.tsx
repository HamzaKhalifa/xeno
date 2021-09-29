import React from 'react'
import axios from 'axios'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete'
import { useSelector } from 'react-redux'
import { Meteor } from 'meteor/meteor'

import CustomInput from '/imports/ui/components/custom-input'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visualBuilderElements'

import useStyles from './styles'

interface ILocationSearchInput {
  onChange: any
  address: any
  onSpecificInfoChange: any
  label?: string
  placeholder?: string
}

const LocationSearchInput = (props: ILocationSearchInput) => {
  const { address } = props

  const { input: inputStyles, locationSearchInput: locationSearchInputStyles } = useSelector(state => state.theme)

  const styles = useStyles({ inputStyles, locationSearchInputStyles })

  //#region Change handlers
  const handleChange = address => props.onChange(address)

  const handleSelect = async (address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(async latLng => {
        const specificInfo = await getSpecificInfo(latLng)

        return props.onSpecificInfoChange({
          fullAddress: address,
          ...specificInfo,
          latitude: latLng.lat,
          longitude: latLng.lng
        })
      })
      .catch(error => console.error('Error', error))
  }
  //#endregion Change handlers

  //#region Helper methods
  const getSpecificInfo = async (latLng) => {
    const [place] = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latLng.lat + ',' + latLng.lng + '&key=' + Meteor.settings.public.GOOGLE_API_KEY)
      .then(response => response.data.results)

    const { long_name: postalCode = '' } = place.address_components.find(c => c.types.includes('postal_code')) || {}
    const { long_name: country = '' } = place.address_components.find(c => c.types.includes('country')) || {}
    const { long_name: streetName = '' } = place.address_components.find(c => c.types.includes('route')) || {}
    const { long_name: civicNumber = '' } = place.address_components.find(c => c.types.includes('street_number')) || {}
    const { long_name: city = '' } = place.address_components.find(c => c.types.includes('locality')) || {}
    const { long_name: province = '' } = place.address_components.find(c => c.types.includes('administrative_area_level_1')) || {}

    return {
      postalCode, country, streetName, civicNumber, city, province
    }
  }
  //#endregion Helper methods

  const renderFunc = ({ getInputProps, getSuggestionItemProps, suggestions }) => (
    <VBDiv className={styles.autoCompleteRoot}>
      <CustomInput 
        value={props.address} 
        placeholder={props.placeholder} 
        label={props.label}
        style={{
          width: '100%'
        }}
        {...getInputProps()}
      />
      
      <VBDiv 
        style={{ border: suggestions.length > 0 ? '1px solid #d9d9d9': 'none' }} 
        className={styles.autoCompleteDropdownContainer}>
        {suggestions.map((suggestion, index) => (
          <VBDiv key={index} className={styles.suggestion} key={index} {...getSuggestionItemProps(suggestion)}>
            <VBSpan>{suggestion.description}</VBSpan>
          </VBDiv>
        ))}
      </VBDiv>
    </VBDiv>
  )

  return (
    <PlacesAutocomplete
      value={address ? address : ''}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {renderFunc}
    </PlacesAutocomplete>
  )
}

export default LocationSearchInput
