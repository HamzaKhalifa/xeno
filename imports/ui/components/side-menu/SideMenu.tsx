import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import HomeIcon from '/imports/ui/icons/HomeIcon'
import UserIcon from '/imports/ui/icons/UserIcon'
import InvoiceIcon from '/imports/ui/icons/InvoiceIcon'
import PaymentMethodIcon from '/imports/ui/icons/PaymentMethodIcon'
import ParametersIcon from '/imports/ui/icons/ParametersIcon'

import Toast from '/imports/ui/components/toast'
import CustomButton from '/imports/ui/components/custom-button'

import { setVisualBuilderVisible } from '/imports/ui/store/visual-builder/actions'

import { VBDiv, VBH2, VBH3, VBLink, VBP, VBSpan, VBForm } from '../visual-builder/visual-builder-elements/visualBuilderElements'

import useStyles from './styles'

interface ISideMenu {
}

const SideMenu = (props: ISideMenu) => {
  const { sideMenu: sideMenuStyles }: any = useSelector<any>(state => state.theme)

  const visualBuilderVisible = useSelector<any>(state => state.visualBuilder.visible)

  const styles = useStyles()
  const dispatch = useDispatch()

  const location = useLocation()

  const onSettingsClicked = React.useCallback(() => dispatch(setVisualBuilderVisible(!visualBuilderVisible)), [visualBuilderVisible])

  return (
    <VBDiv className={styles.sideMenuContainer} style={{ ...sideMenuStyles.sideMenuContainer }}>
      <VBDiv className={styles.top} style={{ ...sideMenuStyles.top }}>

        <VBDiv className={styles.dot} style={{ ...sideMenuStyles.dot }}></VBDiv>

        <VBDiv style={{ ...sideMenuStyles.line }}></VBDiv>

        <VBDiv className={styles.options} style={{ ...sideMenuStyles.options }}>
          <VBLink style={{ ...sideMenuStyles.option }} to='/home'><HomeIcon fill={location.pathname === '/home' ? sideMenuStyles.selectedOptionColor : sideMenuStyles.unselectedOptionColor} /></VBLink>
          <VBLink style={{ ...sideMenuStyles.option }} to='/contacts'><UserIcon fill={location.pathname === '/contacts' ? sideMenuStyles.selectedOptionColor : sideMenuStyles.unselectedOptionColor} /></VBLink>
          <VBLink style={{ ...sideMenuStyles.option }} to='/invoices'><InvoiceIcon fill={location.pathname === '/invoices' ? sideMenuStyles.selectedOptionColor : sideMenuStyles.unselectedOptionColor} /></VBLink>
          <VBLink style={{ ...sideMenuStyles.option }} to='/paymentMethods'><PaymentMethodIcon fill={location.pathname === '/paymentMethods' ? sideMenuStyles.selectedOptionColor : sideMenuStyles.unselectedOptionColor} /></VBLink>
        </VBDiv>

      </VBDiv>

      <VBDiv className={styles.bottom} style={{ ...sideMenuStyles.bottom }}>
        <CustomButton style={{ ...sideMenuStyles.paramsButton }} onClick={onSettingsClicked}>
          <ParametersIcon fill={visualBuilderVisible ? '#3CD2C8' : '#ABA5A7'} />
        </CustomButton>
      </VBDiv>
      
    </VBDiv>
  )
}

export default SideMenu

