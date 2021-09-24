import React from 'react'
import { useSelector } from 'react-redux'
import Modal from '@material-ui/core/Modal'

import remote, { ContactCollection } from '/imports/api/remote'

import withLayout from '/imports/ui/hoc/with-layout'
import withSideMenu from '/imports/ui/hoc/with-side-menu'
import CustomButton from '/imports/ui/components/custom-button'
import Toast from '../../components/toast'

import InvitationIcon from '/imports/ui/icons/InvitationIcon'
import DeleteIcon from '/imports/ui/icons/DeleteIcon'

import usePaginatedElements from '/imports/ui/hooks/usePaginatedElements'

import useStyles from './styles'

const contacts = () => {
  const { contacts: contactsStyles, deleteModal: deleteModalStyles } = useSelector(state => state.theme)
  // const [page, setPage] = React.useState(0)
  // const [limit, setLimit] = React.useState(99)
  const [contacts, setContacts] = React.useState([])
  const [deleteModalVisible, setDeleteModalVisible] = React.useState(false)
  const [contactToDelete, setContactToDelete] = React.useState(null)

  const styles = useStyles()
  const [limit, setLimit, page, setPage, total, elements, loading] = usePaginatedElements({ elementsName: 'contacts', Collection: ContactCollection, condition: {} })

  React.useEffect(() => {
    remote.call('contacts.getWithUser', limit, page, {}, (error, response) => {
      if (error) Toast.error('Error fetching contacts ' + error.message)
      else {
        if (JSON.stringify(response) !== JSON.stringify(contacts) )
          setContacts(response)
      }
    })
  }, [elements])

  //#region Event listeners
  const deleteContactWarning = React.useCallback((contact) => {
    toggleDeleteModalVisible()
    setContactToDelete(contact)
  }, [])
  const toggleDeleteModalVisible = React.useCallback(() => setDeleteModalVisible(!deleteModalVisible), [deleteModalVisible])
  const setDeleteModalVisibleValue = React.useCallback((visible) => setDeleteModalVisible(visible), [])
  const deleteElement = React.useCallback(() => {
    remote.call('contacts.remove', [contactToDelete._id] error => {
      if (error) Toast.error('Error deleting the contact: ' + error.message) 
      else {
        setDeleteModalVisibleValue(false)
        Toast.success('Contact has been deleted')
      }
    })
  }, [contactToDelete])
  //#endregion Event listeners

  return (
    <div 
      className={styles.contactsContainer} 
      style={{ ...contactsStyles.contactsContainer }}
    >
      <h2 style={{ ...contactsStyles.title }}>contacts</h2>

      <h2 style={{ ...contactsStyles.subTitle }}>User Profiles</h2>

      <div style={{ ...contactsStyles.line }}></div>

      <div style={{ ...contactsStyles.tableContainer }}>
        
        <div style={{ ...contactsStyles.tableHeader }}>

          <div style={{ ...contactsStyles.headerLeft }}>
            <h2 style={{ ...contactsStyles.headerTitle }}>Collaborators profile</h2>
            <p style={{ ...contactsStyles.headerDescription }}>Which payment mode would you like to use</p>
          </div>

          <div style={{ ...contactsStyles.headerRight }}>
            <CustomButton style={{ ...contactsStyles.inviteButton1 }}><InvitationIcon /></CustomButton>

            <CustomButton style={{ ...contactsStyles.inviteButton2 }}>Invite Collaborator</CustomButton>
          </div>

        </div>

        <div className={styles.tableColumns} style={{ ...contactsStyles.tableColumns }}>
          <div className={styles.column} style={{ ...contactsStyles.column, ...contactsStyles.columnName }}>Name</div>
          <div className={styles.column} style={{ ...contactsStyles.column }}>Phone number</div>
          <div className={styles.column} style={{ ...contactsStyles.column, ...contactsStyles.columnEmail }}>Email Address</div>
          <div className={styles.column} style={{ ...contactsStyles.column, ...contactsStyles.columnPost }}>Post</div>
          <div className={styles.column} style={{ ...contactsStyles.column, ...contactsStyles.columnProjectRoles }}>Attributed At</div>
          <div className={styles.column} style={{ ...contactsStyles.column }}>Status</div>
          <div className={styles.column} style={{ ...contactsStyles.column }}></div>
        </div>

        {contacts.map((contact, index) => {
          const invited = Boolean(contact.user)
          const verified = Boolean(contact.user?.emails[0].verified)

          return (
            <div className={styles.tableColumns} style={{ ...contactsStyles.tableColumns, ...contactsStyles.tableRow }} key={index}>
              <div className={styles.column} style={{ ...contactsStyles.column, ...contactsStyles.columnName }}>{(contact.firstName ?? '') + ' ' + (contact?.lastName ?? '')}</div>
              <div className={styles.column} style={{ ...contactsStyles.column }}>{contact.phone1 ?? '-'}</div>
              <div className={styles.column} style={{ ...contactsStyles.column, ...contactsStyles.columnEmail }}>{contact.user?.emails[0].address ?? '-'}</div>
              <div className={styles.column} style={{ ...contactsStyles.column, ...contactsStyles.columnPost }}>{contact.user?.profile.post ?? '-'}</div>
              <div className={styles.column} style={{ ...contactsStyles.column, ...contactsStyles.columnProjectRoles }}>{contact.user?.profile.departments?.map((department, index) => department.name + (index === user.profile.departments?.length - 1 ? '' : ' ,'))}</div>
              <div className={styles.column} style={{ ...contactsStyles.column }}>
                {(invited && verified) && <span>Actif</span>}
                {(!invited && !verified) && <span>Invited</span>}
                {(!invited) && <span>No Account</span>}
              </div>
              <div className={styles.column} style={{ ...contactsStyles.column }}>
                <DeleteIcon onClick={() => deleteContactWarning(contact)} />
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

          <h2 className={styles.deleteTitle} style={{ ...deleteModalStyles.deleteTitle }}>You are about to delete this contact</h2>

          <p style={{ ...deleteModalStyles.deleteDescription }}>
            The contact will no longer have access to his account and his information will be lost
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

export default withLayout(withSideMenu(contacts))
