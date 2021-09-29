import React from 'react'
import { Meteor } from 'meteor/meteor'
import { useTracker } from 'meteor/react-meteor-data'
import { useSelector } from 'react-redux'
import Modal from '@material-ui/core/Modal'
import { Link } from 'react-router-dom'

import remote, { InvoiceCollection } from '/imports/api/remote'

import withLayout from '/imports/ui/hoc/with-layout'
import withSideMenu from '/imports/ui/hoc/with-side-menu'
import CustomButton from '/imports/ui/components/custom-button'
import Toast from '../../components/toast'

import DeleteIcon from '/imports/ui/icons/DeleteIcon'

import usePaginatedElements from '/imports/ui/hooks/usePaginatedElements'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visualBuilderElements'

import useStyles from './styles'

const Invoices = () => {
  //#region State
  const [deleteModalVisible, setDeleteModalVisible] = React.useState(false)
  const [invoiceToDelete, setInvoiceToDelete] = React.useState(null)

  const { invoices: invoicesStyles, deleteModal: deleteModalStyles } = useSelector(state => state.theme)
  //#endregion State

  //#region Hooks
  const styles = useStyles()
  const user = useTracker(() => Meteor.user())
  const [limit, setLimit, page, setPage, total, elements, loading] = usePaginatedElements({ elementsName: 'invoices', Collection: InvoiceCollection, condition: {} })
  //#endregion Hooks

  //#region Event listeners
  const deleteInvoiceWarning = React.useCallback((invoice) => {
    toggleDeleteModalVisible()
    setInvoiceToDelete(invoice)
  }, [])
  const toggleDeleteModalVisible = React.useCallback(() => setDeleteModalVisible(!deleteModalVisible), [deleteModalVisible])
  const setDeleteModalVisibleValue = React.useCallback((visible) => setDeleteModalVisible(visible), [])
  const deleteElement = React.useCallback(() => {
    remote.call('invoices.remove', [invoiceToDelete._id] error => {
      if (error) Toast.error('Error deleting the invoice: ' + error.message) 
      else {
        setDeleteModalVisibleValue(false)
        Toast.success('Invoice has been deleted')
      }
    })
  }, [invoiceToDelete])
  //#endregion Event listeners

  return (
    <VBDiv style={{ ...invoicesStyles.invoicesContainer }}>
      <VBH2 style={{ ...invoicesStyles.title }}>Your Invoices</VBH2>

      <VBH2 style={{ ...invoicesStyles.subTitle }}>All Invoices</VBH2>

      <VBDiv style={{ ...invoicesStyles.line }}></VBDiv>

      <VBDiv style={{ ...invoicesStyles.tableContainer }}>
        
        <VBDiv style={{ ...invoicesStyles.tableHeader }}>

          <VBDiv style={{ ...invoicesStyles.headerLeft }}>
            <VBH2 style={{ ...invoicesStyles.headerTitle }}>Your Invoices</VBH2>
            <p style={{ ...invoicesStyles.headerDescription }}>Consult your invoices</p>
          </VBDiv>

        </VBDiv>

        <VBDiv className={styles.tableColumns} style={{ ...invoicesStyles.tableColumns }}>
          <VBDiv className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnName }}>Number</VBDiv>
          <VBDiv className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnNumber }}>Number</VBDiv>
          <VBDiv className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnSprint }}>Sprint</VBDiv>
          <VBDiv className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnValue }}>Value</VBDiv>
          <VBDiv className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnCurrency }}>Currency</VBDiv>
          <VBDiv className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnDeadline }}>Deadline</VBDiv>
          <VBDiv className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnDescription }}>Description</VBDiv>
          <VBDiv className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnStatus }}>Status</VBDiv>
          <VBDiv className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnAction }}></VBDiv>
        </VBDiv>
        
        {elements?.map((invoice, index) => {
          return (
            <VBDiv className={styles.tableColumns} style={{ ...invoicesStyles.tableRow }} key={index}>
              <VBDiv className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnNumber }}>{invoice.number ?? '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnSprint }}>{invoice.sprint ?? '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnValue }}>{invoice.value ?? '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnCurrency }}>{invoice.currency ?? '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnDeadline }}>{invoice.deadline ?? '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnDescription }}>{invoice.description ?? '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnStatus }}>{invoice.status ?? '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnAction }}>
                <VBLink to='#'>
                  See details
                </VBLink>
                <DeleteIcon style={{ ...invoicesStyles.deleteIcon }} onClick={() => deleteInvoiceWarning(invoice)} />
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

          <VBH2 className={styles.deleteTitle} style={{ ...deleteModalStyles.deleteTitle }}>You are about to delete this invoice</VBH2>

          <p style={{ ...deleteModalStyles.deleteDescription }}>
            The invoice will no longer have access to his account and his information will be lost
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

export default withLayout(withSideMenu(Invoices))
