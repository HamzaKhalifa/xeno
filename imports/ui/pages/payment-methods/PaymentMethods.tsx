import React from 'react'
import { Meteor } from 'meteor/meteor'
import { useTracker } from 'meteor/react-meteor-data'
import { useSelector } from 'react-redux'
import Modal from '@material-ui/core/Modal'
import { Link } from 'react-router-dom'

import remote, { PaymentMethodCollection } from '/imports/api/remote'

import withLayout from '/imports/ui/hoc/with-layout'
import withSideMenu from '/imports/ui/hoc/with-side-menu'
import CustomButton from '/imports/ui/components/custom-button'
import Toast from '../../components/toast'

import PlusIcon from '/imports/ui/icons/PlusIcon'
import DeleteIcon from '/imports/ui/icons/DeleteIcon'

import usePaginatedElements from '/imports/ui/hooks/usePaginatedElements'

import useStyles from './styles'

const PaymentMethods = () => {
  //#region State
  const [deleteModalVisible, setDeleteModalVisible] = React.useState(false)
  const [paymentMethodToDelete, setPaymentMethodToDelete] = React.useState(null)

  const { paymentMethods: paymentMethodsStyles, deleteModal: deleteModalStyles }: any = useSelector<any>(state => state.theme)
  //#endregion State

  //#region Hooks
  const styles = useStyles()
  const user = useTracker(() => Meteor.user())
  const [limit, setLimit, page, setPage, total, elements, loading] = usePaginatedElements({ elementsName: 'paymentMethods', Collection: PaymentMethodCollection, condition: { 'contact._id': user?.profile?.contact?._id } })
  //#endregion Hooks

  //#region Event listeners
  const deletePaymentMethodWarning = React.useCallback((paymentMethod) => {
    toggleDeleteModalVisible()
    setPaymentMethodToDelete(paymentMethod)
  }, [])
  const toggleDeleteModalVisible = React.useCallback(() => setDeleteModalVisible(!deleteModalVisible), [deleteModalVisible])
  const setDeleteModalVisibleValue = React.useCallback((visible) => setDeleteModalVisible(visible), [])
  const deleteElement = React.useCallback(() => {
    remote.call('paymentMethods.remove', [paymentMethodToDelete._id], error => {
      if (error) Toast.error('Error deleting the payment method: ' + error.message) 
      else {
        setDeleteModalVisibleValue(false)
        Toast.success('Payment Method has been deleted')
      }
    })
  }, [paymentMethodToDelete])
  //#endregion Event listeners

  return (
    <div 
      className={styles.paymentMethodsContainer} 
      style={{ ...paymentMethodsStyles.paymentMethodsContainer }}
    >
      <h2 style={{ ...paymentMethodsStyles.title }}>Billing related information</h2>

      <h2 style={{ ...paymentMethodsStyles.subTitle }}>My payment methods</h2>

      <div style={{ ...paymentMethodsStyles.line }}></div>

      <div style={{ ...paymentMethodsStyles.tableContainer }}>
        
        <div style={{ ...paymentMethodsStyles.tableHeader }}>

          <div style={{ ...paymentMethodsStyles.headerLeft }}>
            <h2 style={{ ...paymentMethodsStyles.headerTitle }}>Payment Methods</h2>
            <p style={{ ...paymentMethodsStyles.headerDescription }}>Which payment mode would you like to use</p>
          </div>

          <div style={{ ...paymentMethodsStyles.headerRight }}>
          <Link to='/paymentMethod'><CustomButton style={{ ...paymentMethodsStyles.inviteButton1 }}><PlusIcon /></CustomButton></Link>

            <Link to='/paymentMethod'><CustomButton style={{ ...paymentMethodsStyles.inviteButton2 }}>Add a payment method</CustomButton></Link>
          </div>

        </div>

        <div className={styles.tableColumns} style={{ ...paymentMethodsStyles.tableColumns }}>
          <div className={styles.column} style={{ ...paymentMethodsStyles.column, ...paymentMethodsStyles.columnName }}>Name</div>
          <div className={styles.column} style={{ ...paymentMethodsStyles.column, ...paymentMethodsStyles.columnPaymentMode }}>Payment Mode</div>
          <div className={styles.column} style={{ ...paymentMethodsStyles.column, ...paymentMethodsStyles.columnLast4 }}>Last 4</div>
          <div className={styles.column} style={{ ...paymentMethodsStyles.column, ...paymentMethodsStyles.columnAction }}></div>
        </div>
        
        {elements.map((paymentMethod, index) => {
          return (
            <div className={styles.tableColumns} style={{ ...paymentMethodsStyles.tableRow }} key={index}>
              <div className={styles.column} style={{ ...paymentMethodsStyles.column, ...paymentMethodsStyles.columnName }}>{paymentMethod.name ?? '-'}</div>
              <div className={styles.column} style={{ ...paymentMethodsStyles.column, ...paymentMethodsStyles.columnPaymentMode }}>{paymentMethod.paymentMode ?? '-'}</div>
              <div className={styles.column} style={{ ...paymentMethodsStyles.column, ...paymentMethodsStyles.columnLast4 }}>{paymentMethod.last4 ? 'XXXX.. ' + paymentMethod.last4 : '-'}</div>
              <div className={styles.column} style={{ ...paymentMethodsStyles.column, ...paymentMethodsStyles.columnAction }}>

                <DeleteIcon style={{ ...paymentMethodsStyles.deleteIcon }} onClick={() => deletePaymentMethodWarning(paymentMethod)} />
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

          <h2 className={styles.deleteTitle} style={{ ...deleteModalStyles.deleteTitle }}>You are about to delete this Payment Method</h2>

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

export default withLayout(withSideMenu(PaymentMethods))
