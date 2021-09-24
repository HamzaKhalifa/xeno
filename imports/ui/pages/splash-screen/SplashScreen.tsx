import React from 'react'
import useAuth from '../../hooks/useAuth'

import CustomLoader from '/imports/ui/components/custom-loader'

const SplashScreen = () => {

  // useAuth()
  
  return (
    <div 
      style={{ height: '100vh', width: '100%',display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <CustomLoader />
    </div>
  )
}

export default SplashScreen
