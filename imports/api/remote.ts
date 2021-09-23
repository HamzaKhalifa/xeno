import { Meteor } from 'meteor/meteor'
import { DDP } from 'meteor/ddp-client'
import { Accounts } from 'meteor/accounts-base'

const apiehubConnection = DDP.connect(Meteor.settings.public.BACKEND_URL)

export default apiehubConnection

if (Meteor.isClient) {
  Accounts.connection = apiehubConnection
  Accounts.users = new Meteor.Collection('users', { connection: apiehubConnection })
}