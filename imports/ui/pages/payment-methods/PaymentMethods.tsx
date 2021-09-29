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

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visualBuilderElements'

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
    <VBDiv 
      className={styles.paymentMethodsContainer} 
      style={{ ...paymentMethodsStyles.paymentMethodsContainer }}
    >
      <VBH2 style={{ ...paymentMethodsStyles.title }}>Billing related information</VBH2>

      <VBH2 style={{ ...paymentMethodsStyles.subTitle }}>My payment methods</VBH2>

      <VBDiv style={{ ...paymentMethodsStyles.line }}></VBDiv>

      <VBDiv style={{ ...paymentMethodsStyles.tableContainer }}>
        
        <VBDiv style={{ ...paymentMethodsStyles.tableHeader }}>

          <VBDiv style={{ ...paymentMethodsStyles.headerLeft }}>
            <VBH2 style={{ ...paymentMethodsStyles.headerTitle }}>Payment Methods</VBH2>
            <p style={{ ...paymentMethodsStyles.headerDescription }}>Which payment mode would you like to use</p>
          </VBDiv>

          <VBDiv style={{ ...paymentMethodsStyles.headerRight }}>
          <VBLink to='/paymentMethod'><CustomButton style={{ ...paymentMethodsStyles.inviteButton1 }}><PlusIcon /></CustomButton></VBLink>

            <VBLink to='/paymentMethod'><CustomButton style={{ ...paymentMethodsStyles.inviteButton2 }}>Add a payment method</CustomButton></VBLink>
          </VBDiv>

        </VBDiv>

        <VBDiv className={styles.tableColumns} style={{ ...paymentMethodsStyles.tableColumns }}>
          <VBDiv className={styles.column} style={{ ...paymentMethodsStyles.column, ...paymentMethodsStyles.columnName }}>Name</VBDiv>
          <VBDiv className={styles.column} style={{ ...paymentMethodsStyles.column, ...paymentMethodsStyles.columnPaymentMode }}>Payment Mode</VBDiv>
          <VBDiv className={styles.column} style={{ ...paymentMethodsStyles.column, ...paymentMethodsStyles.columnLast4 }}>Last 4</VBDiv>
          <VBDiv className={styles.column} style={{ ...paymentMethodsStyles.column, ...paymentMethodsStyles.columnAction }}></VBDiv>
        </VBDiv>
        
        {elements.map((paymentMethod, index) => {
          return (
            <VBDiv className={styles.tableColumns} style={{ ...paymentMethodsStyles.tableRow }} key={index}>
              <VBDiv className={styles.column} style={{ ...paymentMethodsStyles.column, ...paymentMethodsStyles.columnName }}>{paymentMethod.name ?? '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...paymentMethodsStyles.column, ...paymentMethodsStyles.columnPaymentMode }}>{paymentMethod.paymentMode ?? '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...paymentMethodsStyles.column, ...paymentMethodsStyles.columnLast4 }}>{paymentMethod.last4 ? 'XXXX.. ' + paymentMethod.last4 : '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...paymentMethodsStyles.column, ...paymentMethodsStyles.columnAction }}>
                <VBLink to={'/paymentMethods/' + paymentMethod._id}><CustomButton style={{ ...paymentMethodsStyles.editButton }}>Edit</CustomButton></VBLink>
                <DeleteIcon style={{ ...paymentMethodsStyles.deleteIcon }} onClick={() => deletePaymentMethodWarning(paymentMethod)} />
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

          <VBH2 className={styles.deleteTitle} style={{ ...deleteModalStyles.deleteTitle }}>You are about to delete this Payment Method</VBH2>

          <p style={{ ...deleteModalStyles.deleteDescription }}>
            Are you sure?
          </p>
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

export default withLayout(withSideMenu(PaymentMethods))
