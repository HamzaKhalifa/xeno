import React from 'react'
import { useTracker } from 'meteor/react-meteor-data'
import { useSelector } from 'react-redux'
import Modal from '@material-ui/core/Modal'

import remote, { AddressCollection, BusinessCollection } from '/imports/api/remote'

import withLayout from '/imports/ui/hoc/with-layout'
import withSideMenu from '/imports/ui/hoc/with-side-menu'
import CustomButton from '/imports/ui/components/custom-button'
import Toast from '../../components/toast'

import PlusIcon from '/imports/ui/icons/PlusIcon'
import DeleteIcon from '/imports/ui/icons/DeleteIcon'

import usePaginatedElements from '/imports/ui/hooks/usePaginatedElements'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visual-builder-elements/visualBuilderElements'

import useStyles from './styles'

interface IAddresses {
  match?: any
}

const Addresses = (props: IAddresses) => {
  const businessId = props.match?.params.id

  //#region State
  const [deleteModalVisible, setDeleteModalVisible] = React.useState(false)
  const [addressToDelete, setAddressToDelete] = React.useState(null)

  const { addresses: addressesStyles, deleteModal: deleteModalStyles }: any = useSelector<any>(state => state.theme)
  //#endregion State

  //#region Hooks
  const styles = useStyles()
  const business: any = useTracker(() => {
    remote.subscribe('businesses.findOne', businessId)

    return BusinessCollection.findOne(businessId)
  })
  const [limit, setLimit, page, setPage, total, elements, loading] = usePaginatedElements({ elementsName: 'addresses', Collection: AddressCollection, condition: { _id: { $in: business?.addresses?.map(address => address._id) ?? [] } } })
  //#endregion Hooks

  //#region Event listeners
  const deleteAddressWarning = React.useCallback((address) => {
    toggleDeleteModalVisible()
    setAddressToDelete(address)
  }, [])
  const toggleDeleteModalVisible = React.useCallback(() => setDeleteModalVisible(!deleteModalVisible), [deleteModalVisible])
  const setDeleteModalVisibleValue = React.useCallback((visible) => setDeleteModalVisible(visible), [])
  const deleteElement = React.useCallback(() => {
    remote.call('addresses.remove', [addressToDelete._id], error => {
      if (error) Toast.error('Error deleting the address: ' + error.message) 
      else {
        setDeleteModalVisibleValue(false)
        Toast.success('Address has been deleted')
      }
    })
  }, [addressToDelete])
  //#endregion Event listeners

  return (
    <VBDiv 
      className={styles.addressesContainer} 
      style={{ ...addressesStyles.addressesContainer }}
    >
      <VBH2 style={{ ...addressesStyles.title }}>Company Profile</VBH2>

      <VBDiv style={{ ...addressesStyles.tabs }}>

        <VBLink to={'/businesses/' + businessId}><VBH2 style={{ ...addressesStyles.subTitle }}>Important Information</VBH2></VBLink>
        <VBLink to={'/businesses/' + businessId + '/addresses'}><VBH2 style={{ ...addressesStyles.selectedSubTitle }}>Addresses</VBH2></VBLink>
      </VBDiv>

      <VBDiv style={{ ...addressesStyles.line }}></VBDiv>

      <VBDiv style={{ ...addressesStyles.tableContainer }}>
        
        <VBDiv style={{ ...addressesStyles.tableHeader }}>

          <VBDiv style={{ ...addressesStyles.headerLeft }}>
            <VBH2 style={{ ...addressesStyles.headerTitle }}>Addresses</VBH2>
            <VBP style={{ ...addressesStyles.headerDescription }}>Company addresses</VBP>
          </VBDiv>

          <VBDiv style={{ ...addressesStyles.headerRight }}>
            <VBLink to={'/businesses/' + businessId + '/addAddress' }><CustomButton style={{ ...addressesStyles.addAddress1 }}><PlusIcon /></CustomButton></VBLink>

            <VBLink to={'/businesses/' + businessId + '/addAddress' }><CustomButton style={{ ...addressesStyles.addAddress2 }}>Add an address</CustomButton></VBLink>
          </VBDiv>

        </VBDiv>

        <VBDiv className={styles.tableColumns} style={{ ...addressesStyles.tableColumns }}>
          <VBDiv className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnNickName }}>Nickname</VBDiv>
          <VBDiv className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnCity }}>City</VBDiv>
          <VBDiv className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnCivicNumber }}>Civic Number</VBDiv>
          <VBDiv className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnCountry }}>Country</VBDiv>
          <VBDiv className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnPostalCode }}>Postal Code</VBDiv>
          <VBDiv className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnProvince }}>Province</VBDiv>
          <VBDiv className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnStreetName }}>Street Name</VBDiv>
          <VBDiv className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnLatitude }}>Latitude</VBDiv>
          <VBDiv className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnLongitude }}>Longitude</VBDiv>
          <VBDiv className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnStreetType }}>Street Type</VBDiv>
          <VBDiv className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnAction }}></VBDiv>
        </VBDiv>
        
        {elements?.map((address, index) => {
          return (
            <VBDiv className={styles.tableColumns} style={{ ...addressesStyles.tableRow }} key={index}>
              <VBDiv className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnNickName }}>{address.nickName ?? '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnCity }}>{address.city ?? '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnCivicNumber }}>{address.civicNumber ?? '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnCountry }}>{address.country ?? '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnPostalCode }}>{address.postalCode ?? '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnProvince }}>{address.province ?? '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnStreetName }}>{address.streetName ?? '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnLatitude }}>{address.latitude ?? '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnLongitude }}>{address.longitude ?? '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnStreetType }}>{address.streetType ?? '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnAction }}>
                <DeleteIcon style={{ ...addressesStyles.deleteIcon }} onClick={() => deleteAddressWarning(address)} />
              </VBDiv>
            </VBDiv>
          )
        })}
      </VBDiv>

      <Modal
        open={deleteModalVisible}
        onClose={toggleDeleteModalVisible}
      >
        <VBDiv className={styles.deleteModalContainer}>

          <VBH2 className={styles.deleteTitle} style={{ ...deleteModalStyles.deleteTitle }}>You are about to delete this Address</VBH2>

          <VBP style={{ ...deleteModalStyles.deleteDescription }}>
            Are you sure?
          </VBP>
          <VBDiv className={styles.deleteActionButtons}>
            <CustomButton style={{ ...deleteModalStyles.deleteButton }} onClick={deleteElement}>Confirm</CustomButton>
            <VBDiv className={styles.space} />
            <CustomButton style={{ ...deleteModalStyles.cancelButton }} onClick={toggleDeleteModalVisible}>Cancel</CustomButton>
          </VBDiv>
        </VBDiv>
      </Modal>
    </VBDiv>
  )
}

export default withLayout(withSideMenu(Addresses))
