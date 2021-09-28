import React from 'react'
import { useTracker } from 'meteor/react-meteor-data'
import { useSelector } from 'react-redux'
import Modal from '@material-ui/core/Modal'
import { Link } from 'react-router-dom'

import remote, { AddressCollection, BusinessCollection } from '/imports/api/remote'

import withLayout from '/imports/ui/hoc/with-layout'
import withSideMenu from '/imports/ui/hoc/with-side-menu'
import CustomButton from '/imports/ui/components/custom-button'
import Toast from '../../components/toast'

import PlusIcon from '/imports/ui/icons/PlusIcon'
import DeleteIcon from '/imports/ui/icons/DeleteIcon'

import usePaginatedElements from '/imports/ui/hooks/usePaginatedElements'

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
    <div 
      className={styles.addressesContainer} 
      style={{ ...addressesStyles.addressesContainer }}
    >

      <h2 style={{ ...addressesStyles.title }}>Company Profile</h2>

      <div style={{ ...addressesStyles.tabs }}>

        <Link to={'/businesses/' + businessId}><h2 style={{ ...addressesStyles.subTitle }}>Important Information</h2></Link>
        <Link to={'/businesses/' + businessId + '/addresses'}><h2 style={{ ...addressesStyles.selectedSubTitle }}>Addresses</h2></Link>
      </div>

      <div style={{ ...addressesStyles.line }}></div>

      <div style={{ ...addressesStyles.tableContainer }}>
        
        <div style={{ ...addressesStyles.tableHeader }}>

          <div style={{ ...addressesStyles.headerLeft }}>
            <h2 style={{ ...addressesStyles.headerTitle }}>Addresses</h2>
            <p style={{ ...addressesStyles.headerDescription }}>Company addresses</p>
          </div>

          <div style={{ ...addressesStyles.headerRight }}>
            <Link to={'/businesses/' + businessId + '/addAddress' }><CustomButton style={{ ...addressesStyles.addAddress1 }}><PlusIcon /></CustomButton></Link>

            <Link to={'/businesses/' + businessId + '/addAddress' }><CustomButton style={{ ...addressesStyles.addAddress2 }}>Add an address</CustomButton></Link>
          </div>

        </div>

        <div className={styles.tableColumns} style={{ ...addressesStyles.tableColumns }}>
          <div className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnNickName }}>Nickname</div>
          <div className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnCity }}>City</div>
          <div className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnCivicNumber }}>Civic Number</div>
          <div className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnCountry }}>Country</div>
          <div className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnPostalCode }}>Postal Code</div>
          <div className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnProvince }}>Province</div>
          <div className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnStreetName }}>Street Name</div>
          <div className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnLatitude }}>Latitude</div>
          <div className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnLongitude }}>Longitude</div>
          <div className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnStreetType }}>Street Type</div>
          <div className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnAction }}></div>
        </div>
        
        {elements?.map((address, index) => {
          return (
            <div className={styles.tableColumns} style={{ ...addressesStyles.tableRow }} key={index}>
              <div className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnNickName }}>{address.nickName ?? '-'}</div>
              <div className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnCity }}>{address.city ?? '-'}</div>
              <div className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnCivicNumber }}>{address.civicNumber ?? '-'}</div>
              <div className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnCountry }}>{address.country ?? '-'}</div>
              <div className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnPostalCode }}>{address.postalCode ?? '-'}</div>
              <div className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnProvince }}>{address.province ?? '-'}</div>
              <div className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnStreetName }}>{address.streetName ?? '-'}</div>
              <div className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnLatitude }}>{address.latitude ?? '-'}</div>
              <div className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnLongitude }}>{address.longitude ?? '-'}</div>
              <div className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnStreetType }}>{address.streetType ?? '-'}</div>
              <div className={styles.column} style={{ ...addressesStyles.column, ...addressesStyles.columnAction }}>
                <DeleteIcon style={{ ...addressesStyles.deleteIcon }} onClick={() => deleteAddressWarning(address)} />
              </div>
            </div>
          )
        })}
      </div>

      <Modal
        open={deleteModalVisible}
        onClose={toggleDeleteModalVisible}
      >
        <div className={styles.deleteModalContainer}>

          <h2 className={styles.deleteTitle} style={{ ...deleteModalStyles.deleteTitle }}>You are about to delete this Address</h2>

          <p style={{ ...deleteModalStyles.deleteDescription }}>
            Are you sure?
          </p>
          <div className={styles.deleteActionButtons}>
            <CustomButton style={{ ...deleteModalStyles.deleteButton }} onClick={deleteElement}>Confirm</CustomButton>
            <div className={styles.space} />
            <CustomButton style={{ ...deleteModalStyles.cancelButton }} onClick={toggleDeleteModalVisible}>Cancel</CustomButton>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default withLayout(withSideMenu(Addresses))
