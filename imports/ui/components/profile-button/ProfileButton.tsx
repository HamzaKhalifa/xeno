import React from 'react'
import { Meteor } from 'meteor/meteor'
import { useSelector } from 'react-redux'
import { useTracker } from 'meteor/react-meteor-data'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '../visual-builder/visual-builder-elements/visualBuilderElements'

interface IProfileButton {
}

const ProfileButton = (props: IProfileButton) => {
  const { profileButton: profileButtonStyles }: any = useSelector<any>(state => state.theme)

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

