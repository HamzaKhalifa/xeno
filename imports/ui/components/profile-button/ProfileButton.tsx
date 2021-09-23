import React from 'react'
import { Meteor } from 'meteor/meteor'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTracker } from 'meteor/react-meteor-data'

import AccordionIcon from '/imports/ui/icons/AccordionIcon'

interface IProfileButton {
}

const ProfileButton = (props: IProfileButton) => {
  const { profileButton: profileButtonStyles } = useSelector(state => state.theme)

  const user = useTracker(() => Meteor.user())
  
  return (
    <Link
      style={{ ...profileButtonStyles.profileButtonContainer }}
      to='/profile'
    >
      {user.profile.avatar && <img src={user.profile.avatar} style={{ ...profileButtonStyles.avatar }} />}
      <span style={{ ...profileButtonStyles.firstName }}>{user.profile.firstName}</span>
      <AccordionIcon />
    </Link>
  )
}

export default ProfileButton

