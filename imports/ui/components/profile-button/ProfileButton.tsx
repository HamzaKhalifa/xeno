import React from 'react'
import { Meteor } from 'meteor/meteor'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTracker } from 'meteor/react-meteor-data'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visualBuilderElements'

interface IProfileButton {
}

const ProfileButton = (props: IProfileButton) => {
  const { profileButton: profileButtonStyles } = useSelector(state => state.theme)

  const user = useTracker(() => Meteor.user())
  
  return (
    <VBLink
      style={{ ...profileButtonStyles.profileButtonContainer }}
      to={'/contacts/' + user.profile?.contact?._id}
    >
      {user.profile.avatar && <img src={user.profile.avatar} style={{ ...profileButtonStyles.avatar }} />}
      <VBSpan style={{ ...profileButtonStyles.firstName }}>{user.profile.firstName}</VBSpan>
    </VBLink>
  )
}

export default ProfileButton

