import React from 'react'
import { Meteor } from 'meteor/meteor'
import { useSelector } from 'react-redux'
import { useTracker } from 'meteor/react-meteor-data'

import remote, { SettingCollection } from '/imports/api/remote'

import withLayout from '/imports/ui/hoc/with-layout'
import withSideMenu from '/imports/ui/hoc/with-side-menu'

import Toast from '/imports/ui/components/toast'
import CustomLoader from '/imports/ui/components/custom-loader'
import CustomInput from '/imports/ui/components/custom-input'
import CustomDatePicker from '/imports/ui/components/custom-date-picker'
import CustomPhoneNumber from '/imports/ui/components/custom-phone-input'
import CustomCheckBoxes from '/imports/ui/components/custom-checkboxes'
import CustomButton from '/imports/ui/components/custom-button'

import useStyles from './styles'

interface IContact {
  match?: any
}

const Contact = (props: IContact) => {
  const id = props.match?.params.id

  //#region State
  const { contact: contactStyles } = useSelector(state => state.theme)
  const [contact, setContact] = React.useState({})

  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [post, setPost] = React.useState('')
  const [birthday, setBirthday] = React.useState('')
  const [projectRoles, setProjectRoles] = React.useState<any>([])
  const [email, setEmail] = React.useState('')
  const [phone1, setPhone1] = React.useState('')

  const [loading, setLoading] = React.useState(false)
  //#endregion State

  //#region Hooks
  const styles = useStyles()
  React.useEffect(() => {
    remote.call('contacts.getOneWithUser', id, (error, response) => {
      if (error) Toast.error('Error fetching contact ' + error.message)
      else {
        setContact(response)
        setFirstName(response.firstName); setLastName(response.lastName); setPost(response.user?.profile.post); 
        setBirthday(response.user?.profile.birthday); 
        setProjectRoles(response.projectRoles ?? [])
        setEmail(response.email)
        setPhone1(response.phone1)
      }
    })
  }, [])
  const remoteProjectRoles: any[] = useTracker(() => {
    remote.subscribe('settings.paginated', { settingType: 'projectRole' }, 99, 0)

    return SettingCollection.find({ settingType: 'projectRole' }).fetch()
  })
  //#endregion Hooks
  
  const onFirstNameChange = React.useCallback((e) => setFirstName(e.target.value),[])
  const onLastNameChange = React.useCallback((e) => setLastName(e.target.value),[])
  const onPostChange = React.useCallback((e) => setPost(e.target.value),[])
  const onBirthdayChange = React.useCallback((e) => setBirthday(e.target.value),[])
  const onProjectRolesChange = React.useCallback(projectRoles => setProjectRoles(projectRoles), [])
  const onEmailChange = React.useCallback(e => setEmail(e.target.value), [])
  const onPhone1Change = React.useCallback(phone1 => setPhone1(phone1), [])

  const save = (e) => {
    e.preventDefault()

    const newUser = { ...contact.user, firstName, lastName, post, birthday, email }
    const newContact = { ...contact, firstName, lastName, projectRoles, email, phone1 }
    delete newContact.user

    console.log('new user', newUser)
    console.log('new contact', newContact)

    setLoading(true)

    remote.call('contacts.updateClientPortalContact', newContact, newUser, error => {
      if (error) Toast.error('Error updating contact ' + error.message)
      else Toast.success('Contact has been updated')

      setLoading(false)
    })

  }

  return (
    <form 
      className={styles.contactContainer}
      style={{ ...contactStyles.contactContainer }}
      onSubmit={save}
    >
      <h2 className={styles.title} style={{ ...contactStyles.title }}>Profil</h2>

      <h2 className={styles.subTitle} style={{ ...contactStyles.subTitle }}>Personal Information</h2>

      <div className={styles.line} style={{ ...contactStyles.line }}></div>

      <div className={styles.information} style={{ ...contactStyles.information }}>

        <div className={styles.personalInformation} style={{ ...contactStyles.personalInformation }}>
          <h2 className={styles.personalInformationTitle} style={{ ...contactStyles.personalInformationTitle }}>Personal Information</h2>
          <span className={styles.personalInformationSubTitle} style={{ ...contactStyles.personalInformationSubTitle }}>Tell us more about you.</span>

          <div className={styles.firstNameAndLastName} style={{ ...contactStyles.firstNameAndLastName }}>
            <CustomInput value={firstName} style={{ ...contactStyles.firstName }} label='Firstname' placeholder='Firstname' onChange={onFirstNameChange} />
            <CustomInput value={lastName} style={{ ...contactStyles.lastName }} label='Lastname' placeholder='Lastname' onChange={onLastNameChange} />
          </div>

          <CustomInput value={post ?? ''} style={{ ...contactStyles.post }} label='Post in the company' placeholder='Post' onChange={onPostChange} />
          <CustomDatePicker value={birthday ?? ''} label='Birthday' onChange={onBirthdayChange} />
        </div>
        
        <div className={styles.contactInformation} style={{ ...contactStyles.contactInformation }}>
          <h2 className={styles.contactInformationTitle} style={{ ...contactStyles.contactInformationTitle }}>Contact Information</h2>
          <span className={styles.contactInformationSubTitle} style={{ ...contactStyles.contactInformationSubTitle }}>How can we contact you?</span>

          <CustomCheckBoxes multiple={true} label='Participates in' onChange={onProjectRolesChange} checkBoxes={remoteProjectRoles} selectedCheckBoxes={projectRoles} />

          <CustomInput value={email ?? ''} style={{ ...contactStyles.email }} type='email' label='Email' placeholder='Email' onChange={onEmailChange} />
          <CustomPhoneNumber value={phone1 ?? ''} onChange={onPhone1Change} placeholder='Phone Number' label='Phone Number' />
        </div>

      </div>

      <div style={{ ...contactStyles.actionsContainer }}>
        <CustomButton loadingStyle={{ ...contactStyles.loading }} loading={loading} type='submit' style={{ ...contactStyles.saveModifcationsButton }}>Save Modifications</CustomButton>
      </div>
    </form>
  )
}

export default withLayout(withSideMenu(Contact))
