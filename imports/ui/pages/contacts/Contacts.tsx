import React from 'react'
import { Meteor } from 'meteor/meteor'
import { useTracker } from 'meteor/react-meteor-data'
import { useSelector } from 'react-redux'
import Modal from '@material-ui/core/Modal'

import remote, { ContactCollection } from '/imports/api/remote'

import withLayout from '/imports/ui/hoc/with-layout'
import withSideMenu from '/imports/ui/hoc/with-side-menu'
import CustomButton from '/imports/ui/components/custom-button'
import Toast from '../../components/toast'

import InvitationIcon from '/imports/ui/icons/InvitationIcon'
import DeleteIcon from '/imports/ui/icons/DeleteIcon'
import ActiveUserIcon from '/imports/ui/icons/ActiveUserIcon'

import usePaginatedElements from '/imports/ui/hooks/usePaginatedElements'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visualBuilderElements'

import useStyles from './styles'

const contacts = () => {
  //#region State
  const [contacts, setContacts] = React.useState([])
  const [deleteModalVisible, setDeleteModalVisible] = React.useState(false)
  const [contactToDelete, setContactToDelete] = React.useState(null)
  const [invitationsLoading, setInvitationsLoading] = React.useState([])

  const { contacts: contactsStyles, deleteModal: deleteModalStyles } = useSelector(state => state.theme)
  //#endregion State

  //#region Hooks
  const styles = useStyles()
  const user = useTracker(() => Meteor.user())
  const [limit, setLimit, page, setPage, total, elements, loading] = usePaginatedElements({ elementsName: 'contacts', Collection: ContactCollection, condition: {} })

  React.useEffect(() => {
    remote.call('contacts.getWithUser', limit, page, {}, (error, response) => {
      if (error) Toast.error('Error fetching contacts ' + error.message)
      else {
        if (JSON.stringify(response) !== JSON.stringify(contacts)) {
          setContacts(response)
          setInvitationsLoading(response.map(contact => ({ contactId: contact._id, loading: false })))
        }
      }
    })
  }, [elements])
  //#endregion Hooks

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
  const inviteContact = React.useCallback((index, contact) => {
    const newInvitationsLoading = invitationsLoading.map(potential => potential.contactId === contact._id ? { contactId: contact._id, loading: true } : potential)
    setInvitationsLoading(newInvitationsLoading)
    remote.call('contacts.invite', contact._id, error => {
      const newInvitationsLoading = invitationsLoading.map(potential => potential.contactId === contact._id ? { contactId: contact._id, loading: false } : potential)
      setInvitationsLoading(newInvitationsLoading)

      if (error) return Toast.error('Error inviting contact ' + error.message)
      else return Toast.success('Invitation has been sent')
    })
  }, [invitationsLoading, contacts])
  //#endregion Event listeners

  return (
    <VBDiv 
      className={styles.contactsContainer} 
      style={{ ...contactsStyles.contactsContainer }}
    >
      <VBH2 style={{ ...contactsStyles.title }}>contacts</VBH2>

      <VBH2 style={{ ...contactsStyles.subTitle }}>User Profiles</VBH2>

      <VBDiv style={{ ...contactsStyles.line }}></VBDiv>

      <VBDiv style={{ ...contactsStyles.tableContainer }}>
        
        <VBDiv style={{ ...contactsStyles.tableHeader }}>

          <VBDiv style={{ ...contactsStyles.headerLeft }}>
            <VBH2 style={{ ...contactsStyles.headerTitle }}>Collaborators profile</VBH2>
            <VBP style={{ ...contactsStyles.headerDescription }}>Which payment mode would you like to use</VBP>
          </VBDiv>

          <VBDiv style={{ ...contactsStyles.headerRight }}>
            <CustomButton style={{ ...contactsStyles.inviteButton1 }}><InvitationIcon /></CustomButton>

            <CustomButton style={{ ...contactsStyles.inviteButton2 }}>Invite Collaborator</CustomButton>
          </VBDiv>

        </VBDiv>

        <VBDiv className={styles.tableColumns} style={{ ...contactsStyles.tableColumns }}>
          <VBDiv className={styles.column} style={{ ...contactsStyles.column, ...contactsStyles.columnName }}>Name</VBDiv>
          <VBDiv className={styles.column} style={{ ...contactsStyles.column, ...contactsStyles.columnPhone }}>Phone number</VBDiv>
          <VBDiv className={styles.column} style={{ ...contactsStyles.column, ...contactsStyles.columnEmail }}>Email Address</VBDiv>
          <VBDiv className={styles.column} style={{ ...contactsStyles.column, ...contactsStyles.columnPost }}>Post</VBDiv>
          <VBDiv className={styles.column} style={{ ...contactsStyles.column, ...contactsStyles.columnProjectRoles }}>Attributed At</VBDiv>
          <VBDiv className={styles.column} style={{ ...contactsStyles.column, ...contactsStyles.columnStatus }}>Status</VBDiv>
          <VBDiv className={styles.column} style={{ ...contactsStyles.column, ...contactsStyles.columnAction }}></VBDiv>
        </VBDiv>
        
        {contacts?.map((contact, index) => {
          const isSocialMediaAccount = ['Facebook', 'Google', 'Linkedin'].indexOf(contact.user?.profile?.loginMethod) !== -1
          const invited = Boolean(contact.user) || isSocialMediaAccount
          const verified = Boolean(contact.user?.emails[0].verified) || isSocialMediaAccount

          return (
            <VBDiv className={styles.tableColumns} style={{ ...contactsStyles.tableRow }} key={index}>
              <VBDiv className={styles.column} style={{ ...contactsStyles.column, ...contactsStyles.columnName }}>{(contact.firstName ?? '') + ' ' + (contact?.lastName ?? '')}</VBDiv>
              <VBDiv className={styles.column} style={{ ...contactsStyles.column, ...contactsStyles.columnPhone }}>{contact.phone1 ?? '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...contactsStyles.column, ...contactsStyles.columnEmail }}>{contact.email ?? '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...contactsStyles.column, ...contactsStyles.columnPost }}>{contact.user?.profile.post ?? '-'}</VBDiv>
              <VBDiv className={styles.column} style={{ ...contactsStyles.column, ...contactsStyles.columnProjectRoles }}>{contact.projectRoles?.map((projectRole, index) => projectRole.name + (index === contact.projectRoles?.length - 1 ? '' : ', '))}</VBDiv>
              <VBDiv className={styles.column} style={{ ...contactsStyles.column, ...contactsStyles.columnStatus }}>
                {(invited && verified) && <VBSpan style={{ ...contactsStyles.status }}>Active <ActiveUserIcon style={{ ...contactsStyles.statusIcon }} /></VBSpan>}
                {(invited && !verified) && <VBSpan style={{ ...contactsStyles.status }}>Invited <InvitationIcon style={{ ...contactsStyles.statusIcon }} /></VBSpan>}
                {(!invited) && <VBSpan style={{ ...contactsStyles.status }}>No Account <InvitationIcon style={{ ...contactsStyles.statusIcon }} /></VBSpan>}
              </VBDiv>
              <VBDiv className={styles.column} style={{ ...contactsStyles.column, ...contactsStyles.columnAction }}>
                {!verified && 
                  <CustomButton 
                    loading={invitationsLoading.find(potential => potential.contactId === contact._id)?.loading} 
                    onClick={() => inviteContact(index, contact)} 
                    style={{ ...contactsStyles.inviteButton }}
                    loadingStyle={{ ...contactsStyles.inviteButtonLoadingStyles }}
                  >
                      Invite
                  </CustomButton>
                }
                {contact.user._id !== user._id && <DeleteIcon style={{ ...contactsStyles.deleteIcon }} onClick={() => deleteContactWarning(contact)} />}
                {contact.user._id === user._id && <VBSpan style={{ ...contactsStyles.you }}>You</VBSpan>}
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

          <VBH2 className={styles.deleteTitle} style={{ ...deleteModalStyles.deleteTitle }}>You are about to delete this contact</VBH2>

          <VBP style={{ ...deleteModalStyles.deleteDescription }}>
            The contact will no longer have access to his account and his information will be lost
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

export default withLayout(withSideMenu(contacts))
