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
    <div style={{ ...invoicesStyles.invoicesContainer }}>
      <h2 style={{ ...invoicesStyles.title }}>Your Invoices</h2>

      <h2 style={{ ...invoicesStyles.subTitle }}>All Invoices</h2>

      <div style={{ ...invoicesStyles.line }}></div>

      <div style={{ ...invoicesStyles.tableContainer }}>
        
        <div style={{ ...invoicesStyles.tableHeader }}>

          <div style={{ ...invoicesStyles.headerLeft }}>
            <h2 style={{ ...invoicesStyles.headerTitle }}>Your Invoices</h2>
            <p style={{ ...invoicesStyles.headerDescription }}>Consult your invoices</p>
          </div>

        </div>

        <div className={styles.tableColumns} style={{ ...invoicesStyles.tableColumns }}>
          <div className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnName }}>Number</div>
          <div className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnNumber }}>Number</div>
          <div className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnSprint }}>Sprint</div>
          <div className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnValue }}>Value</div>
          <div className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnCurrency }}>Currency</div>
          <div className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnDeadline }}>Deadline</div>
          <div className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnDescription }}>Description</div>
          <div className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnStatus }}>Status</div>
          <div className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnAction }}></div>
        </div>
        
        {elements?.map((invoice, index) => {
          return (
            <div className={styles.tableColumns} style={{ ...invoicesStyles.tableRow }} key={index}>
              <div className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnNumber }}>{invoice.number ?? '-'}</div>
              <div className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnSprint }}>{invoice.sprint ?? '-'}</div>
              <div className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnValue }}>{invoice.value ?? '-'}</div>
              <div className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnCurrency }}>{invoice.currency ?? '-'}</div>
              <div className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnDeadline }}>{invoice.deadline ?? '-'}</div>
              <div className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnDescription }}>{invoice.description ?? '-'}</div>
              <div className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnStatus }}>{invoice.status ?? '-'}</div>
              <div className={styles.column} style={{ ...invoicesStyles.column, ...invoicesStyles.columnAction }}>
                <Link to='#'>
                  See details
                </Link>
                <DeleteIcon style={{ ...invoicesStyles.deleteIcon }} onClick={() => deleteInvoiceWarning(invoice)} />
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

          <h2 className={styles.deleteTitle} style={{ ...deleteModalStyles.deleteTitle }}>You are about to delete this invoice</h2>

          <p style={{ ...deleteModalStyles.deleteDescription }}>
            The invoice will no longer have access to his account and his information will be lost
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

export default withLayout(withSideMenu(Invoices))
