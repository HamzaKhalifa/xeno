import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { DDP } from 'meteor/ddp-client'
import { Accounts } from 'meteor/accounts-base'

const apiehubConnection = DDP.connect(Meteor.settings.public.BACKEND_URL)

if (Meteor.isClient) {
  Accounts.connection = apiehubConnection
  Accounts.users = new Mongo.Collection('users', { connection: apiehubConnection })
}

export const ContactCollection = new Mongo.Collection('contacts', { connection: apiehubConnection })
export const AddressCollection = new Mongo.Collection('addresses', { connection: apiehubConnection })
export const BusinessCollection = new Mongo.Collection('businesses', { connection: apiehubConnection })
export const SettingCollection = new Mongo.Collection('settings', { connection: apiehubConnection })
export const PaymentMethodCollection = new Mongo.Collection('paymentMethods', { connection: apiehubConnection })

export default apiehubConnection