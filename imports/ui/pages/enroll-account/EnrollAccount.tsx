import React from 'react'
import remote from '/imports/api/remote'
import { useHistory } from 'react-router-dom'

import CustomLoader from '/imports/ui/components/custom-loader'
import Toast from '/imports/ui/components/toast'

interface IEnrollAccount {
  match?: any
}

const EnrollAccount = (props: IEnrollAccount) => {
  const enrollmentToken = props.match?.params.enrollmentToken

  const history = useHistory()

  React.useEffect(() => {
    remote.call('contacts.enroll', enrollmentToken, (error, response) => {
      if (error) {
        Toast.error('Error activating your account', error.message)
        history.push('/')
      }
      else {
        Toast.success('Your account has been successfully activated')
        history.push('/')
      }
    })
  }, [])

  return (
    <VBDiv style={{ height: '100vh', width: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <CustomLoader />
    </VBDiv>
  )
}

export default EnrollAccount
