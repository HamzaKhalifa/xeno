const initialState = {
  visible: false,
  pages: [
    {
      title: 'Home',
      key: 'home',
      to: '/home',
    },
    {
      title: 'Contacts',
      key: 'contacts',
      to: '/contacts',
    },
    {
      title: 'Payment Methods',
      key: 'paymentMethods',
      to: '/paymentMethods',
    },
  ]
}

export default initialState