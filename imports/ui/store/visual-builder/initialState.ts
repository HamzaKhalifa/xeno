const initialState = {
  visible: false,
  pages: [
    {
      title: 'Home',
      key: 'home',
      to: '/home',
      collapsed: true
    },
    {
      title: 'Contacts',
      key: 'contacts',
      to: '/contacts',
      collapsed: true
    },
    {
      title: 'Payment Methods',
      key: 'paymentMethods',
      to: '/paymentMethods',
      collapsed: true
    },
  ]
}

export default initialState