import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import CreateAccountRequest from '/imports/ui/pages/create-account-request'
import CreateAccountRequestConfirmation from '/imports/ui/pages/create-account-request-confirmation'
import CreateAccount from '/imports/ui//pages/create-account'
import ConfirmEmail from '/imports/ui//pages/confirm-email'
import CreateAccountConfirmation from '/imports/ui/pages/create-account-confirmation'
import EnrollAccount from '/imports/ui/pages/enroll-account'
import Login from '/imports/ui/pages/login'
import Home from '/imports/ui/pages/home'

import store from '/imports/ui/store'

export const App = () => {
  return (
    <Provider store={store}>

      <Toaster position='top-center' reverseOrder={false} toastOptions={{ duration: 5000 }}/>

      <BrowserRouter>
        <Switch>
          <Route exact path='/createAccountRequest' component={CreateAccountRequest} />
          <Route exact path='/createAccountRequestConfirmation' component={CreateAccountRequestConfirmation} />
          <Route exact path='/enrollAccount/:enrollmentToken' component={EnrollAccount} />

          <Route path='/createAccount' component={CreateAccount} />
          <Route path='/confirmEmail' component={ConfirmEmail} />
          <Route path='/createAccountConfirmation' component={CreateAccountConfirmation} />

          <Route exact path='/login' component={Login} />

          <Route exact path='/home' component={Home} />

          <Redirect from='/' to='/home' />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
