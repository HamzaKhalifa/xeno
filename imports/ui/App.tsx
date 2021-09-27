import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import SplashScreen from '/imports/ui/pages/splash-screen'
import CreateAccountRequest from '/imports/ui/pages/create-account-request'
import CreateAccountRequestConfirmation from '/imports/ui/pages/create-account-request-confirmation'
import CreateAccount from '/imports/ui//pages/create-account'
import ConfirmEmail from '/imports/ui//pages/confirm-email'
import CreateAccountConfirmation from '/imports/ui/pages/create-account-confirmation'
import EnrollAccount from '/imports/ui/pages/enroll-account'
import Login from '/imports/ui/pages/login'
import ForgotPassword from '/imports/ui/pages/forgot-password'
import ResetPassword from '/imports/ui/pages/reset-password'
import Home from '/imports/ui/pages/home'
import Contacts from './pages/contacts'
import Contact from '/imports/ui/pages/contact'
import PaymentMethods from '/imports/ui/pages/payment-methods'
import PaymentMethod from '/imports/ui/pages/payment-method'
import Business from '/imports/ui/pages/business'
import Addresses from '/imports/ui/pages/addresses'
import Address from '/imports/ui/pages/address'

import store from '/imports/ui/store'

export const App = () => {
  return (
    <Provider store={store}>

      <Toaster position='top-center' reverseOrder={false} toastOptions={{ duration: 5000 }} />

      <BrowserRouter>

        <Switch>
          <Route exact path='/createAccountRequest' component={CreateAccountRequest} />
          <Route exact path='/createAccountRequestConfirmation' component={CreateAccountRequestConfirmation} />
          <Route exact path='/enrollAccount/:enrollmentToken' component={EnrollAccount} />

          <Route path='/createAccount' component={CreateAccount} />
          <Route path='/confirmEmail' component={ConfirmEmail} />
          <Route path='/createAccountConfirmation' component={CreateAccountConfirmation} />

          <Route exact path='/splashScreen' component={SplashScreen} />

          <Route exact path='/login' component={Login} />

          <Route exact path='/forgotPassword' component={ForgotPassword} />
          <Route exact path='/resetPassword/:resetPasswordToken' component={ResetPassword} />

          <Route exact path='/home' component={Home} />
          
          <Route exact path='/contacts' component={Contacts} />

          <Route exact path='/contacts/:id' component={Contact} />

          <Route exact path='/paymentMethods' component={PaymentMethods} />

          <Route exact path='/paymentMethod' component={PaymentMethod} />
          <Route exact path='/paymentMethods/:id' component={PaymentMethod} />

          <Route exact path='/businesses' component={Business} />
          <Route exact path='/businesses/:id' component={Business} />

          <Route exact path='/businesses/:id/addresses' component={Addresses} />
          <Route exact path='/businesses/:id/addresses/:addressId' component={Address} />
          
          <Route exact path='/businesses/:id/addAddress' component={Address} />
          
          <Redirect from='/' to='/splashScreen' />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
