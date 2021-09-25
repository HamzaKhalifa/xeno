import React from 'react'

import CustomLoader from '/imports/ui/components/custom-loader'
import AutomaticLogin from '/imports/ui/pages/automatic-login'

const SplashScreen = () => {
  
  return (
    <div 
      style={{ height: '100vh', width: '100%',display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <AutomaticLogin />
      
      <CustomLoader />
    </div>
  )
}

export default SplashScreen
