import React from 'react'

import CustomLoader from '/imports/ui/components/custom-loader'
import AutomaticLogin from '/imports/ui/pages/automatic-login'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '/imports/ui/components/visual-builder/visualBuilderElements'

const SplashScreen = () => {
  
  return (
    <VBDiv 
      style={{ height: '100vh', width: '100%',display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <AutomaticLogin />
      
      <CustomLoader />
    </VBDiv>
  )
}

export default SplashScreen
