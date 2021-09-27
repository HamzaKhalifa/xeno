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
    <div className={styles.sideMenuContainer} style={{ ...sideMenuStyles.sideMenuContainer }}>
      <div className={styles.top} style={{ ...sideMenuStyles.top }}>

        <div className={styles.dot} style={{ ...sideMenuStyles.dot }}></div>

        <div style={{ ...sideMenuStyles.line }}></div>

        <div className={styles.options} style={{ ...sideMenuStyles.options }}>
          <Link style={{ ...sideMenuStyles.option }} to='/home'><HomeIcon fill={location.pathname === '/home' ? sideMenuStyles.selectedOptionColor : sideMenuStyles.unselectedOptionColor} /></Link>
          <Link style={{ ...sideMenuStyles.option }} to='/contacts'><UserIcon fill={location.pathname === '/contacts' ? sideMenuStyles.selectedOptionColor : sideMenuStyles.unselectedOptionColor} /></Link>
          <Link style={{ ...sideMenuStyles.option }} to='#'><InvoiceIcon onClick={() => Toast.error('Coming soon')} fill={location.pathname === '/invoices' ? 'red' : 'red'} /></Link>
          <Link style={{ ...sideMenuStyles.option }} to='/paymentMethods'><PaymentMethodIcon fill={location.pathname === '/paymentMethods' ? sideMenuStyles.selectedOptionColor : sideMenuStyles.unselectedOptionColor} /></Link>
        </div>

      </div>

      <div className={styles.bottom} style={{ ...sideMenuStyles.bottom }}>
        <CustomButton style={{ ...sideMenuStyles.paramsButton }} onClick={onSettingsClicked}>
          <ParametersIcon fill='red' />
        </CustomButton>
      </div>
      
    </div>
  )
}

export default SideMenu

